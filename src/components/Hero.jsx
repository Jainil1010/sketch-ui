import { motion } from "framer-motion";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";

const productImages = [test1, test2, test3];

const svgPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" },
    },
};

const svgArrowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { delay: 1.5, duration: 0.5 } },
};

const repeatedImages = [...productImages, ...productImages, ...productImages];

export default function Hero() {
    return (
        <section className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6 py-16 lg:py-24 max-w-7xl mx-auto">
            <div className="flex flex-col items-start order-2 lg:order-1">
                <motion.div
                    initial={{ rotate: -6, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: -2, scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    style={{ willChange: "transform, opacity" }}
                    className="inline-block px-5 py-2.5 bg-[#929A67] border-4 border-black rounded-3xl shadow-[5px_5px_0px_#000] font-black uppercase text-sm md:text-base mb-8 hover:translate-x-0.5 transition-all cursor-default">
                    Limited Edition
                </motion.div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.85] text-[#5B5D30] tracking-tight mb-8">
                    Handmade <br />
                    <span className="text-[#7D8453]">Collectibles</span>
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-zinc-800 font-bold leading-relaxed max-w-xl mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt ea eius adipisci consectetur aspernatur perferendis
                    dolore laudantium possimus excepturi? Distinctio earum nobis
                    soluta error asperiores vel, molestiae ab! Quis, at.
                </p>

                <div className="flex flex-wrap gap-5 w-full">
                    <motion.button
                        whileHover={{ x: 4, y: 4 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[#7D8453] text-white border-4 border-black rounded-[28px] text-lg md:text-xl font-black shadow-[6px_6px_0px_#000] hover:shadow-none transition-all flex-1 sm:flex-none">
                        Shop Collection
                    </motion.button>

                    <motion.button
                        whileHover={{ x: 4, y: 4 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[#8D998B] text-white border-4 border-black rounded-[28px] text-lg md:text-xl font-black shadow-[6px_6px_0px_#000] hover:shadow-none transition-all flex-1 sm:flex-none">
                        Best Sellers
                    </motion.button>
                </div>

                <div className="flex items-center gap-4 mt-12">
                    <svg
                        width="100"
                        height="60"
                        viewBox="0 0 100 60"
                        fill="none"
                        className="overflow-visible">
                        <motion.path
                            d="M5 30 C 30 10, 50 50, 80 30 S 95 25, 95 25"
                            stroke="black"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="8 8"
                            fill="none"
                            variants={svgPathVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M85 15 L 95 25 L 85 35"
                            stroke="black"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            variants={svgArrowVariants}
                            initial="hidden"
                            animate="visible"
                        />
                    </svg>
                    <span className="font-black text-lg md:text-xl text-[#5B5D30] -rotate-2">
                        Handmade with love!
                    </span>
                </div>
            </div>

            <div className="relative h-125 md:h-150 w-full overflow-hidden order-1 lg:order-2">
                <div className="absolute inset-0 z-30 pointer-events-none bg-linear-to-b from-[#f4f3ea] from-0% via-transparent via-15% to-[#f4f3ea] to-85% h-full w-full" />

                <motion.div
                    className="flex flex-col gap-6 pb-6 px-4"
                    animate={{ y: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    style={{
                        willChange: "transform",
                        transform: "translate3d(0,0,0)",
                    }}>
                    {repeatedImages.map((src, index) => (
                        <motion.div
                            key={`${src}-${index}`}
                            whileHover={{
                                scale: 1.05,
                                rotate: index % 2 === 0 ? 2 : -2,
                                z_index: 40,
                            }}
                            className="relative w-full aspect-square bg-[#f8f6ee] border-[5px] border-black rounded-4xl shadow-[8px_8px_0px_#000] shrink-0 cursor-pointer">
                            <img
                                src={src}
                                alt={`Product ${index}`}
                                className="w-full h-full object-cover rounded-[28px] pointer-events-none"
                            />

                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#929A67] border-[3px] border-black rounded-full shadow-[3px_3px_0px_#000] flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-full border-2 border-black" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
