import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import generateSlug from "../../utils/generateSlug";
import genSmallCaseCategory from "../../utils/genSmallCaseCategory";
import generateRandomId from "../../utils/generateRandomId";
import formateDate from "../../utils/formateDate";
import likeAnimationVariants from "../../animations/likeAnimation";

import { Rating } from "../Rating";
import { ProductRating } from "./ProductRating";

import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BsBookmark, BsBookmarkFill, BsCart3 } from "react-icons/bs";



export const Product = ({ prod }) => {
    const likedProducts = useProductStore((state) => state.likedProducts);
    const wishlist = useProductStore((state) => state.wishlist);
    const addToCart = useProductStore((state) => state.addToCart);
    const like = useProductStore((state) => state.like);
    const disLike = useProductStore((state) => state.disLike);
    const addToWishlist = useProductStore((state) => state.addToWishlist);
    const removeFromWishlist = useProductStore((state) => state.removeFromWishlist);

    const handleAddToCart = () => {
        const newItem = {
            id: prod.id,
            title: prod.title,
            category: prod.category,
            price: prod.price,
            totalPrice: prod.totalPrice,
            image: prod.image,
            quantity: prod.quantity
        };

        addToCart(newItem);
    };

    const sluggedTitle = generateSlug(prod.title);
    const smallCasedCategory = genSmallCaseCategory(prod.category);

    const userId = generateRandomId();
    const formattedDate = formateDate();

    const newItem = {
        id: prod.id,
        title: prod.title,
        price: prod.price,
        image: prod.image,
        category: prod.category,
        likedBy: userId,
        likedAt: formattedDate,
    };

    const handleLike = () => like(newItem);
    const handleWishlist = () => addToWishlist(newItem);


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
            <Link to={`/products/${smallCasedCategory}`}>
                <p className="text-[0.9rem] text-neutral-100 tracking-wider absolute top-1.5 right-1.5 z-10 px-[0.7rem] pt-1.5 pb-[0.35rem]
                bg-neutral-800/20 backdrop-blur-xl rounded-se-xl rounded-es-xl"
                >
                    {prod.category}
                </p>
            </Link>
            <Link to={`/products/${smallCasedCategory}/${sluggedTitle}`}>
                <div id="product-img" className="h-[300px] min-[405px]:h-[330px] min-[505px]:h-[360px] sm:h-[300px] min-[740px]:h-[330px] min-[900px]:h-[360px] lg:h-[300px] xl:h-[280px] overflow-hidden rounded-xl duration-200 ease-in-out">
                    <img src={prod.image} className="max-w-full min-h-full rounded-xl object-cover object-center hover:scale-105 duration-200 ease-in-out cursor-pointer" alt="" />
                </div>
            </Link>
            <div id="product-text" className="px-[0.37rem] dark:px-[0.4rem] mt-2">
                <Link to={`/products/${smallCasedCategory}/${sluggedTitle}`}>
                    <p className="text-[1.35rem] font-semibold dark:font-medium dark:tracking-wide line-clamp-1 cursor-pointer">{prod.title}</p>
                </Link>
                <div className="flex justify-between items-center mt-2.5 mb-1.5">
                    <p className="text-[1.08rem] font-semibold dark:font-medium tracking-wide">&#x24; <span className="-ml-[0.18rem]">{prod.price}</span></p>
                    {
                        prod.usersRatings.length > 0
                            ? <ProductRating ratings={prod.rating} addStarStyles={"text-[1.05rem]"} />
                            : <Rating productId={prod.id} addStarStyles={"text-[1.05rem]"} />
                    }
                </div>
                <Link to={`/products/${smallCasedCategory}/${sluggedTitle}`}>
                    <p className="mb-[0.8rem] line-clamp-2 leading-5 text-[0.9rem] font-medium dark:font-normal dark:tracking-wide relative group">
                        {prod.description}
                    </p>
                </Link>

                <div className="flex justify-between items-center gap-5 mt-[0.85rem] mb-[0.5rem] text-[1.25rem]">
                    <button className="text-red-500">
                        <AnimatePresence mode="wait">
                            {likedProducts.find((item) => item.id === prod.id) ? (
                                <motion.div
                                    role="button"
                                    onClick={() => disLike(prod.id)}
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
                    </button>
                    <button className="text-sky-500">
                        <AnimatePresence mode="wait">
                            {wishlist.find((item) => item.id === prod.id) ? (
                                <motion.div
                                    role="button"
                                    onClick={() => removeFromWishlist(prod.id)}
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
                    </button>
                    <motion.button
                        onClick={handleAddToCart}
                        whileTap={{ scale: 0.95 }}  // Slightly shrink on click
                        className="bg-emerald-400 dark:bg-emerald-500 hover:bg-emerald-400/80 dark:hover:bg-emerald-400 flex items-center justify-center gap-1.5 text-neutral-50 tracking-wide text-[1.08rem] flex-1 px-3.5 pt-2 pb-[0.55rem] rounded-lg transition-colors duration-200 ease-linear"
                    >
                        <span>Add to</span>
                        <BsCart3 className="text-[1.18rem]" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};



