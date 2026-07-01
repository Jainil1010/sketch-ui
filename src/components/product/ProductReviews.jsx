import { motion } from "framer-motion";
import { Star, CheckCircle2, ThumbsUp, MessageCircle } from "lucide-react";

export const ProductReviews = ({
    reviews = [],
    rating = 0,
    reviewCount = 0,
}) => {
    const ratingData = [
        {
            stars: 5,
            percent: 78,
        },
        {
            stars: 4,
            percent: 15,
        },
        {
            stars: 3,
            percent: 5,
        },
        {
            stars: 2,
            percent: 1,
        },
        {
            stars: 1,
            percent: 1,
        },
    ];

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
                className="mb-10">
                <span className="inline-block bg-[#8D998B] text-white px-5 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_#000] font-black -rotate-2">
                    Customer Voice
                </span>

                <h2 className="mt-5 text-4xl lg:text-5xl font-black text-[#5B5D30]">
                    Reviews
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                <motion.div
                    whileHover={{
                        rotate: 2,
                        y: -5,
                    }}
                    className="bg-[#f8f6ee] border-[5px] border-black rounded-[35px] shadow-[8px_8px_0px_#000] p-8 text-center">
                    <h3 className="text-6xl font-black text-[#5B5D30]">
                        {rating}
                    </h3>

                    <div className="flex justify-center my-4">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={28}
                                fill="#FFD43B"
                                strokeWidth={3}
                            />
                        ))}
                    </div>

                    <p className="font-bold text-gray-600">
                        Based on {reviewCount} reviews
                    </p>
                </motion.div>
                <div className="md:col-span-2 bg-[#f8f6ee] border-[5px] border-black rounded-[35px] shadow-[8px_8px_0px_#000] p-8">
                    {ratingData.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 mb-5">
                            <span className="font-black w-12">
                                {item.stars}★
                            </span>

                            <div className="flex-1 h-5 rounded-full bg-gray-200 border-2 border-black overflow-hidden">
                                <motion.div
                                    initial={{
                                        width: 0,
                                    }}
                                    whileInView={{
                                        width: `${item.percent}%`,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                    }}
                                    className="h-full bg-[#7D8453]"
                                />
                            </div>

                            <span className="font-black">{item.percent}%</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: index * 0.1,
                        }}
                        whileHover={{
                            y: -6,
                            rotate: index % 2 === 0 ? 1 : -1,
                        }}
                        className="bg-[#f8f6ee] border-[5px] border-black rounded-[35px] shadow-[8px_8px_0px_#000] p-7">
                        <div className="flex justify-between items-start gap-5">
                            <div>
                                <h3 className="text-xl font-black text-[#5B5D30]">
                                    {review.name}
                                </h3>

                                {review.verified && (
                                    <div className="flex items-center gap-2 text-green-700 font-bold text-sm">
                                        <CheckCircle2 size={18} />
                                        Verified Purchase
                                    </div>
                                )}
                            </div>

                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={
                                            i < review.rating
                                                ? "#FFD43B"
                                                : "white"
                                        }
                                        strokeWidth={3}
                                    />
                                ))}
                            </div>
                        </div>

                        <p className="mt-6 text-gray-700 leading-8">
                            {review.comment}
                        </p>

                        {review.images && (
                            <div className="flex gap-4 mt-6 flex-wrap">
                                {review.images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        className="w-24 h-24 object-cover rounded-2xl border-4 border-black"
                                    />
                                ))}
                            </div>
                        )}

                        <div className="flex gap-4 mt-7">
                            <button className="flex items-center gap-2 px-5 py-3 bg-[#929A67] text-white rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000] font-black">
                                <ThumbsUp size={18} />
                                Helpful
                            </button>

                            <button className="flex items-center gap-2 px-5 py-3 bg-[#8D998B] text-white rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000] font-black">
                                <MessageCircle size={18} />
                                Reply
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
