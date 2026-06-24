import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="relative z-10 px-6 pb-24 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden bg-[#7D8453] border-[6px] border-black rounded-[50px] px-6 py-12 sm:px-10 sm:py-16 shadow-[10px_10px_0px_#000] -rotate-1 text-center">

                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-tight text-white">
                    Some Title
                </h2>

                <p className="mt-4 sm:mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptas iusto, magnam nemo illum vero tenetur vitae harum architecto numquam natus officia nostrum repellat aspernatur corrupti similique earum est accusamus?
                </p>

                <motion.button
                    whileHover={{ x: 4, y: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 sm:mt-10 px-8 sm:px-10 py-4 sm:py-5 bg-[#8D998B] text-white border-4 border-black rounded-[28px] shadow-[8px_8px_0px_#000] text-xl sm:text-2xl font-black hover:shadow-none transition-all">
                    Shop Now
                </motion.button>
            </motion.div>
        </section>
    );
}
