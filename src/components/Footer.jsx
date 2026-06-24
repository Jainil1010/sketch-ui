import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { FaInstagram, FaYoutube, FaTwitch } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative z-10 border-t-[5px] border-dashed border-black px-6 py-12 bg-[#f8f6ee]">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-black uppercase text-[#5B5D30]">
                    Yarnball
                </h3>
                <p className="mt-3 text-base md:text-lg font-bold text-zinc-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad recusandae deleniti minus temporibus nulla? Nobis voluptate quidem natus laborum aut facilis ex? Excepturi maiores fugiat amet quaerat, dignissimos cumque quibusdam.
                </p>

                <div className="flex justify-center gap-6 mt-8">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, rotate: -10, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-[#929A67] border-[3px] border-black rounded-xl shadow-[4px_4px_0px_#000] transition-all"
                        aria-label="Instagram">
                        <FaInstagram size={24} className="text-black" />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, rotate: 10, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-[#8D998B] border-[3px] border-black rounded-xl shadow-[4px_4px_0px_#000] transition-all"
                        aria-label="YouTube">
                        <FaYoutube size={24} className="text-black" />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-[#7D8453] border-[3px] border-black rounded-xl shadow-[4px_4px_0px_#000] transition-all"
                        aria-label="Twitch">
                        <FaTwitch size={24} className="text-white" />
                    </motion.a>
                </div>

                <div className="mt-10 text-sm font-bold text-zinc-600">
                    © 2026 Yarnball. All handmade with ❤️
                </div>
            </div>
        </footer>
    );
}
