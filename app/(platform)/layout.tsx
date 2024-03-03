interface LayoutProps {
    children:React.ReactNode;
}


export default  function LayoutHome({children }:LayoutProps){
    return <div className="max-w-[1500px] bg-[#FEF9F5] min-h-screen mx-auto">{children}</div>
}