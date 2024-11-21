import { useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import useModalStore from "../../stores/modal/ModalStore";

import { RiBillLine } from "react-icons/ri";



export const BillingSec = () => {
    const setModal = useModalStore((state) => state.setModal);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        country: "",
        zip_postal_code: "",
        card_no: ""
    });

    console.log(formData);

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
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.1 }
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePurchaseClick = (e) => {
        e.preventDefault();
        setModal("isSuccessModal", true);
    }


    return (
        <div className="max-w-[50rem] mt-8">
            <h2 className="flex items-center gap-2 text-[1.5rem] text-neutral-800 dark:text-neutral-100 font-semibold dark:font-medium mb-[1.2rem] ">
                <RiBillLine className="text-[1.5rem] mb-0.5" />
                Billing details
            </h2>
            <motion.form
                onSubmit={handlePurchaseClick}
                className="grid grid-cols-1 min-[450px]:grid-cols-2 gap-3.5 min-[450px]:gap-4 min-[640px]:gap-5 text-[0.95rem] mb-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.input
                    className="px-3 py-3 min-[640px]:py-3.5 max-w-full bg-white dark:bg-black/20 border border-neutral-600/90 dark:border-neutral-400 focus:border-neutral-400/60 dark:focus:border-neutral-600 outline-none rounded-xl font-medium dark:font-light tracking-wide placeholder:text-neutral-500 dark:placeholder:text-neutral-400 dark:placeholder:font-normal duration-200 ease-linear "
                    variants={itemVariants}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    required
                    minLength={3}
                    maxLength={25}
                    value={formData.username}
                    onChange={handleChange}
                />
                <motion.input
                    className="px-3 py-3 min-[640px]:py-3.5 max-w-full bg-white dark:bg-black/20 border border-neutral-600/90 dark:border-neutral-400 focus:border-neutral-400/60 dark:focus:border-neutral-600 outline-none rounded-xl font-medium dark:font-light tracking-wide placeholder:text-neutral-500 dark:placeholder:text-neutral-400 dark:placeholder:font-normal duration-200 ease-linear "
                    variants={itemVariants}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <motion.input
                    className="px-3 py-3 min-[640px]:py-3.5 max-w-full bg-white dark:bg-black/20 border border-neutral-600/90 dark:border-neutral-400 focus:border-neutral-400/60 dark:focus:border-neutral-600 outline-none rounded-xl font-medium dark:font-light tracking-wide placeholder:text-neutral-500 dark:placeholder:text-neutral-400 dark:placeholder:font-normal duration-200 ease-linear"
                    variants={itemVariants}
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Coutry or State"
                    required
                    value={formData.country}
                    onChange={handleChange}
                />
                <motion.input
                    className="px-3 py-3 min-[640px]:py-3.5 max-w-full bg-white dark:bg-black/20 border border-neutral-600/90 dark:border-neutral-400 focus:border-neutral-400/60 dark:focus:border-neutral-600 outline-none rounded-xl font-medium dark:font-light tracking-wide placeholder:text-neutral-500 dark:placeholder:text-neutral-400 dark:placeholder:font-normal duration-200 ease-linear"
                    variants={itemVariants}
                    type="text"
                    name="zip_postal_code"
                    id="zip_postal_code"
                    placeholder="Zip/Postal code"
                    required
                    minLength="6"
                    pattern="\d{6,}"
                    title="Zip/Postal code must be at least 6 digits and only contain numbers."
                    value={formData.zip_postal_code}
                    onChange={handleChange}
                />
                <motion.input
                    className="px-3 py-3 min-[640px]:py-3.5 max-w-full bg-white dark:bg-black/20 border border-neutral-600/90 dark:border-neutral-400 focus:border-neutral-400/60 dark:focus:border-neutral-600 outline-none rounded-xl font-medium dark:font-light tracking-wide placeholder:text-neutral-500 dark:placeholder:text-neutral-400 dark:placeholder:font-normal duration-200 ease-linear"
                    variants={itemVariants}
                    type="text"
                    name="card_no"
                    id="card_no"
                    placeholder="Card No."
                    required
                    minLength="10"
                    pattern="\d{10,}"
                    title="Card No. must be at least 10 digits and only contain numbers."
                    value={formData.card_no}
                    onChange={handleChange}
                />
                <br />
                <motion.button variants={itemVariants}>
                    <Link to={"/cart"} className="text-[0.94rem] text-neutral-800 dark:text-neutral-100 font-semibold dark:font-medium tracking-wide dark:tracking-wider uppercase -mt-3 min-[450px]:mt-5 py-3 min-[640px]:py-3.5 rounded-xl border-2 border-neutral-700 dark:border-neutral-200
                            flex justify-center hover:tracking-[0.3rem] dark:hover:tracking-[0.3rem] duration-200 ease-linear"
                    >
                        Back to Cart
                    </Link>
                </motion.button>
                <motion.button
                    variants={itemVariants}
                    type="submit"
                    className="text-[0.94rem] text-emerald-900 font-semibold tracking-wide uppercase min-[450px]:mt-5 py-3 min-[640px]:py-3.5 bg-emerald-400 hover:bg-emerald-300 rounded-xl border-2 border-emerald-600 duration-200 ease-linear"
                >
                    Purchase
                </motion.button>
            </motion.form>
        </div>
    );
};



