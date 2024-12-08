import { useState } from "react";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import useProductStore from "../../stores/products/ProductStore";

import generateSlug from "../../utils/generateSlug";
import genSmallCaseCategory from "../../utils/genSmallCaseCategory";

import { IoHeartDislike } from "react-icons/io5";
import { GoBookmarkSlashFill } from "react-icons/go";
import { RiShareBoxLine } from "react-icons/ri";



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
};

const itemAnimations = {
    type: "spring",
    stiffness: 230,
    damping: 17,
    bounce: 0.4,
}


export const LikedWishlistedProduct = ({ item }) => {
    const disLike = useProductStore((state) => state.disLike);
    const removeFromWishlist = useProductStore((state) => state.removeFromWishlist);

    const [isHovered, setIsHovered] = useState(false);

    const sluggedTitle = generateSlug(item.title);
    const smallCasedCategory = genSmallCaseCategory(item.category);

    const location = useLocation();
    const isLikedProducts = location.pathname.includes("/liked_products");
    const isWishlist = location.pathname.includes("/wishlist");


    return (
        <div
            className="relative border border-neutral-900/20 dark:border-neutral-50/15 rounded-2xl sm:rounded-xl duration-200 ease-linear"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={item.image} className="max-w-full h-auto aspect-square object-cover object-center rounded-2xl sm:rounded-xl" alt="" />
            <motion.div
                className="absolute top-0 left-0 text-neutral-900/90 dark:text-neutral-50 bg-neutral-50/20 dark:bg-neutral-900/30 backdrop-blur-[20px] flex flex-col justify-center text-center p-3 w-full min-h-full rounded-2xl sm:rounded-xl"
                animate={isHovered ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.p
                    className="text-[1.35rem] leading-[1.635rem] font-semibold dark:font-medium dark:tracking-wide mb-2.5"
                    variants={itemVariants}
                    transition={itemAnimations}
                >
                    {item.title}
                </motion.p>
                <motion.p
                    className="text-[1.25rem] font-medium dark:font-normal dark:tracking-wide"
                    variants={itemVariants}
                    transition={itemAnimations}
                >
                    &#x24;<span className="ml-[0.15rem]">{item.price}</span>
                </motion.p>
            </motion.div>
            <div className="flex items-center gap-2.5 absolute bottom-0 right-0 p-[0.45rem] pr-[0.4rem] pb-[0.4rem] bg-neutral-50/25 backdrop-blur-md rounded-ss-2xl rounded-ee-2xl sm:rounded-ss-xl sm:rounded-ee-xl duration-200 ease-linear">
                <Link
                    to={`/products/${smallCasedCategory}/${sluggedTitle}`}
                >
                    <RiShareBoxLine className="text-[1.25rem] text-neutral-800" />
                </Link>
                {
                    (!isLikedProducts && isWishlist)
                        ? <button
                            onClick={() => removeFromWishlist(item.id)}
                        >
                            <GoBookmarkSlashFill className="text-[1.3rem] text-sky-500" />
                        </button>
                        : (isLikedProducts && !isWishlist)
                            ? <button
                                onClick={() => disLike(item.id)}
                            >
                                <IoHeartDislike className="text-[1.3rem] text-red-500" />
                            </button>
                            : null
                }
            </div>
        </div>
    );
};







