import { useState } from "react";

import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

import useProductStore from "../../stores/products/ProductStore";

// import generateSlug from "../../utils/generateSlug";
// import genSmallCaseCategory from "../../utils/genSmallCaseCategory";

import { IoHeartDislike } from "react-icons/io5";
// import { RiShareForwardBoxLine } from "react-icons/ri";


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


export const LikedProduct = ({ item }) => {
    const unLikeProduct = useProductStore((state) => state.unLikeProduct);

    const [isHovered, setIsHovered] = useState(false);

    // const sluggedTitle = generateSlug(item.title);
    // const smallCasedCategory = genSmallCaseCategory(item.category);


    return (
        <div
            className="relative border border-neutral-900/20 dark:border-neutral-50/15 rounded-2xl sm:rounded-xl duration-200 ease-linear"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={item.image} className="max-w-full h-auto aspect-square object-cover object-center rounded-2xl sm:rounded-xl" alt="" />
            <motion.div
                className="absolute top-0 left-0 bg-neutral-50/20 dark:bg-neutral-900/30 backdrop-blur-[20px] flex flex-col justify-center text-center p-3 w-full min-h-full rounded-2xl sm:rounded-xl"
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
            <motion.button
                onClick={() => unLikeProduct(item.id)}
                className="absolute top-0 right-0 p-[0.25rem] pl-[0.3rem] pb-[0.35rem] bg-neutral-50/20 backdrop-blur-md rounded-se-2xl rounded-es-2xl sm:rounded-se-xl sm:rounded-es-xl duration-200 ease-linear"
            >
                <IoHeartDislike className="text-[1.3rem] text-red-500" />
            </motion.button>
        </div>
    );
};





{/* <Link to={`/products/${smallCasedCategory}/${sluggedTitle}`}> */ }
{/* visit */ }
{/* </Link> */ }
