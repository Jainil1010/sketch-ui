import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, addToCart, openProduct }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = useMemo(() => {
        return ["All", ...new Set(products.map((item) => item.category))];
    }, [products]);

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((item) => item.category === activeCategory);

    return (
        <section className="relative z-10 px-4 md:px-6 py-16 md:py-20 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ rotate: -6, scale: 0.9 }}
                        whileInView={{ rotate: -2, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-3 bg-[#929A67] border-[5px] border-black rounded-3xl shadow-[6px_6px_0px_#000] mb-6">
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
                            Best Sellers
                        </h2>
                    </motion.div>
                    <p className="text-lg md:text-xl font-bold text-zinc-700 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat quos aperiam, facilis sint. Recusandae.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <AnimatePresence mode="popLayout">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                layout
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                whileHover={{ scale: 1.05, rotate: -2, y: -2 }}
                                whileTap={{
                                    scale: 0.95,
                                    x: 2,
                                    y: 2,
                                    shadow: "0px_0px_0px_#000",
                                }}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-3 font-black text-sm md:text-base border-4 border-black rounded-[18px] shadow-[4px_4px_0px_#000] transition-all
                  ${
                      activeCategory === category
                          ? "bg-[#5B5D30] text-white shadow-[6px_6px_0px_#000]"
                          : "bg-[#f8f6ee] text-[#5B5D30] hover:bg-white"
                  }`}>
                                {category}
                            </motion.button>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
                <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}>
                            <ProductCard
                                product={product}
                                addToCart={addToCart}
                                openProduct={openProduct}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
