import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

import useProductStore from "../stores/products/ProductStore";

import { LikedWishlistedProduct } from "../components/products/LikedWishlistedProduct";
import { BsCart3 } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";



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

    const navigate = useNavigate();


    return (
        <section
            id="liked-products"
            className="mt-[5.8rem] mb-[2.5rem] px-5 min-[340px]:max-[419px]:px-4 md:px-10 xl:mx-auto xl:container duration-200 ease-linear"
        >
            <MdKeyboardBackspace
                role="button"
                onClick={() => navigate(-1)}
                className="text-[2rem] -ml-0.5 hover:-translate-x-[0.35rem] transition-transform duration-200 ease-linear"
            />
            <h2
                className={`text-[1.7rem] font-semibold dark:font-medium dark:tracking-wide mt-[0.65rem] mb-[1.9rem]
                relative after:absolute after:-bottom-0.5 after:left-0 after:bg-neutral-800 dark:after:bg-neutral-100 after:h-[0.2rem] after:rounded-full
                ${isWishlist ? "after:w-[3rem]" : "after:w-[5.5rem]"}`}
            >
                {
                    (isLikedProducts && !isWishlist) ? `Liked Products (${theProducts.length})` :
                        (!isLikedProducts && isWishlist) ? `Wishlist (${theProducts.length})` :
                            null
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
