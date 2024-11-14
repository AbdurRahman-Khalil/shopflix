import { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import useProductStore from "../stores/products/ProductStore";
import useModalStore from "../stores/modal/ModalStore";



export const Modal = ({ modalTitle, modalBody, canelationText, actionText }) => {

    const clearCart = useProductStore((state) => state.clearCart);
    const isModalOpen = useModalStore((state) => state.isModalOpen);
    const closeModal = useModalStore((state) => state.closeModal);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const handleClick = (e) => {
        if (e.target.id === "modal_overlay") {
            return closeModal();
        }
    }


    return (
        <AnimatePresence>

            {isModalOpen && (
                <motion.div
                    onClick={(e) => handleClick(e)}
                    id="modal_overlay"
                    className="bg-neutral-900/20 backdrop-blur-[24px]  w-full min-h-[100dvh] fixed flex justify-center items-center top-0 left-0 z-20"
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
                        <div id="modal-header" className="text-center mb-1">
                            <h5 id="modal-title" className="text-[1.65rem] font-semibold dark:font-medium dark:tracking-wide">{modalTitle}</h5>
                        </div>
                        <p id="modal-body" className="text-[1.2rem] text-center leading-7 font-medium dark:font-normal dark:tracking-wide mb-6">
                            {modalBody}
                        </p>
                        <div id="modal-footer" className="flex justify-center items-center gap-[1.1rem] mx-5 mb-0.5">
                            <motion.button
                                onClick={closeModal}
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 text-gray-500 dark:text-gray-400 font-semibold dark:font-medium dark:tracking-wide border-2 border-gray-500 dark:border-gray-400 rounded-lg px-5 py-2"
                            >
                                {canelationText}
                            </motion.button>
                            <motion.button
                                onClick={() => {
                                    clearCart();
                                    closeModal();
                                }}
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 text-red-500 dark:text-red-400 font-semibold dark:font-medium dark:tracking-wide border-2 border-red-500 dark:border-red-400 rounded-lg px-5 py-2"
                            >
                                {actionText}
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};









