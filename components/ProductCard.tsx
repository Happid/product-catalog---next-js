import Image from "next/image";
import PriceTag from "@/components/PriceTag";

const ProductCard = (
    {product}: {product: any}
) => {
    return (
        <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <Image
                src={product.thumbnail}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <PriceTag price={product.price} />
        </div>
    )
}
export default ProductCard
