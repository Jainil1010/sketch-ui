import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
    return (
        <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16">
                <div className="inline-block px-6 py-3 bg-[#929A67] border-[5px] border-black rounded-3xl shadow-[6px_6px_0px_#000] -rotate-2">
                    <h2 className="text-4xl font-black uppercase text-white">
                        Get In Touch
                    </h2>
                </div>
                <p className="mt-6 text-xl text-zinc-700 font-bold">
                    Have a question or want to collaborate? We'd love to hear
                    from you.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#f8f6ee] border-[5px] border-black rounded-4xl shadow-[8px_8px_0px_#000] p-8 -rotate-1">
                    <h3 className="text-3xl font-black uppercase text-[#5B5D30] mb-8">
                        Contact Info
                    </h3>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#7D8453] border-[3px] border-black rounded-xl shadow-[4px_4px_0px_#000]">
                                <Mail />
                            </div>
                            <div className="text-left">
                                <h4 className="font-black text-lg text-[#5B5D30]">
                                    Email
                                </h4>
                                <p className="text-zinc-700 font-bold">
                                    test@test.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#8D998B] border-[3px] border-black rounded-xl shadow-[4px_4px_0px_#000]">
                                <Phone />
                            </div>
                            <div className="text-left">
                                <h4 className="font-black text-lg text-[#5B5D30]">
                                    Phone
                                </h4>
                                <p className="text-zinc-700 font-bold">
                                    +91 9876543210
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#929A67] border-[3px] border-black rounded-xl shadow-[4px_4px_0px_#000]">
                                <MapPin />
                            </div>
                            <div className="text-left">
                                <h4 className="font-black text-lg text-[#5B5D30]">
                                    Location
                                </h4>
                                <p className="text-zinc-700 font-bold">
                                    Mumbai, India
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#f8f6ee] border-[5px] border-black rounded-4xl shadow-[8px_8px_0px_#000] p-8">
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block font-black text-lg text-[#5B5D30] mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-white border-[3px] border-black rounded-[18px] shadow-[4px_4px_0px_#000] focus:outline-none focus:shadow-none font-bold"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block font-black text-lg text-[#5B5D30] mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-white border-[3px] border-black rounded-[18px] shadow-[4px_4px_0px_#000] focus:outline-none focus:shadow-none font-bold"
                                placeholder="Your Email"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block font-black text-lg text-[#5B5D30] mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 bg-white border-[3px] border-black rounded-[18px] shadow-[4px_4px_0px_#000] focus:outline-none focus:shadow-none font-bold resize-none"
                                placeholder="Your Message"></textarea>
                        </div>

                        <motion.button
                            whileHover={{ x: 4, y: 4 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            className="w-full py-4 bg-[#7D8453] text-white border-[5px] border-black rounded-[28px] shadow-[6px_6px_0px_#000] hover:shadow-none font-black text-xl transition-all">
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
