import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import useProductStore from "../stores/products/ProductStore";

import { LikedWishlistedProduct } from "../components/products/LikedWishlistedProduct";
import { BackBtn } from "../components/BackBtn";

import { FaHeart } from "react-icons/fa6";
import { BsBookmarkFill, BsCart3 } from "react-icons/bs";



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 }
    },
};


export const LikedWishlistedProducts = () => {
    const likedProducts = useProductStore((state) => state.likedProducts);
    const wishlist = useProductStore((state) => state.wishlist);

    const location = useLocation();
    const isLikedProducts = location.pathname.includes("/liked_products");
    const isWishlist = location.pathname.includes("/wishlist");

    let theProducts;

    if (isLikedProducts && !isWishlist) {
        theProducts = likedProducts;
    } else if (!isLikedProducts && isWishlist) {
        theProducts = wishlist;
    } else {
        theProducts = [];
    }


    return (
        <section
            id="liked-products"
            className="mt-[5.8rem] mb-[2.5rem] px-5 min-[340px]:max-[419px]:px-4 md:px-10 xl:mx-auto xl:container duration-200 ease-linear"
        >
            <BackBtn />
            <h2
                className={`text-[1.7rem] font-semibold dark:font-medium dark:tracking-wide mt-[0.75rem] mb-[1.4rem]`}
            >
                {
                    (isLikedProducts && !isWishlist)
                        ? <span className="flex items-center gap-2">
                            <FaHeart className="mb-1 text-red-500" /> {`Liked Products (${theProducts.length})`}
                        </span>
                        : (!isLikedProducts && isWishlist)
                            ? <span className="flex items-center gap-2">
                                <BsBookmarkFill className="mb-0.5 text-sky-500" /> {`Wishlist (${theProducts.length})`}
                            </span>
                            : null
                }
            </h2>
            <motion.div
                key={location.pathname}
                className="grid grid-cols-1 gap-[1.15rem] min-[340px]:gap-[0.8rem] min-[340px]:grid-cols-2 min-[420px]:gap-[0.935rem] min-[620px]:grid-cols-3 min-[859px]:grid-cols-4 min-[1060px]:grid-cols-5"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {theProducts.length > 0
                    ? (
                        theProducts.map((item) => (
                            <motion.div key={item.id} variants={itemVariants}>
                                <LikedWishlistedProduct item={item} />
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-5 my-[7.6rem] mx-[0.6rem] text-center text-neutral-600 dark:text-neutral-300">
                            <p className="text-[1.35rem] leading-[1.875rem] font-semibold dark:font-medium dark:tracking-wide mb-3.5">
                                {
                                    (isLikedProducts && !isWishlist) ? "You didn't like any product." :
                                        (!isLikedProducts && isWishlist) ? "You didn't wishlist any product." :
                                            null
                                }
                            </p>
                            <Link
                                to={"/products/all"}
                                className="max-w-fit mx-auto text-[1.05rem] font-medium dark:font-normal dark:tracking-wide flex justify-center items-center gap-1.5
                                hover:underline underline-offset-2"
                            >
                                <span>Go to Shop</span>
                                <BsCart3 className="text-[1.18rem]" />
                            </Link>
                        </div>
                    )
                }
            </motion.div>
        </section>
    );
};
