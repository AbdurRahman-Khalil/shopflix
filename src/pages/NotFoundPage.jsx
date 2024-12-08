import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { BsCart3 } from "react-icons/bs";
import { BiBookHeart } from "react-icons/bi"



export const NotFoundPage = () => {

    const navigate = useNavigate();

    const hover = {
        scale: 1.1,
        cursor: "grab"
    }
    const tap = {
        scale: 0.7,
        cursor: "grabbing"
    }
    const transition = {
        duration: 0.38,
    }


    return (
        <section id="not-found-page" className="relattive min-h-dvh duration-200 ease-linear">
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-50/40 dark:bg-neutral-900/40 backdrop-blur-xl px-5 md:px-10 overflow-hidden duration-200 ease-linear">
                <motion.div
                    className="absolute top-8 -right-24"
                    drag
                    dragConstraints={{
                        top: -100,
                        right: 100,
                        bottom: 100,
                        left: -300,
                    }}
                    whileHover={hover}
                    whileTap={tap}
                    transition={transition}
                >
                    <BsCart3 className="rotate-45 text-[18rem] text-neutral-800/[6%] dark:text-neutral-100/[3%]" />
                </motion.div>
                <motion.div
                    className="absolute bottom-0 -left-24"
                    drag
                    dragConstraints={{
                        top: -100,
                        right: 300,
                        bottom: 100,
                        left: -100,
                    }}
                    whileHover={hover}
                    whileTap={tap}
                    transition={transition}
                >
                    <BiBookHeart className="rotate-[-25deg] text-[18rem] text-neutral-800/[6%] dark:text-neutral-100/[3%]" />
                </motion.div>
                <div id="not-found-page-content" className="mt-14 text-center text-slate-800/90 dark:text-slate-100/75 duration-200 ease-linear">
                    <h1 className="text-[4rem] font-extrabold dark:font-bold duration-200 ease-linear">404</h1>
                    <p className="text-[2rem] font-bold dark:font-semibold mb-3.5 duration-200 ease-linear">Oops! Page not Found</p>
                    <p
                        className="text-[1.15rem] font-semibold dark:font-normal tracking-wide leading-[1.6rem] duration-200 ease-linear"
                    >
                        {"The page you are looking for doesn't exist. it might have been moved or deleted."}
                    </p>
                    <button
                        className="text-[1rem] text-slate-100 dark:text-slate-900 font-medium dark:font-bold tracking-wide hover:scale-[1.03]
                            bg-slate-800/90 dark:bg-slate-100/[68%] hover:bg-slate-800/[95.5%] hover:dark:bg-slate-100/[81.5%] backdrop-blur-md mt-8 rounded-xl px-5 py-3.5 duration-200 ease-linear"
                        onClick={() => navigate(-1)}
                    >
                        Take me Back
                    </button>
                </div>
            </div>
        </section>
    );
};





// import { motion } from "framer-motion";








// <section id="not-found-page" className="min-h-dvh flex items-center justify-center px-5 md:px-10 xl:mx-auto xl:container duration-200 ease-linear">