import { motion, transform } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";

const cardVariants = {
    hidden: (isEven) => ({
        opacity: 0,
        y: 20,
        rotate: isEven ? 2 : -2,
    }),
    visible: (isEven) => ({
        opacity: 1,
        y: 0,
        rotate: isEven ? 2 : -2,
        transition: {
            type: "spring",
            stuffness: 200,
            damping: 20,
        },
    }),
};

const imageVariants = {
    hover: { scale: 1.1 },
};

const badgeVariants = {
    hover: { scale: 1.1, rotate: 25 },
};

const buttonHover = { x: 4, y: 4 };
const buttonTap = { scale: 0.95 };

const gpuStyle = {
    willChange: "transform",
    transform: "translate3d(0,0,0)",
};

export default function ProductCard({ product, addToCart, openProduct }) {
    const isEven = product.id % 2 === 0;

    return (
        <motion.div
            custom={isEven}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, rotate: 0, boxShadow: "12px_12px_0px_#000" }}
            style={gpuStyle}
            className={`relative bg-[#f8f6ee] border-[5px] border-black rounded-4xl overflow-visible shadow-[8px_8px_0px_#000]`}>
            <motion.div
                variants={badgeVariants}
                className="absolute top-4 right-4 z-20 bg-[#929A67] border-[3px] border-black px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000]">
                Handmade
            </motion.div>

            <div className="relative h-64 w-full overflow-hidden border-b-[5px] border-black bg-[#e8e6de] rounded-t-[27px]">
                <motion.img
                    variants={imageVariants}
                    whileHover="hover"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover block"
                    style={{ willChange: "transform " }}
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl md:text-2xl font-black leading-tight text-[#5B5D30] mb-6">
                    {product.name}
                </h3>

                <div className="flex items-center justify-between gap-4">
                    <span className="text-3xl font-black text-[#5B5D30] whitespace-nowrap">
                        ₹{product.price}
                    </span>

                    <div className="flex gap-4">
                        <motion.button
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            onClick={() => openProduct(product)}
                            style={{ willChange: "transform" }}
                            className="px-4 py-2 bg-[#8D998B] text-white border-4 border-black rounded-[22px] font-black shadow-[6px_6px_0px_#000] hover:shadow-none transition-all flex-1 sm:flex-none">
                            <Eye size={24} strokeWidth={3} />
                        </motion.button>

                        <motion.button
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            onClick={() => addToCart(product)}
                            style={{ willChange: "transform" }}
                            className="px-4 py-2 bg-[#7D8453] text-white border-4 border-black rounded-[22px] font-black shadow-[6px_6px_0px_#000] hover:shadow-none transition-all flex-1 sm:flex-none">
                            <ShoppingBag size={24} strokeWidth={3} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
