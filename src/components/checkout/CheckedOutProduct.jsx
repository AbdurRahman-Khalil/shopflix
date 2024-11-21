import { motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { HiOutlineArrowLongRight } from "react-icons/hi2";



export const CheckedOutProduct = ({ item, itemVariants }) => {
    const removeFromCart = useProductStore((state) => state.removeFromCart);

    return (
        <motion.div
            className="flex gap-2.5 min-w-fit p-[0.2rem] border-2 border-neutral-900/15 dark:border-neutral-50/15 rounded-2xl sm:rounded-xl duration-200 ease-linear"
            variants={itemVariants}
        >
            <div className="max-w-[5.2rem] min-h-[5.2rem] min-[425px]:max-w-[5.7rem] min-[425px]:min-h-[5.7rem] min-[500px]:max-w-[6.3rem] min-[500px]:min-h-[6.3rem] aspect-square rounded-xl sm:rounded-lg">
                <img src={item.image} className="max-w-full h-full aspect-square object-cover object-center rounded-xl sm:rounded-lg" alt="" />
            </div>
            <div className="flex flex-col justify-between py-[0.18rem] pr-2.5">
                <p className="text-[1rem] min-[425px]:text-[1.05rem] min-[500px]:text-[1.1rem] font-semibold dark:font-normal tracking-wide line-clamp-1">{item.title}</p>
                <div className="flex items-center text-[0.8rem] min-[425px]:text-[0.85rem] min-[500px]:text-[0.9rem]">
                    <p className="current-price font-medium dark:font-light">
                        &#x24;<span className="ml-[0.15rem] tracking-wide dark:tracking-wider">{item.price}</span>
                    </p>
                    {item.quantity > 1 && (
                        <>
                            <HiOutlineArrowLongRight className="mx-3" />
                            <p className="dark:font-extralight">
                                x{item.quantity}
                            </p>
                            <HiOutlineArrowLongRight className="mx-3" />
                            <p className="total-price font-medium dark:font-light">
                                &#x24;<span className="ml-[0.15rem]">{item.totalPrice}</span>
                            </p>
                        </>
                    )}
                </div>
                <button
                    className="w-fit text-[0.78rem] min-[425px]:text-[0.83rem] min-[500px]:text-[0.88rem] text-red-500 dark:text-red-400 font-semibold dark:font-medium tracking-wide"
                    onClick={() => removeFromCart(item.id)}
                >
                    remove
                </button>
            </div>
        </motion.div>
    );
};
