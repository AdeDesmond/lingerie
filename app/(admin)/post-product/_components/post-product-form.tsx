"use client";
import { MoonLoader, SyncLoader} from "react-spinners";
import {Popover} from "@/app/(admin)/post-product/_components/popover";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
import {ChangeEvent, ElementRef, FormEvent, useRef, useState} from "react";
import {fetchCreateProduct, fetchUploadImages} from "@/lib/fetch-create-products";
import {ImageTypeFromUpload} from "@/types/supabase-types";
import Image from "next/image";


interface PostProductFormProps {
    showForm:boolean;
    setShowForm:(show:boolean) => void;
}
export const PostProductForm = ({showForm, setShowForm}:PostProductFormProps) => {
    const formRef = useRef<ElementRef<"form">>(null);
    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("");
    const [tags, setTags] = useState("");
    const [variants, setVariants] = useState("");
    const [dimensions, setDimensions] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState<null | string>(null)
    const [upLoadingImage, setUpLoadingImage] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsCreating(true);
        const productData = new FormData();
        productData.append("title", title)
        productData.append("brand", brand)
        productData.append("tags", tags)
        productData.append("variants", variants)
        productData.append("dimensions", dimensions)
        productData.append("quantity", quantity);
        productData.append("price", price)
        productData.append("description", description)
        productData.append("imageUrl", imageUrl ? imageUrl : "");
        const response  = await fetchCreateProduct(productData);
        if(response.message === "success"){
            setIsCreating(false);
            formRef.current?.reset()
            setPrice("");
            setTags("");
            setDescription("");
            setBrand("");
            setTitle("");
            setQuantity("")
            setDimensions("")
            setImageUrl("");
            setVariants("");
        }
        //put a loading state
        //disabled button


    }
    const handleUploadImages = async (e:ChangeEvent<HTMLInputElement>) => {
        setUpLoadingImage(true);
        const files = e.target.files;
        const imageData = new FormData();
        if(files && files.length > 0){
            imageData.append("file", files[0])
            const imageFromSuperBaseUrl = await fetchUploadImages(imageData);
            if(imageFromSuperBaseUrl.message === "success"){
                setImageUrl(imageFromSuperBaseUrl.superBaseImageUrl);
                setUpLoadingImage(false);
            }
        }
    }
    const handleShowForm = () => {
        setShowForm(false)
    }
    return <Popover showForm={showForm} setShowForm={setShowForm}>
        <form ref={formRef} onSubmit={handleSubmit} className="w-[50%] bg-white flex flex-col p-4  rounded-md relative">
            <Button onClick={handleShowForm} type="button" variant="ghost" size="sm"
                    className="absolute top-1 right-1 ">
                <X/>
            </Button>
            <h2 className="text-center">Post a new product</h2>
            <label>Title</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="outline-none h-8 w-full focus:ring focus:ring-slate-900 focus:ring-offset-0 transition rounded-md duration-300 border"/>
            <label>Brand</label>
            <input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                type="text"
                className="outline-none h-8 w-full focus:ring focus:ring-slate-900 focus:ring-offset-0 transition rounded-md duration-300 border"/>
            <label>Tags/Keywords</label>
            <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                type="text"
                className="outline-none h-8 w-full focus:ring focus:ring-slate-900 focus:ring-offset-0 transition rounded-md duration-300 border"/>
            <label>Variants</label>
            <input
                value={variants}
                onChange={(e) => setVariants(e.target.value)}
                type="text"
                className="outline-none h-8 w-full focus:ring focus:ring-slate-900 focus:ring-offset-0 transition rounded-md duration-300 border"/>
            <label>Dimensions</label>
            <input
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                type="number"
                className="outline-none h-8 w-full focus:ring focus:ring-slate-900 focus:ring-offset-0 transition rounded-md duration-300 border"/>
            <label>Quantity</label>
            <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                className="outline-none h-8 w-full focus:ring focus:ring-slate-900 focus:ring-offset-0 transition rounded-md duration-300 border"/>
            <label>Price</label>
            <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="outline-none h-8 w-full focus:ring focus:ring-slate-900 focus:ring-offset-0 transition rounded-md duration-300 border"/>
            <label>Description</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="outline-none h-[10rem] w-full focus:ring focus:ring-slate-900 focus:ring-offset-0 transition rounded-md duration-300 border "/>
            <div className="mb-3 mt-3">
                <label className="block">Images</label>
                <input  type="file" multiple className="mb-3 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100" onChange={handleUploadImages}/>
            </div>

            {
                upLoadingImage ? <MoonLoader color="#0ea5e9"  /> : imageUrl !== null && imageUrl.length > 0 && <div className="mb-2">
                    <Image src={imageUrl} alt="product image" width={80} height={80} className="object-cover" />
                </div>
            }

            <Button size="sm" type="submit" disabled={isCreating} className="disabled:cursor-not-allowed">
                {

                    isCreating ? <SyncLoader  /> : "Create a product"
                }
            </Button>

        </form>
    </Popover>
}

/*

Creating a schema for product creation in an eCommerce store involves defining the essential attributes and steps involved in adding a new product to the store's inventory. Here's a basic schema outlining the process:

Product Information:

Product Name
Product Description
SKU (Stock Keeping Unit)
Brand (if applicable)
Category/Subcategory
Price
Quantity/Stock Level
Weight (for shipping calculations)
Dimensions (Length, Width, Height)
Images (Main image and additional images)
Tags/Keywords
Variants (if applicable, e.g., sizes, colors)
Product Attributes:

Size
Color
Material
Style
Flavor (if applicable)
Capacity
Technical Specifications
SEO Information:

Meta Title
Meta Description
URL Slug
Keywords
Inventory Management:

Stock Keeping Unit (SKU)
Stock Quantity
Reorder Level
Supplier Information
Pricing and Discounts:

Regular Price
Sale Price
Discount Percentage
Special Offers
Bundle Deals
Shipping Information:

Weight
Dimensions
Shipping Class
Free Shipping Eligibility
Shipping Restrictions
Tax Configuration:

Tax Class
Taxable/Non-taxable
Tax Rates
Visibility and Availability:

Published/Unpublished
Featured Product
Availability (In stock/Out of stock)
Pre-order Option
Related Products:

Cross-sells
Up-sells
Accessories
Product Reviews and Ratings:

Enable/Disable Reviews
Average Rating
Number of Reviews
Additional Information:

Warranty Information
Return Policy
Product Origin
Safety Information (if applicable)
Custom Fields (if needed):

Any additional fields specific to the store's needs

*/