import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import ProductCard from "../ProductCard";

export const RelatedProducts = ({ products, addToCart, openProduct }) => {
    return (
        <section className="mt-24">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                className="mb-10">
                <span className="inline-flex items-center gap-2 bg-[#7D8453] text-white px-5 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_#000] font-black rotate-2">
                    <Sparkles size={18} />
                    You May Also Like
                </span>

                <h2 className="mt-5 text-4xl lg:text-5xl font-black text-[#5B5D30]">
                    Related Products
                </h2>

                <p className="mt-3 text-gray-600 max-w-xl leading-8">
                    Explore more products that match your style.
                </p>
            </motion.div>

            <div className="flex gap-8 overflow-x-auto pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 scrollbar-hide">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{
                            opacity: 0,

                            y: 40,

                            rotate: index % 2 === 0 ? -3 : 3,
                        }}
                        whileInView={{
                            opacity: 1,

                            y: 0,

                            rotate: index % 2 === 0 ? -2 : 2,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: index * 0.1,

                            duration: 0.45,
                        }}
                        className="min-w-75 md:min-w-0">
                        <ProductCard
                            product={product}
                            addToCart={addToCart}
                            openProduct={openProduct}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
