import { useState } from "react";
import { motion } from "framer-motion";
import {
    Minus,
    Plus,
    ShoppingBag,
    CreditCard,
    ShieldCheck,
    Truck,
    RotateCcw,
    PackageCheck,
} from "lucide-react";

export const BuyBox = ({ product, addToCart, buyNow }) => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity((q) => q + 1);
    };

    const decrease = () => {
        if (quantity > 1) setQuantity((q) => q - 1);
    };

    return (
        <motion.aside
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-8 bg-[#f8f6ee] border-[5px] border-black rounded-[36px] shadow-[10px_10px_0px_#000] p-7 rotate-1 space-y-6">
            <div className="space-y-2">
                <div className="flex items-end gap-3 flex-wrap">
                    <h2 className="text-5xl font-black text-[#5B5D30]">
                        ₹{product.price}
                    </h2>

                    {product.originalPrice && (
                        <span className="text-2xl line-through text-gray-500 font-bold">
                            ₹{product.originalPrice}
                        </span>
                    )}
                </div>

                {product.discount > 0 && (
                    <span className="inline-block px-4 py-2 rounded-full bg-[#7D8453] text-white border-4 border-black shadow-[4px_4px_0px_#000] font-black -rotate-3">
                        Save {product.discount}%
                    </span>
                )}
            </div>

            <div className="flex items-center gap-3 rounded-3xl border-4 border-black bg-[#929A67] text-white p-4 shadow-[5px_5px_0px_#000]">
                <PackageCheck strokeWidth={3} />

                <div>
                    <p className="font-black">
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </p>

                    {product.stock > 0 && (
                        <span className="text-sm">
                            Only {product.stock} left
                        </span>
                    )}
                </div>
            </div>

            <div>
                <h3 className="font-black text-[#5B5D30] mb-3">Quantity</h3>

                <div className="flex items-center gap-3">
                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={decrease}
                        className="w-12 h-12 rounded-2xl bg-[#8D998B] border-4 border-black shadow-[4px_4px_0px_#000] text-white flex items-center justify-center">
                        <Minus strokeWidth={3} />
                    </motion.button>

                    <div className="w-16 h-12 rounded-2xl border-4 border-black bg-white shadow-[4px_4px_0px_#000] flex items-center justify-center font-black text-xl">
                        {quantity}
                    </div>

                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={increase}
                        className="w-12 h-12 rounded-2xl bg-[#8D998B] border-4 border-black shadow-[4px_4px_0px_#000] text-white flex items-center justify-center">
                        <Plus strokeWidth={3} />
                    </motion.button>
                </div>
            </div>

            <motion.button
                whileHover={{
                    x: 3,
                    y: 3,
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => addToCart(product, quantity)}
                className="w-full py-5 rounded-[26px] bg-[#7D8453] border-[5px] border-black shadow-[6px_6px_0px_#000] text-white font-black text-xl flex items-center justify-center gap-3 hover:shadow-none">
                <ShoppingBag strokeWidth={3} />
                Add to Cart
            </motion.button>

            <motion.button
                whileHover={{
                    x: 3,
                    y: 3,
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => buyNow(product, quantity)}
                className="w-full py-5 rounded-[26px] bg-[#8D998B] border-[5px] border-black shadow-[6px_6px_0px_#000] text-white font-black text-xl hover:shadow-none">
                Buy Now
            </motion.button>

            <div className="space-y-4">
                <InfoRow
                    icon={<Truck size={22} />}
                    title="Free Delivery"
                    value={product.deliveryDate}
                />

                <InfoRow
                    icon={<RotateCcw size={22} />}
                    title="Easy Returns"
                    value="7-Day Return Policy"
                />

                <InfoRow
                    icon={<ShieldCheck size={22} />}
                    title="Warranty"
                    value="1 Year Coverage"
                />

                <InfoRow
                    icon={<CreditCard size={22} />}
                    title="Payments"
                    value="UPI • Card • COD"
                />
            </div>

            <motion.div
                whileHover={{
                    rotate: -2,
                    scale: 1.02,
                }}
                className="p-5 rounded-3xl border-[5px] border-black bg-[#929A67] text-white shadow-[6px_6px_0px_#000] text-center">
                <ShieldCheck size={34} className="mx-auto mb-2" />

                <h3 className="font-black text-xl">Secure Checkout</h3>

                <p className="text-sm opacity-90">
                    Your payment information is fully encrypted.
                </p>
            </motion.div>
        </motion.aside>
    );
};

const InfoRow = ({ icon, title, value }) => {
    return (
        <motion.div
            whileHover={{
                x: 4,
                rotate: 1,
            }}
            className="flex gap-4 items-start rounded-3xl border-4 border-black bg-white p-4 shadow-[4px_4px_0px_#000]">
            <div className="text-[#7D8453] mt-1">{icon}</div>

            <div>
                <p className="font-black text-[#5B5D30]">{title}</p>

                <p className="text-sm text-gray-600">{value}</p>
            </div>
        </motion.div>
    );
};
