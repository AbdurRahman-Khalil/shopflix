import { useEffect, useState } from "react";

import { motion } from "framer-motion";
// import Confetti from "react-confetti/dist/types/Confetti";
import Confetti from 'react-confetti'

import useProductStore from "../../stores/products/ProductStore";
import useModalStore from "../../stores/modal/ModalStore";
import { Link } from "react-router-dom";



export const SuccessModal = ({ modalTitle, modalDesc, actionOneText, actionTwoText }) => {
    const cartLength = useProductStore((state) => state.cartLength);
    const totalCartPrice = useProductStore((state) => state.totalCartPrice);
    const clearCart = useProductStore((state) => state.clearCart);
    const isSuccessModal = useModalStore((state) => state.isSuccessModal);
    const setModal = useModalStore((state) => state.setModal);

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
        window.onresize = () => setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        if (isSuccessModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isSuccessModal]);

    const handleClick = () => {
        clearCart();
        setModal("isSuccessModal", false);
    }


    return (
        <>
            {isSuccessModal && (
                <>
                    <Confetti
                        width={windowSize.width}
                        height={windowSize.height}
                        recycle={true}
                        style={{ zIndex: 25 }}
                    />
                    <motion.div
                        id="modal_overlay"
                        className="bg-neutral-900/20 backdrop-blur-[24px] w-full min-h-[100svh] fixed flex justify-center items-center top-0 left-0 z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            id="modal"
                            className="max-w-fit mx-6 bg-slate-50/90 dark:bg-neutral-900/90 border border-neutral-900/50 dark:border-neutral-50/60 rounded-xl px-8 py-6"
                            initial={{ opacity: 0, scale: 0.4 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.2 }}
                            transition={{
                                type: "spring",
                                stiffness: 110,
                                damping: 8,
                                ease: "easeInOut"
                            }}
                        >
                            <h5 id="modal-title" className="text-[1.65rem] text-center leading-9 font-semibold dark:font-medium dark:tracking-wide mb-6">
                                {modalTitle}
                            </h5>
                            <p id="modal-desc" className="text-[1.2rem] text-center leading-7 font-medium dark:font-normal dark:tracking-wide mb-9
                                flex flex-col gap-2"
                            >
                                <span>
                                    {modalDesc}
                                </span>
                                <span>
                                    Items purchased: {cartLength}
                                </span>
                                <span>
                                    Amount spended:&nbsp;
                                    <span className="text-[1.3rem] font-semibold dark:font-medium dark:tracking-wide">
                                        &#x24;<span className="ml-[0.1rem]">{totalCartPrice()}</span>
                                    </span>
                                </span>
                            </p>
                            <div id="modal-footer" className="flex flex-col min-[449px]:flex-row justify-center items-center gap-[1.1rem] mx-5 mb-1.5">
                                <Link to={"/"} className="max-[448px]:w-full flex-1">
                                    <motion.button
                                        onClick={handleClick}
                                        type="button"
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.96 }}
                                        className="max-[448px]:w-full text-gray-500 dark:text-gray-400 font-semibold dark:font-medium dark:tracking-wide border-2 border-gray-500 dark:border-gray-400 rounded-lg px-5 py-2.5"
                                    >
                                        {actionOneText}
                                    </motion.button>
                                </Link>
                                <Link to={"/products/all"} className="max-[448px]:w-full">
                                    <motion.button
                                        onClick={handleClick}
                                        type="button"
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.96 }}
                                        className="max-[448px]:w-full text-emerald-500 dark:text-emerald-400 font-semibold dark:font-medium dark:tracking-wide border-2 border-emerald-500 dark:border-emerald-400 rounded-lg px-5 py-2.5"
                                    >
                                        {actionTwoText}
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </>
    );
};
