import { motion } from "framer-motion";

import hp from "../../assets/hero.png";



export const Hero = () => {
    return (
        <motion.section
            id="hero"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "anticipate" }}
            className="mt-[5.5rem] mx-3 rounded-xl h-fit sm:h-[540px]"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: 'easeInOut' }}
                className="flex sm:justify-between flex-col gap-[5rem] sm:gap-[3rem] md:gap-[1rem] lg:gap-[6rem] lg:flex-row
                            min-h-full px-5 pt-5 pb-[1rem] md:p-10 xl:mx-auto xl:container"
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.65, ease: 'easeInOut' }}
                    className="text-neutral-800/90 sm:self-start lg:self-center"
                >
                    <motion.h1
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.85, ease: 'easeInOut' }}
                        className="text-[2.4rem] font-semibold leading-[2.8rem] sm:text-[2.55rem] lg:text-[2.75rem]"
                    >
                        Find Your Perfect Style
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.05, ease: 'easeInOut' }}
                        className="font-medium leading-[1.35rem] my-2.5 sm:text-lg sm:leading-[1.55rem]"
                    >
                        Explore the latest trends & must–haves, where fashion meets individuality. Find inspiration for your everyday look and styles.
                    </motion.p>
                    <motion.button
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.25, ease: 'easeInOut' }}
                        className="text-[0.95rem] lg:text-base text-neutral-100 tracking-wide bg-neutral-900/80 hover:bg-neutral-900/70 rounded-xl mt-1.5 px-4 py-3"
                    >
                        Explore Now
                    </motion.button>
                </motion.div>
                <motion.img
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1, ease: 'easeInOut' }}
                    src={hp}
                    className="max-w-[100%] h-auto object-cover self-center sm:max-w-[95%] md:self-end lg:self-center lg:-mr-3.5 lg:max-w-[55%] xl:max-w-[100%]"
                    alt="homepage_image"
                />
            </motion.div>
        </motion.section>
    )
}
