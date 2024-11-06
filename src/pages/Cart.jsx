import { motion } from "framer-motion";

import useProductStore from "../stores/products/ProductStore";
import useModalStore from "../stores/modal/ModalStore";

import { Link } from "react-router-dom";
import { CartItem } from "../components/cart/CartItem";
import { Modal } from "../components/Modal";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { BsCart3 } from "react-icons/bs";



export const Cart = () => {
    const cart = useProductStore((state) => state.cart);
    const totalCartPrice = useProductStore((state) => state.totalCartPrice);
    const openModal = useModalStore((state) => state.openModal);

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
        <>
            <section className="mt-[6rem] mb-[7rem] px-5 md:px-10 lg:max-[1200px]:mx-auto lg:max-[1200px]:container xl:mx-auto xl:container duration-200 ease-linear">
                <h2 className="text-2xl font-semibold dark:font-medium dark:tracking-wide text-center mb-5">YOUR CART</h2>
                <motion.div
                    className="grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-1 min-[1201px]:grid-cols-2 gap-[0.85rem] min-[500px]:gap-[0.7rem] sm:gap-3"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {cart.length > 0
                        ? (
                            cart.map(item => (
                                <motion.div key={item.id} variants={itemVariants}>
                                    <CartItem item={item} />
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-2 my-32 max-w-fit mx-auto">
                                <p className="text-[1.4rem] font-semibold dark:font-medium dark:tracking-wide mb-2">
                                    Your cart is empty.
                                </p>
                                <Link
                                    to={"/products/all"}
                                    className="text-[1.1rem] font-medium dark:font-normal dark:tracking-wide flex justify-center items-center gap-2"
                                >
                                    <span>Shop now</span>
                                    <BsCart3 className="text-[1.18rem]" />
                                </Link>
                            </div>
                        )
                    }
                </motion.div>
            </section>
            <div
                id="shop-final"
                className="fixed bottom-0 z-10 bg-neutral-50 dark:bg-neutral-900 w-full
                    before:absolute before:-top-7 before:h-7 before:w-full before:bg-gradient-to-b before:from-transparent before:to-neutral-50 dark:before:to-neutral-900"
            >
                <div className="min-h-24 px-5 md:px-10 lg:max-[1200px]:mx-auto lg:max-[1200px]:container xl:mx-auto xl:container duration-200 ease-linear">
                    <div id="total-cart-price" className="flex justify-between mt-1">
                        <p className="text-[1.7rem] font-semibold dark:font-medium dark:tracking-wide">Total</p>
                        <p className="text-[1.5rem] font-semibold dark:font-medium dark:tracking-wide">&#x24;<span className="ml-[0.15rem]">{totalCartPrice()}</span></p>
                    </div>
                    <div className="flex justify-between items-center gap-x-14 gap-y-6 min-[489px]:gap-14 flex-wrap mt-5">
                        <Link to={"/products/all"} className="group order-1 flex items-center gap-0.5 text-[0.95rem] font-medium dark:font-normal dark:tracking-wide">
                            <IoIosArrowRoundBack className="text-2xl -mt-[0.08rem] group-hover:-translate-x-[0.33rem] transition-transform duration-200 ease-linear" />
                            <span>Shop more</span>
                        </Link>
                        <button onClick={() => openModal()} className="order-3 min-[490px]:order-2 mx-auto mb-2.5 min-[490px]:m-0 flex items-center gap-1 text-[0.95rem] text-red-500 dark:text-red-400 font-medium tracking-wide hover:scale-[1.06] active:scale-95 transition-transform duration-200 ease-linear">
                            <TiDeleteOutline className="text-xl -mt-[0.1rem]" />
                            <span>CLEAR CART</span>
                        </button>
                        <Link to={"/checkout"} className="group order-2 min-[490px]:order-3 flex items-center gap-0.5 text-[0.95rem] font-medium dark:font-normal dark:tracking-wide">
                            <span>Checkout</span>
                            <IoIosArrowRoundForward className="text-2xl -mt-[0.08rem] group-hover:translate-x-[0.33rem] transition-transform duration-200 ease-linear" />
                        </Link>
                    </div>
                </div>
            </div>
            <Modal
                modalTitle={"Clear Cart"}
                modalBody={"Are you sure want to clear the cart?"}
                canelationText={"Cancel"}
                actionText={"Clear"}
            />
        </>
    );
};





