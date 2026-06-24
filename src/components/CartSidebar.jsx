import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Plus,
    Minus,
    Trash2,
    ShoppingBag,
    ShoppingCart,
} from "lucide-react";

export default function CartSidebar({
    cart,
    total,
    close,
    removeItem,
    increaseQty,
    decreaseQty,
}) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={close}
                className="fixed inset-0 bg-black/50 z-120"
                aria-hidden="true"
            />

            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 200,
                }}
                className="fixed right-0 top-0 z-130 h-screen w-full sm:w-120 bg-[#f8f6ee] border-l-[6px] border-black shadow-[-10px_0px_0px_#000] flex flex-col">
                <div className="p-6 border-b-[5px] border-black flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-black uppercase text-[#5B5D30]">
                            Your Cart
                        </h2>
                        {/* <p className="font-bold text-sm uppercase tracking-wide text-[#7D8453]">
                        </p> */}
                    </div>
                    <motion.button
                        onClick={close}
                        whileHover={{ x: 4, y: 4 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-[#7D8453] text-white border-4 border-black rounded-[28px] font-black shadow-[6px_6px_0px_#000] hover:shadow-none transition-all">
                        <X size={24} className="text-black" />
                    </motion.button>
                </div>

                <AnimatePresence mode="wait">
                    {cart.length === 0 ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                            <ShoppingCart
                                size={100}
                                className="text-[#929A67] mb-4"
                            />

                            <h3 className="text-3xl font-black text-[#5B5D30]">
                                Cart Is Empty
                            </h3>
                            {/* <p className="mt-4 text-zinc-600 font-bold">
                            </p> */}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="items"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1">
                            <div className="overflow-y-auto p-5 space-y-5">
                                {cart.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="bg-white border-4 border-black rounded-3xl p-4 shadow-[5px_5px_0px_#000]">
                                        <div className="flex gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border-[3px] border-black"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-black text-lg text-[#5B5D30]">
                                                    {item.name}
                                                </h3>
                                                <p className="text-[#5B5D30] font-bold">
                                                    ₹{item.price}
                                                </p>
                                                <div className="flex items-center gap-3 mt-4">
                                                    <motion.button
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.9,
                                                        }}
                                                        onClick={() =>
                                                            decreaseQty(item.id)
                                                        }
                                                        className="p-2 bg-[#8D998B] border-[3px] border-black rounded-lg shadow-[3px_3px_0px_#000] transition-all">
                                                        <Minus size={16} />
                                                    </motion.button>
                                                    <span className="font-black text-lg px-2">
                                                        {item.quantity}
                                                    </span>
                                                    <motion.button
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.9,
                                                        }}
                                                        onClick={() =>
                                                            increaseQty(item.id)
                                                        }
                                                        className="p-2 bg-[#8D998B] border-[3px] border-black rounded-lg shadow-[3px_3px_0px_#000] transition-all">
                                                        <Plus size={16} />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.9,
                                                        }}
                                                        onClick={() =>
                                                            removeItem(item.id)
                                                        }
                                                        className="ml-auto p-2 bg-red-200 border-[3px] border-black rounded-lg shadow-[3px_3px_0px_#000] transition-all">
                                                        <Trash2 size={16} />
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="border-t-[5px] border-black p-6 bg-[#e9e8dd]">
                                <div className="flex justify-between mb-5">
                                    <span className="text-xl font-bold text-[#5B5D30]">
                                        Total
                                    </span>
                                    <span className="text-3xl font-black text-[#5B5D30]">
                                        ₹{total}
                                    </span>
                                </div>
                                <motion.button
                                    whileHover={{ x: 4, y: 4 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-4 bg-[#7D8453] text-white border-4 border-black rounded-[28px] text-xl font-black shadow-[6px_6px_0px_#000] hover:shadow-none flex items-center justify-center gap-3 transition-all">
                                    <ShoppingBag />
                                    Checkout
                                </motion.button>
                                <p className="mt-4 text-center text-sm font-bold text-zinc-600">
                                    Secure payments coming soon
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
