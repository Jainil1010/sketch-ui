import { motion } from "framer-motion";
import { Star, CheckCircle2, Truck, Heart, ShieldCheck } from "lucide-react";

export const ProductInfo = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6">
            <motion.p
                whileHover={{ x: 4 }}
                className="inline-block bg-[#929A67] px-4 py-2 rounded-full border-4 border-black font-black text-white shadow-[4px_4px_0px_#000]">
                {product.brand}
            </motion.p>

            <h1 className="text-4xl lg:text-5xl font-black text-[#5B5D30] leading-tight">
                {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={22}
                            fill={
                                i < Math.round(product.rating)
                                    ? "#FFD43B"
                                    : "white"
                            }
                            className="text-black"
                            strokeWidth={2.5}
                        />
                    ))}
                </div>

                <span className="font-black text-[#5B5D30]">
                    {product.rating} / 5
                </span>

                <span className="text-gray-600 font-bold">
                    ({product.reviewCount} Reviews)
                </span>
            </div>

            <div className="flex flex-wrap items-end gap-4">
                <span className="text-5xl font-black text-[#5B5D30]">
                    ₹{product.price}
                </span>

                <span className="text-2xl line-through text-gray-500 font-bold">
                    ₹{product.originalPrice}
                </span>

                <span className="bg-[#7D8453] text-white px-4 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_#000] font-black -rotate-2">
                    {product.discount}% OFF
                </span>
            </div>

            <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-[#f8f6ee] border-[5px] border-black rounded-[28px] p-5 shadow-[6px_6px_0px_#000]">
                <CheckCircle2
                    size={28}
                    strokeWidth={3}
                    className="text-green-600"
                />
                <div>
                    <p className="font-black text-[#5B5D30]">In Stock</p>
                    <p className="text-gray-600">Ready to ship today.</p>
                </div>
            </motion.div>

            <div className="bg-[#f8f6ee] border-[5px] border-black rounded-[28px] p-6 shadow-[6px_6px_0px_#000] -rotate-1">
                <h2 className="font-black text-2xl text-[#5B5D30] mb-3">
                    About this item
                </h2>

                <p className="leading-8 text-gray-700">
                    {product.shortDescription}
                </p>
            </div>

            {product.colors && (
                <div>
                    <h3 className="font-black text-[#5B5D30] mb-3">
                        Available Colors
                    </h3>

                    <div className="flex gap-3 flex-wrap">
                        {product.colors.map((color, index) => (
                            <motion.button
                                key={index}
                                whileHover={{
                                    y: -4,
                                    rotate: index % 2 === 0 ? 3 : -3,
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 rounded-full border-4 border-black shadow-[4px_4px_0px_#000]"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>
            )}

            {product.sizes && (
                <div>
                    <h3 className="font-black text-[#5B5D30] mb-3">
                        Available Sizes
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                        {product.sizes.map((size, index) => (
                            <motion.button
                                key={index}
                                whileHover={{
                                    y: -4,
                                    rotate: index % 2 === 0 ? 2 : -2,
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-3 bg-[#8D998B] text-white border-4 border-black rounded-2xl font-black shadow-[4px_4px_0px_#000]">
                                {size}
                            </motion.button>
                        ))}
                    </div>
                </div>
            )}

            <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#5B5D30]">
                    Highlights
                </h3>

                {product.highlights.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            x: 6,
                            rotate: index % 2 === 0 ? 1 : -1,
                        }}
                        className="flex items-center gap-4 bg-[#f8f6ee] border-[5px] border-black rounded-3xl p-5 shadow-[5px_5px_0px_#000]">
                        <ShieldCheck
                            className="text-[#7D8453]"
                            strokeWidth={3}
                        />

                        <span className="font-bold">{item}</span>
                    </motion.div>
                ))}
            </div>

            <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-[#929A67] text-white p-5 rounded-[28px] border-[5px] border-black shadow-[6px_6px_0px_#000]">
                <Truck size={32} strokeWidth={3} />

                <div>
                    <h4 className="font-black">Free Delivery</h4>
                    <p>
                        Delivered by{" "}
                        <span className="font-black">
                            {product.deliveryDate}
                        </span>
                    </p>
                </div>
            </motion.div>

            <motion.button
                whileHover={{
                    y: -3,
                    rotate: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-[#8D998B] text-white border-[5px] border-black rounded-3xl shadow-[6px_6px_0px_#000] font-black">
                <Heart strokeWidth={3} />
                Add to Wishlist
            </motion.button>
        </motion.div>
    );
};
