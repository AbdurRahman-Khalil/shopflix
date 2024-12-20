import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import useProductStore from "../stores/products/ProductStore";

import generateSlug from "../utils/generateSlug";
import formateDate from "../utils/formateDate";
import generateRandomId from "../utils/generateRandomId";
import likeAnimationVariants from "../animations/likeAnimation";

import { BackBtn } from "../components/BackBtn";
import { Rating } from "../components/Rating";
import { ProductRating } from "../components/products/ProductRating";

import { BsCart3 } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";



export const ProductPage = () => {
    const products = useProductStore((state) => state.products);
    const likedProducts = useProductStore((state) => state.likedProducts);
    const wishlist = useProductStore((state) => state.wishlist);
    const addToCart = useProductStore((state) => state.addToCart);
    const like = useProductStore((state) => state.like);
    const disLike = useProductStore((state) => state.disLike);
    const addToWishlist = useProductStore((state) => state.addToWishlist);
    const removeFromWishlist = useProductStore((state) => state.removeFromWishlist);

    const { slug } = useParams();
    const openedProduct = products.find(product => generateSlug(product.title) === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddToCart = () => {
        const newItem = {
            id: openedProduct.id,
            title: openedProduct.title,
            category: openedProduct.category,
            price: openedProduct.price,
            totalPrice: openedProduct.totalPrice,
            image: openedProduct.image,
            quantity: openedProduct.quantity,
        };

        addToCart(newItem);
    }

    const userId = generateRandomId();
    const formattedDate = formateDate();

    const newItem = {
        id: openedProduct.id,
        title: openedProduct.title,
        price: openedProduct.price,
        image: openedProduct.image,
        category: openedProduct.category,
        likedBy: userId,
        likedAt: formattedDate,
    };

    const handleLike = () => like(newItem);
    const handleWishlist = () => addToWishlist(newItem);

    const pageVariants = {
        initial: {
            x: 300,
            opacity: 0,
            filter: "blur(20px)"
        },
        animate: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.09,
                ease: [.19, .55, .79, .81]
            },
        },
    };


    return (
        <motion.section
            id="product_page"
            className="mt-[5.6rem] mb-[2.5rem] px-5 md:px-10 xl:mx-auto xl:container duration-200 ease-linear"
            variants={pageVariants}
            initial="initial"
            animate="animate"
        >
            <BackBtn />
            {openedProduct ? (
                <div className="flex flex-col gap-3.5 sm:gap-4 lg:gap-[1.1rem] lg:flex-row lg:items-center mt-[1.1rem]">
                    <div className="max-w-full min-h-full md:max-w-[25rem] md:min-h-[25rem] lg:max-w-[28rem] lg:min-h-[28rem] aspect-square rounded-xl">
                        <img src={openedProduct.image} className="max-w-full h-full object-cover object-center aspect-square rounded-xl" alt={openedProduct.title + " image"} />
                    </div>

                    <div>
                        <div className="mb-6 sm:mb-[1.8rem] space-y-[0.1rem] sm:space-y-[0.15rem]">
                            <p className="ml-[0.1rem] text-[0.95rem] sm:text-[1.05rem] lg:text-[1.1rem] font-medium dark:font-normal tracking-wide uppercase">{openedProduct.category}</p>
                            <h2 className="text-[2.2rem] sm:text-[2.5rem] lg:text-[2.6rem] font-semibold dark:font-medium leading-[2.8rem]">{openedProduct.title}</h2>
                        </div>

                        <div className="space-y-[0.7rem] sm:space-y-[0.75rem]">
                            {
                                openedProduct.usersRatings.length > 0
                                    ? (
                                        <ProductRating
                                            ratings={openedProduct.rating}
                                            addStarStyles={"text-[1.17rem] sm:text-[1.25rem] lg:text-[1.3rem]"}
                                        />
                                    )
                                    : (
                                        <Rating
                                            productId={openedProduct.id}
                                            addStarStyles={"text-[1.17rem] sm:text-[1.25rem] lg:text-[1.3rem]"}
                                        />
                                    )
                            }
                            <p className="lg:ml-[0.1rem] text-[1rem] sm:text-[1.1rem] lg:text-[1.18rem] font-medium dark:font-normal dark:tracking-wide leading-[1.45rem] sm:leading-[1.6rem] lg:leading-[1.65rem]">
                                {openedProduct.description}
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between mt-4 sm:mt-[1.8rem] mb-6 lg:mb-0">
                            <p className="sm:mb-0.5 text-[2.3rem] sm:text-[2.6rem] lg:text-[2.7rem] font-semibold dark:font-medium dark:tracking-wide">&#x24;<span className="ml-[0.15rem] text-[1.9rem] sm:text-[2.2rem] lg:text-[2.3rem]">{openedProduct.price}</span></p>
                            <div className="flex gap-2">
                                <motion.button
                                    onClick={handleAddToCart}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-[10.15rem] sm:w-[13rem] lg:max-[1060px]:w-[11.5rem] bg-emerald-400 dark:bg-emerald-500 hover:bg-emerald-400/80 dark:hover:bg-emerald-400 flex items-center justify-center gap-1.5 text-neutral-50 text-[1.1rem] font-medium tracking-wider py-3 rounded-xl transition-colors duration-200 ease-linear"
                                >
                                    <span>Add to</span>
                                    <BsCart3 className="text-[1.2rem]" />
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="text-[1.4rem] text-red-500 bg-red-100 px-3.5 pb-[0.08rem] rounded-xl"
                                >
                                    <AnimatePresence mode="wait">
                                        {likedProducts.find((item) => item.id === openedProduct.id) ? (
                                            <motion.div
                                                role="button"
                                                onClick={() => disLike(openedProduct.id)}
                                                key="liked"
                                                initial="initial"
                                                animate="liked"
                                                exit="exit"
                                                variants={likeAnimationVariants}
                                            >
                                                <FaHeart />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                role="button"
                                                onClick={handleLike}
                                                key="unliked"
                                                initial="initial"
                                                animate="unliked"
                                                exit="exit"
                                                variants={likeAnimationVariants}
                                            >
                                                <FaRegHeart />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="text-[1.4rem] text-sky-500 bg-sky-100 px-3.5 pb-[0.08rem] rounded-xl"
                                >
                                    <AnimatePresence mode="wait">
                                        {wishlist.find((item) => item.id === openedProduct.id) ? (
                                            <motion.div
                                                role="button"
                                                onClick={() => removeFromWishlist(openedProduct.id)}
                                                key="liked"
                                                initial="initial"
                                                animate="liked"
                                                exit="exit"
                                                variants={likeAnimationVariants}
                                            >
                                                <BsBookmarkFill />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                role="button"
                                                onClick={handleWishlist}
                                                key="unliked"
                                                initial="initial"
                                                animate="unliked"
                                                exit="exit"
                                                variants={likeAnimationVariants}
                                            >
                                                <BsBookmark />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </motion.section>
    );
};











