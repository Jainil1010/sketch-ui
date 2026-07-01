import { useEffect, useState } from "react";
import { ProductGallery } from "../components/product/ProductGallery";
import { ProductInfo } from "../components/product/ProductInfo";
import { BuyBox } from "../components/product/BuyBox";
import { ProductFeatures } from "../components/product/ProductFeatures";
import { ProductDescription } from "../components/product/ProductDescription";
import { ProductSpecifications } from "../components/product/ProductSpecifications";
import { ProductReviews } from "../components/product/ProductReviews";
import { RelatedProducts } from "../components/product/RelatedProducts";
import { products } from "../data/products";

export default function ProductPage({ product }) {

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center font-black text-4xl text-[#5B5D30]">
                Product Not Found
            </div>
        );
    }

    function openProduct(prod) {
        console.log("Product Clicked");
    }

    function addToCart(prod, quantity = 1) {
        console.log("Added:", prod.name, quantity);
    }

    function buyNow(prod, quantity = 1) {
        console.log("Buying:", prod.name, quantity);
    }

    const relatedProducts = products.filter((item) => item.id !== product.id);

    return (
        <main className="min-h-screen px-5 md:px-10 lg:px-20 py-10 overflow-hidden">
            <div className="mb-10 font-black text-[#5B5D30]">
                Home  / {product.name}
            </div>

            <section className="grid grid-cols-1 xl:grid-cols-[1fr_1fr_380px] gap-10 items-start">
                <ProductGallery product={product} />
                <ProductInfo product={product} />
                <BuyBox
                    product={product}
                    addToCart={addToCart}
                    buyNow={buyNow}
                />
            </section>

            <ProductFeatures features={product.features} />
            <ProductDescription product={product} />
            <ProductSpecifications specifications={product.specifications} />
            <ProductReviews
                rating={product.rating}
                reviewCount={product.reviewCount}
                reviews={product.reviews}
            />
            <RelatedProducts
                products={relatedProducts}
                addToCart={addToCart}
                openProduct={openProduct}
            />
        </main>
    );
}
