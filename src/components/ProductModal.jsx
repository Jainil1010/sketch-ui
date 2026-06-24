import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Star } from "lucide-react";

export default function ProductModal({ product, close, addToCart }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={close}
                className="fixed inset-0 bg-black/60 z-100"
                aria-hidden="true"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -6, y: 40 }}
                animate={{ opacity: 1, scale: 1, rotate: -1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 40 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="fixed inset-0 z-110 flex items-center justify-center p-4">
                <div className="relative w-full max-w-5xl min-h-[90dvh] lg:min-h-0 bg-[#f8f6ee] border-[6px] border-black rounded-[40px] shadow-[12px_12px_0px_#000] overflow-hidden">
                    <motion.button
                        onClick={close}
                        whileHover={{ x: 4, y: 4 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute right-5 top-5 z-20 p-3 bg-[#7D8453] text-white border-4 border-black rounded-full font-black shadow-[6px_6px_0px_#000] hover:shadow-none transition-all">
                        <X size={24} className="text-black" />
                    </motion.button>

                    <div className="max-h-screen overflow-y-auto">
                        <div className="grid lg:grid-cols-2 h-full">
                            <div className="relative bg-[#8D998B] border-r-[6px] border-black">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-6 left-6 px-4 py-2 bg-[#929A67] border-4 border-black rounded-full font-black -rotate-6 flex items-center gap-2">
                                    Handmade
                                </div>
                            </div>

                            <div className="flex flex-col h-full p-6 sm:p-8 lg:p-10">
                                <div className="flex-1 overflow-y-auto pr-2">
                                    <div className="inline-block px-4 py-2 bg-[#8D998B] border-[3px] border-black rounded-full font-black text-sm">
                                        {product.category}
                                    </div>

                                    <h2
                                        id="modal-title"
                                        className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#5B5D30] leading-tight">
                                        {product.name}
                                    </h2>

                                    <p className="mt-4 md:mt-6 text-base sm:text-lg leading-relaxed text-zinc-700">
                                        {product.description}
                                    </p>

                                    <div className="mt-4 md:mt-8 p-4 sm:p-5 bg-[#e9e8dd] border-4 border-black rounded-3xl">
                                        <h3 className="font-black text-lg sm:text-xl mb-2">
                                            Product Details
                                        </h3>
                                        <ul className="space-y-1 sm:space-y-2 font-bold text-sm sm:text-base">
                                            {product.details.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between gap-4">
                                    <span className="text-4xl sm:text-5xl font-black text-[#5B5D30]">
                                        ₹{product.price}
                                    </span>
                                    <motion.button
                                        onClick={() => addToCart(product)}
                                        whileHover={{ x: 4, y: 4 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#7D8453] text-white border-4 border-black rounded-[28px] text-base sm:text-lg font-black shadow-[6px_6px_0px_#000] hover:shadow-none transition-all sm:w-auto">
                                        <ShoppingBag />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
