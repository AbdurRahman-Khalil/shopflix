import { useState } from "react";

import { motion } from "framer-motion";
import { toast } from "sonner";

import { BsArrowRightCircleFill } from "react-icons/bs";



export const Newsletter = ({ newsLetterHeading, newsLetterParag, formPlaceholderText }) => {
    const [email, setEmail] = useState("");

    const handleSubscription = (e) => {
        e.preventDefault();

        toast.message("Subscribed to Newsletter Successfully✅", {
            description: "Thank you for Subscribing to Shopflix Newsletter😊",
        });

        setEmail("");
    };


    return (
        <section id="newsletter" className="text-neutral-100 w-full h-[fit-content]">
            <div className="max-w-full min-h-full bg-neutral-900/20 dark:bg-neutral-900/40 backdrop-blur-xl py-14 px-5 min-[300px]:px-6 sm:px-12 md:px-18 lg:px-20">
                <motion.div
                    className="flex flex-col items-center text-center max-w-full min-h-full"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 1.2, ease: "anticipate" }}
                    viewport={{ once: true }}
                >

                    <h2 className="mb-4 text-3xl font-semibold">{newsLetterHeading}</h2>
                    <p className="pr-1 mb-6 text-lg tracking-wide leading-[1.6rem]">{newsLetterParag}</p>
                    <form
                        onSubmit={handleSubscription}
                        className="flex gap-3 px-3 py-3 rounded-lg bg-neutral-50/50"
                    >
                        <input
                            className="flex-1 text-[0.93rem] font-semibold bg-transparent outline-none text-neutral-800 placeholder:font-medium placeholder:text-neutral-800/75 rounded-md"
                            type="email"
                            name="email"
                            id="email"
                            placeholder={formPlaceholderText}
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit">
                            <BsArrowRightCircleFill className="text-[1.75rem] text-cyan-950 hover:translate-x-[0.25rem] transition-transform duration-200 ease-linear cursor-pointer" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
