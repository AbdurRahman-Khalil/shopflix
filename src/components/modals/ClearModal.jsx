import { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";
import useModalStore from "../../stores/modal/ModalStore";



export const ClearModal = ({ modalTitle, modalDesc, actionOneText, actionTwoText }) => {

    const clearCart = useProductStore((state) => state.clearCart);
    const isClearModal = useModalStore((state) => state.isClearModal);
    const setModal = useModalStore((state) => state.setModal);

    useEffect(() => {
        if (isClearModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isClearModal]);

    const handleClick = (e) => {
        if (e.target.id === "modal_overlay") {
            return setModal("isClearModal", false);
        }
    }


    return (
        <AnimatePresence>

            {isClearModal && (
                <motion.div
                    onClick={handleClick}
                    id="modal_overlay"
                    className="bg-neutral-900/20 backdrop-blur-[24px] w-full min-h-[100dvh] fixed flex justify-center items-center top-0 left-0 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        id="modal"
                        className="max-w-fit mx-6 bg-slate-50/90 dark:bg-neutral-900/90 border border-neutral-900/50 dark:border-neutral-50/60 rounded-xl px-8 py-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <h5 id="modal-title" className="text-[1.65rem] text-center font-semibold dark:font-medium dark:tracking-wide mb-1">
                            {modalTitle}
                        </h5>
                        <p id="modal-desc" className="text-[1.2rem] text-center leading-7 font-medium dark:font-normal dark:tracking-wide mb-6">
                            {modalDesc}
                        </p>
                        <div id="modal-footer" className="flex justify-center items-center gap-[1.1rem] mx-5 mb-0.5">
                            <motion.button
                                onClick={() => setModal("isClearModal", false)}
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 text-gray-500 dark:text-gray-400 font-semibold dark:font-medium dark:tracking-wide border-2 border-gray-500 dark:border-gray-400 rounded-lg px-5 py-2"
                            >
                                {actionOneText}
                            </motion.button>
                            <motion.button
                                onClick={() => {
                                    clearCart();
                                    setModal("isClearModal", false);
                                }}
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 text-red-500 dark:text-red-400 font-semibold dark:font-medium dark:tracking-wide border-2 border-red-500 dark:border-red-400 rounded-lg px-5 py-2"
                            >
                                {actionTwoText}
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};









