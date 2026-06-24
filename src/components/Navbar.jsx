import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar({ cartCount, openCart }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        "Home",
        "Collections",
        "Best Sellers",
        "Reviews",
        "Contact",
    ];

    const mobileMenuVariants = {
        closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
        open: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3, staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        closed: { x: -20, opacity: 0 },
        open: { x: 0, opacity: 1 },
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{
                y: 0,
                scale: scrolled ? 0.98 : 1,
                rotate: scrolled ? 0 : -1,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="sticky top-6 z-50 mx-4 md:mx-6 mb-8">
            <div className="relative border-[5px] border-black bg-[#f8f6ee] rounded-4xl shadow-[8px_8px_0px_#000] overflow-hidden">
                <div className="flex items-center justify-between px-6 py-5">
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-4xl font-black uppercase text-[#5B5D30] tracking-tighter">
                            Yarnball
                        </h1>
                        <p className="text-xs md:text-sm font-bold border-b-4 border-dashed border-black inline-block mt-1 w-max">
                            Handmade Goods
                        </p>
                    </div>

                    <nav className="hidden lg:flex gap-3 font-black">
                        {/* {navLinks.map((item) => (
                            <motion.a
                                key={item}
                                href="#"
                                whileHover={{ scale: 1.05, rotate: -2, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-2 bg-[#929A67] border-[3px] border-black rounded-[18px] shadow-[4px_4px_0px_#000] text-black transition-colors hover:bg-[#aeb97b]">
                                {item}
                            </motion.a>
                        ))} */}
                        {navLinks.map((item) => (
                            <motion.button
                                key={item}
                                whileTap={{ scale: 0.98 }}
                                onClick={openCart}
                                className="
                                    relative px-5 py-3 
                                    bg-[#7D8453] text-white 
                                    border-4 border-black 
                                    rounded-[20px] 
                                    shadow-[4px_4px_0px_#000] 
                                    transition-all duration-200 ease-out
                                    hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000]
                                    active:translate-x-1 active:translate-y-1 active:shadow-none
                                    flex items-center gap-2 font-bold
                                ">
                                {item}
                            </motion.button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={openCart}
                            className="relative px-5 py-3 
                                    bg-[#7D8453] text-white 
                                    border-4 border-black 
                                    rounded-[20px] 
                                    shadow-[4px_4px_0px_#000] 
                                    transition-all duration-200 ease-out
                                    hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000]
                                    active:translate-x-1 active:translate-y-1 active:shadow-none
                                    flex items-center gap-2 font-bold">
                            <ShoppingCart size={22} strokeWidth={2.5} />
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white border-4 border-black rounded-full text-xs flex items-center justify-center font-black shadow-[2px_2px_0px_#000]">
                                    {cartCount}
                                </motion.span>
                            )}
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="lg:hidden p-3 bg-[#929A67] border-[3px] border-black rounded-xl shadow-[4px_4px_0px_#000]">
                            {isMobileMenuOpen ? (
                                <X size={24} className="text-black" />
                            ) : (
                                <Menu size={24} className="text-black" />
                            )}
                        </motion.button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileMenuVariants}
                            className="lg:hidden border-t-4 border-black bg-[#e8e6de] px-6">
                            <div className="flex flex-col gap-3 py-6 font-black">
                                {navLinks.map((item) => (
                                    <motion.a
                                        key={item}
                                        href="#"
                                        variants={itemVariants}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className="block px-4 py-3 bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_#000] text-center active:shadow-none active:translate-x-0.5 active:translate-y-0.5">
                                        {item}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
