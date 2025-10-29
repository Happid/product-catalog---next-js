'use client';

import {useState} from "react";
import { PRODUCTS } from "@/public/constant/product"
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const ProductPage = () => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');

    const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];

    const filtered = PRODUCTS.filter(p => {
        const matchName = p.name.toLowerCase().includes(query.toLowerCase());
        const matchCategory = category === "All" || p.category === category;
        return matchName && matchCategory;
    });
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
                Product Catalog
            </h1>

            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search products ..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border px-3 py-2 rounded-md w-1/2"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border px-3 py-2 rounded-md"
                >
                    {categories.map(cat => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {filtered.length === 0 ? (
                <p>Tidak Ada Produk</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filtered.map(p => (
                        <Link key={p.id} href={`/products/${p.id}`}>
                            <ProductCard product={p} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
export default ProductPage
