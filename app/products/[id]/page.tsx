import Image from "next/image";
import {PRODUCTS} from "@/public/constant/product";
import PriceTag from "@/components/PriceTag";

export async function generateStaticParams() {
    return PRODUCTS.map(p => (
        {id: p.id.toString()}
    ));
}

const ProductDetailPage = async(
    {params} : {params: Promise<{id: string}>}
) => {

    const {id} = await params;
    const product = PRODUCTS.find(p => p.id.toString() === id);
    if(!product) {
        return <p>Produk Tidak Ditemukan</p>
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <Image
                src={product.thumbnail}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-md mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">
                {product.name}
            </h1>
            <PriceTag price={product.price} />
            <p className="text-gray-500 mb-4">
                {product.category}
            </p>
            <p>{product.description}</p>
        </div>
    )
}
export default ProductDetailPage
