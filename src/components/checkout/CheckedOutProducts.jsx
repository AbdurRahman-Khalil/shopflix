import { motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { CheckedOutProduct } from "./CheckedOutProduct";

import { BsCart3 } from "react-icons/bs";



export const CheckedOutProducts = () => {
    const cart = useProductStore((state) => state.cart);
    const totalCartPrice = useProductStore((state) => state.totalCartPrice);

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


    return (
        <div>
            <div className="flex items-start justify-between flex-col gap-y-2.5 min-[480px]:flex-row min-[480px]:items-center mb-[1.2rem]">
                <h2 className="flex items-center gap-2.5 ml-0.5 text-[1.5rem] text-neutral-800 dark:text-neutral-100 font-semibold dark:font-medium">
                    <BsCart3 className="text-[1.5rem] mb-1" />
                    Cart Summary
                </h2>
                <div className="flex items-center gap-2 text-[1.25rem]">
                    <p className="font-medium dark:font-normal dark:tracking-wide">Total:</p>
                    <p className="font-semibold dark:font-medium dark:tracking-wide">&#x24;<span className="ml-[0.15rem]">{totalCartPrice()}</span></p>
                </div>
            </div>
            <div className="relative group 
                before:absolute before:top-0 before:-right-0 before:w-[1.4rem] before:h-full before:bg-gradient-to-r before:from-transparent before:to-neutral-50 dark:before:to-neutral-900
                after:absolute after:top-0 after:-left-0 after:w-[1.4rem] after:h-full after:bg-gradient-to-l after:from-transparent after:to-neutral-50 dark:after:to-neutral-900
            ">
                <div className="space-y-3 pb-3 overflow-x-auto scroll-smooth
                        [&::-webkit-scrollbar-thumb]:invisible group-hover:[&::-webkit-scrollbar-thumb]:visible
                        [&::-webkit-scrollbar-track]:invisible group-hover:[&::-webkit-scrollbar-track]:visible
                        [&::-webkit-scrollbar]:h-1.5 
                        hover:[&::-webkit-scrollbar-thumb]:cursor-grab 
                        active:[&::-webkit-scrollbar-thumb]:cursor-grabbing
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-neutral-200/60
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-neutral-300/85
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-800
                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700
                    ">
                    <motion.div
                        className="top flex gap-2.5"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {
                            cart
                                .filter((_, index) => index % 2 === 0)
                                .map(item => (
                                    <CheckedOutProduct
                                        key={item.id}
                                        item={item}
                                        itemVariants={itemVariants}
                                    />
                                ))
                        }
                    </motion.div>
                    <motion.div
                        className="bottom flex gap-2.5"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {
                            cart
                                .filter((_, index) => index % 2 !== 0)
                                .map(item => (
                                    <CheckedOutProduct
                                        key={item.id}
                                        item={item}
                                        itemVariants={itemVariants}
                                    />
                                ))
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
