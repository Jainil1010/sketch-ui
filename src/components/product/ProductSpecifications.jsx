import { motion } from "framer-motion";
import {
    Ruler,
    Weight,
    Palette,
    Package,
    Factory,
    Calendar,
    ShieldCheck,
    Tag,
} from "lucide-react";

const iconMap = {
    dimensions: Ruler,
    weight: Weight,
    color: Palette,
    material: Package,
    brand: Factory,
    date: Calendar,
    warranty: ShieldCheck,
    sku: Tag,
};

export const ProductSpecifications = ({ specifications }) => {
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
                transition={{
                    duration: 0.5,
                }}
                className="mb-10">
                <span className="inline-block bg-[#7D8453] text-white px-5 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_#000] font-black rotate-2">
                    Product Details
                </span>

                <h2 className="mt-5 text-4xl lg:text-5xl font-black text-[#5B5D30]">
                    Specifications
                </h2>
            </motion.div>

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.95,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                }}
                className="bg-[#f8f6ee] border-[5px] border-black rounded-[36px] shadow-[10px_10px_0px_#000] p-6 md:p-10 -rotate-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {specifications.map((item, index) => {
                        const Icon = iconMap[item.icon] || Package;

                        return (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.08,
                                }}
                                whileHover={{
                                    y: -6,
                                    rotate: index % 2 === 0 ? 1 : -1,
                                }}
                                className="bg-white border-4 border-black rounded-[28px] shadow-[5px_5px_0px_#000] p-6 flex items-center gap-5">
                                <div className="min-w-15 h-15 rounded-2xl bg-[#929A67] border-4 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center text-white">
                                    <Icon size={28} strokeWidth={3} />
                                </div>

                                <div>
                                    <p className="text-sm uppercase font-black text-gray-500">
                                        {item.label}
                                    </p>

                                    <h3 className="text-xl font-black text-[#5B5D30]">
                                        {item.value}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};
