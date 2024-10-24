import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BsBookmarkPlus, BsBookmarkCheckFill, BsCartPlus, BsCartCheckFill } from "react-icons/bs";
// import { BiPurchaseTag } from "react-icons/bi";
import { FaStar, FaRegStar } from "react-icons/fa";
// import { MdReadMore } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";



export const Product = ({ prod }) => {
    const [heart, setHeart] = useState(false);
    const [wishlist, setWishlist] = useState(false);
    const [cart, setCart] = useState(false);

    return (
        <motion.div id="product"
            layout
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5, scale: 0.8 }}
            transition={{
                opacity: {
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1], 
                },
                scale: {
                    duration: 0.6,
                    ease: [0.25, 1, 0.5, 1],
                },
                delay: 0.1 
            }}
            className="relative bg-neutral-50 rounded-xl ring-2 ring-neutral-900/10 p-1.5"
        >
            <p className="text-[0.9rem] text-neutral-100 tracking-wider absolute top-2 right-2 z-10 px-[0.7rem] pt-1.5 pb-[0.35rem]
                bg-neutral-800/20 backdrop-blur-xl rounded-se-xl rounded-es-xl"
            >
                {prod.category}
            </p>
            <div id="product-img" className="h-[300px] min-[405px]:h-[330px] min-[505px]:h-[360px] sm:h-[300px] min-[740px]:h-[330px] min-[900px]:h-[360px] lg:h-[300px] xl:h-[280px] overflow-hidden rounded-xl duration-200 ease-in-out">
                <img src={prod.image} className="max-w-full min-h-full rounded-xl object-cover object-center hover:scale-105 duration-200 ease-in-out cursor-pointer" alt="" />
            </div>
            <div id="product-text" className="px-[0.33rem] mt-2">
                <p className="text-[1.3rem] font-semibold line-clamp-1 cursor-pointer">{prod.title}</p>
                <div className="flex justify-between items-center mt-2.5 mb-1.5">
                    <div className={`ratings flex items-center gap-[0.2rem]`}>
                        {[...Array(5)].map((star, index) => {
                            const currentRating = index + 1;

                            return (
                                <label key={index}>
                                    <input
                                        className="hidden"
                                        type="radio"
                                        name="rating"
                                        value={currentRating}
                                    />
                                    <span
                                    >
                                        {
                                            <FaStar className={`text-[#ffd700] text-[1.025rem] cursor-pointer`} />
                                            // <FaRegStar className={`text-[#ffd700] text-[1.025rem] cursor-pointer`} />
                                        }
                                    </span>
                                </label>
                            )
                        })}
                    </div>
                    <p className="font-medium">&#x24; <span>{prod.price}</span></p>
                </div>
                <p className="mb-[1.3rem] line-clamp-2 leading-5 text-[0.89rem] font-medium relative group">
                    {prod.description}
                    <Link to={"/products/hoodies/1"} className="absolute bottom-[0.05rem] right-[0.1rem] bg-neutral-50 p-[0.1rem] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200 ease-linear ring-1 ring-neutral-900/20 rounded">
                        <RiShareBoxLine />
                    </Link>
                </p>

                <div className="flex justify-between items-center mb-2.5 text-[1.2rem]">
                    <button onClick={() => setHeart(() => !heart)}>
                        {
                            heart ? <FaHeart color="red" /> : <FaRegHeart color="red" />
                        }
                    </button>
                    <button onClick={() => setWishlist(() => !wishlist)}>
                        {
                            wishlist ? <BsBookmarkCheckFill color="#03a9f4" /> : <BsBookmarkPlus color="#03a9f4" />
                        }
                    </button>
                    <button onClick={() => setCart(() => !cart)}>
                        {
                            cart ? <BsCartCheckFill color="#4caf50" /> : <BsCartPlus color="#4caf50" />
                        }
                    </button>
                    <button className="text-base font-semibold">Buy</button>
                </div>
            </div>
        </motion.div>
    );
};


