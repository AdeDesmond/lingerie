"use client";

import {PostProductForm} from "@/app/(admin)/post-product/_components/post-product-form";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {fetchAllProducts} from "@/lib/fetch-create-products";

export default  function PostProductPage(){
    const [newProduct, setNewProduct] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const handleNewProduct = () => {
        setShowForm(true);
    }
    useEffect(() => {
        const fetchData = async () => {
            return await fetchAllProducts()
        }
        fetchData().then((data) => console.log(data));
    }, []);
    return <div className="w-full">
        <Button onClick={handleNewProduct} size="sm">
            create new product
        </Button>
        {
            showForm && <PostProductForm showForm={showForm} setShowForm={setShowForm}  />
        }
    </div>
}