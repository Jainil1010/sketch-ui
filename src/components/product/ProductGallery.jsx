import { useState } from "react";
import { motion } from "framer-motion";

export const ProductGallery = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(
        product.images?.[0] || product.image,
    );

    const images = product.images || [product.image];

    return (
        <div className="flex flex-col md:flex-row gap-5">
            <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible pb-2">
                {images.map((img, index) => (
                    <motion.button
                        key={index}
                        whileHover={{
                            y: -6,
                            rotate: index % 2 === 0 ? 2 : -2,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        onClick={() => setSelectedImage(img)}
                        className={`relative w-24 h-24 shrink-0 overflow-hidden rounded-3xl border-[5px] border-black bg-[#f8f6ee] shadow-[6px_6px_0px_#000] transition-all ${selectedImage === img ? "bg-[#929A67]" : "bg-[#f8f6ee]"}`}>
                        <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.button>
                ))}
            </div>

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: -2,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                }}
                transition={{
                    duration: 0.5,
                }}
                className="flex-1 relative rounded-[36px] overflow-hidden border-[5px] border-black bg-[#f8f6ee] shadow-[10px_10px_0px_#000] group">
                <motion.img
                    key={selectedImage}
                    initial={{
                        opacity: 0,
                        scale: 1.1,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    src={selectedImage}
                    alt={product.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <motion.div
                    initial={{
                        y: -20,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    className="absolute top-5 left-5 px-5 py-2 rounded-full border-4 border-black bg-[#7D8453] text-white font-black shadow-[5px_5px_0px_#000] rotate-[-4deg]">
                    Bestseller
                </motion.div>

                <div className="absolute bottom-5 right-5 bg-[#8D998B] border-4 border-black rounded-full px-4 py-2 text-white font-black shadow-[5px_5px_0px_#000] rotate-2">
                    Hover 👀
                </div>
            </motion.div>
        </div>
    );
};
