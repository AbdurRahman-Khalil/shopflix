import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import useProductStore from "../../stores/products/ProductStore";

import { MenuLink } from "./MenuLink";
import { ThemeBtn } from "../ThemeBtn";

import { CgMenuLeftAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";



export const Navbar = () => {
    const cartLength = useProductStore((state) => state.cartLength);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [staggerChildren, setStaggerChildren] = useState(false);

    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    const toggleMenu = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
        } else {
            setStaggerChildren(false); // Reset children stagger when closing
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 300); // Wait for exit animation to complete
        }
    };

    const closeMenu = () => {
        setStaggerChildren(false);
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 300);
    };

    useEffect(() => {
        // Trigger stagger animation only after the menu is fully visible
        if (isMenuOpen) {
            setTimeout(() => {
                setStaggerChildren(true);
            }, 300); // Wait for menu animation to complete before staggering children
        }

        const handleClickOutside = (event) => {
            // Close the menu only if clicking outside of both the menu and the button
            if (menuRef.current && !menuRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
                closeMenu(); // Close if click outside menu
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [isMenuOpen]);


    return (
        <nav className="flex items-center justify-between px-3.5 my-1 xl:mx-auto xl:container">
            <Link to={"/"} className="text-[2.4rem] sm:text-[2.5rem] font-bold dark:font-semibold z-20">
                Shopflix
            </Link>

            {/* Larger screens */}
            <>
                <ul className="hidden md:flex items-center gap-10">
                    <MenuLink
                        destination={"/"}
                        menuLinkText={"Home"}
                        addStyles={"text-lg text-neutral-800 dark:text-neutral-100 font-semibold dark:font-normal"}
                        activeStyles={"relative before:absolute before:-bottom-1 before:left-0 before:bg-rose-400/70 dark:before:bg-rose-400/95 before:w-full before:h-[0.205rem] before:rounded-full"}
                    />
                    <MenuLink
                        destination={"/products/all"}
                        menuLinkText={"Products"}
                        addStyles={"text-lg text-neutral-800 dark:text-neutral-100 font-semibold dark:font-normal"}
                        activeStyles={"relative before:absolute before:-bottom-1 before:left-0 before:bg-rose-400/70 dark:before:bg-rose-400/95 before:w-full before:h-[0.205rem] before:rounded-full"}
                    />
                    <MenuLink
                        destination={"/about"}
                        menuLinkText={"About"}
                        addStyles={"text-lg text-neutral-800 dark:text-neutral-100 font-semibold dark:font-normal"}
                        activeStyles={"relative before:absolute before:-bottom-1 before:left-0 before:bg-rose-400/70 dark:before:bg-rose-400/95 before:w-full before:h-[0.205rem] before:rounded-full"}
                    />
                </ul>
                <div className="flex justify-center items-center gap-[0.2rem] ml-auto mr-[1.65rem] md:ml-0 md:mr-1">
                    <ThemeBtn hideSeek={"max-[359px]:hidden min-[360px]:p-[0.8rem]"} />
                    <Link to={"/cart"} className="relative">
                        <BsCart3 className="text-[1.5rem]" />
                        <p className={`absolute -top-3.5 -right-3.5 z-10 text-[0.75rem] text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide ${cartLength >= 10 ? "w-[1.6rem] h-[1.6rem]" : "w-[1.48rem] h-[1.48rem]"} flex items-center justify-center bg-neutral-900/10 dark:bg-neutral-50/10 backdrop-blur-[8px] rounded-full`}>
                            {cartLength}
                        </p>
                    </Link>
                </div>
            </>

            {/* Mobile */}
            <button
                ref={menuButtonRef}
                className={`md:hidden cursor-pointer space-y-2 z-20 transform transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
                onClick={toggleMenu}
            >
                {isMenuOpen ? <IoClose className="text-[2.3rem] transition-all duration-300" /> : <CgMenuLeftAlt className="text-4xl rotate-180 transition-all duration-300" />}
            </button>

            <ul
                ref={menuRef}
                className={`space-y-5 w-full text-end z-10 ${isMenuOpen
                    ? "opacity-100 translate-y-0 duration-300 ease-in-out"
                    : "opacity-0 -translate-y-5 pointer-events-none"
                    } transition-all duration-300 ease-in-out absolute top-[4.5rem] right-0 bg-neutral-50 dark:bg-neutral-900 shadow-lg rounded-md px-5 py-7 md:hidden`}
            >
                <li
                    className={`${staggerChildren ? "delay-400 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <MenuLink
                        destination={"/"}
                        menuLinkText={"Home"}
                        addStyles={"text-xl text-neutral-800 dark:text-neutral-100 font-semibold dark:font-normal"}
                        activeStyles={"relative before:absolute before:-bottom-1 before:left-0 before:bg-rose-400/70 dark:before:bg-rose-400/95 before:w-full before:h-[0.205rem] before:rounded-full"}
                        onClick={closeMenu}
                    />
                </li>
                <li
                    className={`${staggerChildren ? "delay-100 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <MenuLink
                        destination={"/products/all"}
                        menuLinkText={"Products"}
                        addStyles={"text-xl text-neutral-800 dark:text-neutral-100 font-semibold dark:font-normal"}
                        activeStyles={"relative before:absolute before:-bottom-1 before:left-0 before:bg-rose-400/70 dark:before:bg-rose-400/95 before:w-full before:h-[0.205rem] before:rounded-full"}
                        onClick={closeMenu}
                    />
                </li>
                <li
                    className={`${staggerChildren ? "delay-200 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <MenuLink
                        destination={"/about"}
                        menuLinkText={"About"}
                        addStyles={"text-xl text-neutral-800 dark:text-neutral-100 font-semibold dark:font-normal"}
                        activeStyles={"relative before:absolute before:-bottom-1 before:left-0 before:bg-rose-400/70 dark:before:bg-rose-400/95 before:w-full before:h-[0.205rem] before:rounded-full"}
                        onClick={closeMenu}
                    />
                </li>
                <li
                    className={`${staggerChildren ? "delay-300 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <ThemeBtn hideSeek={"min-[360px]:hidden ml-auto pt-2"} />
                </li>
            </ul>
        </nav>
    );
};
