const PriceTag = (
    {price}: {price: number}
) => {
    const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(price);

    return (
        <p className="text-green-700 font-semibold">
            {formatted}
        </p>
    )
}
export default PriceTag
