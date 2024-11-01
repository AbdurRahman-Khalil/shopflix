import useProductStore from "../../stores/products/ProductStore";

import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";



export const CartItem = ({ item }) => {
    const removeFromCart = useProductStore((state) => state.removeFromCart);
    const increaseQuantity = useProductStore((state) => state.increaseQuantity);
    const decreaseQuantity = useProductStore((state) => state.decreaseQuantity);


    return (
        <div className="relative p-[0.3rem] border-2 border-neutral-900/25 dark:border-neutral-50/20 rounded-2xl sm:rounded-xl duration-200 ease-linear">
            <div className="flex flex-col gap-2.5 sm:gap-3.5 sm:flex-row">
                <div className="max-w-full min-h-full sm:max-w-[10.5rem] sm:min-h-[10.5rem]">
                    <img src={item.image} className="max-w-full h-auto aspect-square object-cover object-center rounded-xl sm:rounded-lg" alt="" />
                </div>
                <div className="flex flex-col justify-between gap-4 mx-1.5 sm:mx-0 sm:my-3 max-w-[100%] sm:max-w-[58%]">
                    <div className="text-center sm:text-start">
                        <p className="text-[1.38rem] leading-[1.85rem] font-semibold dark:font-medium dark:tracking-wide">{item.title}</p>
                        <p className="text-[1.05rem] font-medium dark:font-normal dark:tracking-wide text-neutral-800/70 dark:text-neutral-100/70">{item.category}</p>
                    </div>
                    <div className="flex flex-col min-[416px]:flex-row min-[500px]:flex-col sm:flex-row items-center gap-[1.3rem] min-[416px]:gap-[2.3rem] min-[500px]:gap-[1.3rem] sm:gap-[2.7rem] mx-auto mt-2.5 min-[416px]:mt-3.5 min-[500px]:mt-2.5 mb-4 min-[416px]:mb-5 min-[500px]:mb-4 min-[500px]:mx-0 sm:my-0">
                        <p className="current-price text-[1.02rem] font-medium dark:font-normal tracking-wide dark:tracking-wider">&#x24;<span className="ml-[0.15rem]">{item.price}</span></p>
                        <div className="quantity text-[1.04rem] flex items-center gap-[1.3rem] border rounded-xl border-neutral-900/30 dark:border-neutral-50/25 px-3 pt-1.5 pb-[0.4rem]">
                            <button id="increase" onClick={() => decreaseQuantity(item.id)}>
                                <FaMinus
                                    className="text-amber-500 dark:text-amber-400"
                                />
                            </button>
                            <p className="font-semibold dark:font-medium tracking-wide dark:tracking-wider">{item.quantity}</p>
                            <button id="decrease" onClick={() => increaseQuantity(item.id)}>
                                <FaPlus
                                    className="text-amber-500 dark:text-amber-400"
                                />
                            </button>
                        </div>
                        <p className="total-price text-[1.13rem] font-semibold dark:font-medium tracking-wide dark:tracking-wider">&#x24;<span className="ml-[0.15rem]">{item.totalPrice}</span></p>
                    </div>
                </div>
            </div>

            <button onClick={() => removeFromCart(item.id)} className="absolute top-[0.3rem] sm:top-1 right-[0.3rem] p-[0.3rem] sm:p-0 bg-neutral-50/20 backdrop-blur-md sm:bg-transparent sm:backdrop-blur-[0] rounded-se-xl rounded-es-xl">
                <IoClose className="text-[1.65rem] text-red-500 sm:dark:text-red-400" />
            </button>
        </div>
    );
};



