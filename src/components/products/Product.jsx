import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BsBookmarkPlus, BsBookmarkCheckFill } from "react-icons/bs";
// import { BiPurchaseTag } from "react-icons/bi";
import { FaStar, FaRegStar } from "react-icons/fa";
// import { MdReadMore } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";



export const Product = ({ prod }) => {
    // const cart = useProductStore((state) => state.cart);
    const addToCart = useProductStore((state) => state.addToCart);

    const [heart, setHeart] = useState(false);
    const [wishlist, setWishlist] = useState(false);


    const handleClick = () => {
        // const addedItem = cart.map(i => i.id == prod.id);

        // if (addedItem) {
        //     addedItem.quantity = +1
        //     addedItem.price = +prod.price;
        // }

        const newItem = {
            id: prod.id,
            title: prod.title,
            category: prod.category,
            price: prod.price,
            totalPrice: prod.price,
            image: prod.image,
            quantity: 1
        };

        addToCart(newItem);
    }

    return (
        <motion.div id="product"
            layout
            initial={{ opacity: 0.33 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.33 }}
            transition={{
                opacity: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                },
                // scale: {
                //     duration: 0.4,
                //     ease: [0.25, 1, 0.5, 1],
                // },
                delay: 0.1
            }}
            className="relative bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 rounded-xl ring-2 ring-neutral-900/10 dark:ring-neutral-50/10 p-1.5"
        >
            <p className="text-[0.9rem] text-neutral-100 tracking-wider absolute top-1.5 right-1.5 z-10 px-[0.7rem] pt-1.5 pb-[0.35rem]
                bg-neutral-800/20 backdrop-blur-xl rounded-se-xl rounded-es-xl"
            >
                {prod.category}
            </p>
            <div id="product-img" className="h-[300px] min-[405px]:h-[330px] min-[505px]:h-[360px] sm:h-[300px] min-[740px]:h-[330px] min-[900px]:h-[360px] lg:h-[300px] xl:h-[280px] overflow-hidden rounded-xl duration-200 ease-in-out">
                <img src={prod.image} className="max-w-full min-h-full rounded-xl object-cover object-center hover:scale-105 duration-200 ease-in-out cursor-pointer" alt="" />
            </div>
            <div id="product-text" className="px-[0.37rem] dark:px-[0.4rem] mt-2">
                <p className="text-[1.3rem] font-semibold dark:font-medium dark:tracking-wide line-clamp-1 cursor-pointer">{prod.title}</p>
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
                    <p className="font-medium dark:font-normal tracking-wide">&#x24; <span>{prod.price}</span></p>
                </div>
                <p className="mb-[0.8rem] line-clamp-2 leading-5 text-[0.89rem] font-medium dark:font-normal dark:tracking-wide relative group">
                    {prod.description}
                    <Link to={"/products/hoodies/1"} className="absolute bottom-[0.05rem] right-[0.1rem] bg-neutral-50 dark:bg-neutral-900 p-[0.1rem] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200 ease-linear ring-1 ring-neutral-900/20 dark:ring-neutral-50/20 rounded">
                        <RiShareBoxLine />
                    </Link>
                </p>

                {/* <div className="h-[0.1rem] bg-neutral-800/10 dark:bg-neutral-100/10" /> */}

                <div className="flex justify-between items-center gap-5 mt-[0.85rem] mb-[0.5rem] text-[1.25rem]">
                    <motion.button
                        onClick={() => setHeart(() => !heart)}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {
                            heart ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-red-500" />
                        }
                    </motion.button>
                    <motion.button
                        onClick={() => setWishlist(() => !wishlist)}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {
                            wishlist ? <BsBookmarkCheckFill className="text-sky-500 dark:text-cyan-500" /> : <BsBookmarkPlus className="text-sky-500 dark:text-cyan-500" />
                        }
                    </motion.button>
                    <motion.button
                        onClick={handleClick}
                        whileHover={{ scale: 1.05 }}  // Slight scale and color change on hover
                        whileTap={{ scale: 0.95 }}  // Slightly shrink on click
                        className="bg-emerald-400 dark:bg-emerald-500 flex items-center justify-center gap-1.5 text-neutral-100 tracking-wide text-[1.1rem] flex-1 px-3.5 pt-2 pb-[0.55rem] rounded-lg transition-colors duration-200 ease-in-out"
                    >
                        <span>Add to</span>
                        <BsCart3 className="text-[1.135rem]" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};


