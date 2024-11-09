import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import useProductStore from "../stores/products/ProductStore";

import { LikedProduct } from "../components/products/LikedProduct";

import { BsCart3 } from "react-icons/bs";



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


export const LikedProducts = () => {
    const likedProducts = useProductStore((state) => state.likedProducts);


    return (
        <section
            id="liked-products"
            className="mt-[6.5rem] mb-[2.5rem] px-5 min-[340px]:max-[419px]:px-4 md:px-10 xl:mx-auto xl:container duration-200 ease-linear"
        >
            <h2
                className="text-[1.7rem] font-semibold dark:font-medium dark:tracking-wide mb-[1.9rem]
                relative after:absolute after:-bottom-0.5 after:left-0 after:bg-neutral-800 dark:after:bg-neutral-100 after:h-[0.2rem] after:w-[5.5rem] after:rounded-full"
            >
                {`Liked Products (${likedProducts.length})`}
            </h2>
            <motion.div
                className="grid grid-cols-1 gap-[1.15rem] min-[340px]:gap-[0.8rem] min-[340px]:grid-cols-2 min-[420px]:gap-[0.935rem] min-[620px]:grid-cols-3 min-[859px]:grid-cols-4 min-[1060px]:grid-cols-5"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {likedProducts.length > 0
                    ? (
                        likedProducts.map((item) => (
                            <motion.div key={item.id} variants={itemVariants}>
                                <LikedProduct item={item} />
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-5 my-[7.6rem] mx-[0.6rem] text-center text-neutral-600 dark:text-neutral-300">
                            <p className="text-[1.35rem] leading-[1.875rem] font-semibold dark:font-medium dark:tracking-wide mb-3.5">
                                You didn't like any product.
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
