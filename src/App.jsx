import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import { products } from "./data/products";
import CartSidebar from "./components/CartSidebar";
import { AnimatePresence } from "framer-motion";
import ProductModal from "./components/ProductModal";

export default function App() {
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartOpen, setCartOpen] = useState(false);

    const addToCart = (product) => {
        const existing = cart.find((item) => item.id === product.id);

        if (existing) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item,
                ),
            );
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }

        setCartOpen(true);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const increaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item,
            ),
        );
    };

    const decreaseQty = (id) => {
        setCart(
            cart
                .map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              quantity: item.quantity - 1,
                          }
                        : item,
                )
                .filter((item) => item.quantity > 0),
        );
    };

    const cartTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    );

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="min-h-screen bg-[#f4f3ea] text-zinc-900 relative font-sans selection:bg-[#929A67] selection:text-white">
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none z-0"
                style={{
                    backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                    backgroundPosition: "-2px -2px",
                }}
            />

            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div
                    className="absolute top-20 right-10 w-32 h-32 opacity-[0.06] rotate-12"
                    style={{
                        backgroundImage:
                            "radial-gradient(#000 2px, transparent 2px)",
                        backgroundSize: "20px 20px",
                        maskImage:
                            "radial-gradient(circle, black 40%, transparent 80%)",
                    }}
                />
                <div
                    className="absolute bottom-20 left-10 w-48 h-48 opacity-[0.05] -rotate-6"
                    style={{
                        backgroundImage:
                            "linear-gradient(45deg, #000 1px, transparent 1px), linear-gradient(-45deg, #000 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                        maskImage:
                            "radial-gradient(ellipse, black 30%, transparent 70%)",
                    }}
                />
            </div>

            <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(244,243,234,0.8)_100%)]" />

            <div className="relative z-20">
                <Navbar
                    cartCount={totalItems}
                    openCart={() => setCartOpen(true)}
                />

                <main className="container mx-auto">
                    <Hero />
                    {/* <div className="bg-white border-4 border-black rounded-4xl p-8 shadow-[8px_8px_0px_#000] max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black mb-4 uppercase">
                            Welcome to the Shop
                        </h2>
                        <p className="text-lg font-bold text-gray-600">
                            Scroll around to see the sketch texture in action.
                            The background feels like a real piece of paper on
                            your desk.
                        </p>
                    </div> */}

                    <ProductGrid
                        products={products}
                        addToCart={addToCart}
                        openProduct={setSelectedProduct}
                    />

                    <AnimatePresence>
                        {selectedProduct && (
                            <ProductModal
                                product={selectedProduct}
                                close={() => setSelectedProduct(null)}
                                addToCart={addToCart}
                            />
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {cartOpen && (
                            <CartSidebar
                                cart={cart}
                                total={cartTotal}
                                close={() => setCartOpen(false)}
                                removeItem={removeFromCart}
                                increaseQty={increaseQty}
                                decreaseQty={decreaseQty}
                            />
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
