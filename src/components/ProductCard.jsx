import { motion } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";

export default function ProductCard({ product, addToCart, openProduct }) {
    const isEven = product.id % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, rotate: isEven ? 2 : -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: isEven ? 2 : -2 }}
            whileHover={{
                y: -8,
                rotate: 0,
                shadow: "12px_12px_0px_#000",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative bg-[#f8f6ee] border-[5px] border-black rounded-4xl overflow-visible shadow-[8px_8px_0px_#000]`}>
            <motion.div
                whileHover={{ scale: 1.1, rotate: 25 }}
                className="absolute top-4 right-4 z-20 bg-[#929A67] border-[3px] border-black px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000]">
                Handmade
            </motion.div>

            <div className="relative h-64 w-full overflow-hidden border-b-[5px] border-black bg-[#e8e6de] rounded-t-[27px]">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover block"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl md:text-2xl font-black leading-tight text-[#5B5D30] mb-6">
                    {product.name}
                </h3>

                <div className="flex items-center justify-between gap-4">
                    {/* Left: Price */}
                    <span className="text-3xl font-black text-[#5B5D30] whitespace-nowrap">
                        ₹{product.price}
                    </span>

                    <div className="flex gap-4">
                        <motion.button
                            whileHover={{ x: 4, y: 4 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openProduct(product)}
                            className="px-4 py-2 bg-[#8D998B] text-white border-4 border-black rounded-[22px] font-black shadow-[6px_6px_0px_#000] hover:shadow-none transition-all flex-1 sm:flex-none">
                            <Eye size={24} strokeWidth={3} />
                        </motion.button>

                        <motion.button
                            whileHover={{ x: 4, y: 4 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => addToCart(product)}
                            className="px-4 py-2 bg-[#7D8453] text-white border-4 border-black rounded-[22px] font-black shadow-[6px_6px_0px_#000] hover:shadow-none transition-all flex-1 sm:flex-none">
                            <ShoppingBag size={24} strokeWidth={3} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
