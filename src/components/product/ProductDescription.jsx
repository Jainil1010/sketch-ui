import { motion } from "framer-motion";
import { BookOpen, Sparkles, Leaf, ShieldCheck } from "lucide-react";

export const ProductDescription = ({ product }) => {
    return (
        <section className="mt-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10">
                <span className="inline-flex items-center gap-2 bg-[#929A67] text-white px-5 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_#000] font-black -rotate-2">
                    <BookOpen size={18} />
                    Product Story
                </span>

                <h2 className="mt-5 text-4xl lg:text-5xl font-black text-[#5B5D30]">
                    About This Product
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-[#f8f6ee] border-[5px] border-black rounded-[38px] shadow-[10px_10px_0px_#000] overflow-hidden">
                <div className="h-6 bg-[#8D998B] border-b-[5px] border-black" />
                <div className="absolute left-6 top-16 flex flex-col gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="w-4 h-4 rounded-full bg-white border-[3px] border-black"
                        />
                    ))}
                </div>

                <div className="pl-16 pr-8 py-10">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg leading-10 text-gray-700 mb-10">
                        {product.description}
                    </motion.p>

                    <motion.div
                        whileHover={{
                            rotate: -1,
                            scale: 1.01,
                        }}
                        className="bg-[#929A67] text-white border-[5px] border-black rounded-[28px] shadow-[6px_6px_0px_#000] p-6 mb-10">
                        <p className="text-xl font-black leading-9">
                            "{product.quote}"
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <InfoCard
                            icon={<Leaf size={30} />}
                            title="Eco Friendly"
                            value="Sustainably sourced materials."
                        />

                        <InfoCard
                            icon={<ShieldCheck size={30} />}
                            title="Premium Quality"
                            value="Built for years of everyday use."
                        />

                        <InfoCard
                            icon={<Sparkles size={30} />}
                            title="Hand Finished"
                            value="Every detail carefully crafted."
                        />
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-black text-[#5B5D30] mb-5">
                            Perfect For
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            {product.perfectFor.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -5,
                                        rotate: index % 2 === 0 ? 2 : -2,
                                    }}
                                    className="px-5 py-3 rounded-full bg-[#7D8453] text-white border-4 border-black shadow-[4px_4px_0px_#000] font-black">
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const InfoCard = ({ icon, title, value }) => {
    return (
        <motion.div
            whileHover={{
                y: -6,
                rotate: 1,
            }}
            className="bg-white border-4 border-black rounded-[28px] shadow-[5px_5px_0px_#000] p-6">
            <div className="text-[#7D8453] mb-4">{icon}</div>

            <h4 className="font-black text-xl text-[#5B5D30] mb-2">{title}</h4>

            <p className="text-gray-600">{value}</p>
        </motion.div>
    );
};
