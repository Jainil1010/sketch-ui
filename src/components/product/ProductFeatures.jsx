import { motion } from "framer-motion";
import {
    Leaf,
    ShieldCheck,
    Droplets,
    Wind,
    PackageCheck,
    Sparkles,
} from "lucide-react";

const iconMap = {
    eco: Leaf,
    quality: ShieldCheck,
    washable: Droplets,
    breathable: Wind,
    durable: PackageCheck,
    premium: Sparkles,
};

export const ProductFeatures = ({ features }) => {
    return (
        <section className="mt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10">
                <span className="inline-block bg-[#929A67] text-white px-5 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_#000] font-black -rotate-2">
                    Why You'll Love It
                </span>

                <h2 className="mt-5 text-4xl lg:text-5xl font-black text-[#5B5D30]">
                    Product Features
                </h2>

                <p className="mt-3 text-gray-600 max-w-2xl leading-8">
                    Every detail is thoughtfully designed to deliver comfort,
                    durability, and an amazing everyday experience.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => {
                    const Icon = iconMap[feature.icon] || Sparkles;

                    return (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 40,
                                rotate: index % 2 === 0 ? -3 : 3,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                rotate: index % 2 === 0 ? -1 : 1,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.12,
                                duration: 0.45,
                            }}
                            whileHover={{
                                y: -8,
                                rotate: 0,
                                scale: 1.02,
                            }}
                            className="group bg-[#f8f6ee] border-[5px] border-black rounded-4xl shadow-[8px_8px_0px_#000] p-8 transition-all">
                            <div className="w-20 h-20 rounded-[22px] bg-[#7D8453] border-4 border-black shadow-[5px_5px_0px_#000] flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                <Icon
                                    size={36}
                                    strokeWidth={2.8}
                                    className="text-white"
                                />
                            </div>

                            <h3 className="text-2xl font-black text-[#5B5D30] mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-8">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
