import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import useProductStore from "../../stores/products/ProductStore";

import { MenuLink } from "./MenuLink";
import { ThemeBtn } from "../ThemeBtn";

import { CgMenuLeftAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { BsCart3, BsBookmark } from "react-icons/bs";
import { BiBookHeart } from "react-icons/bi"



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
        <nav className="fixed top-0 left-3 right-3 z-10 flex items-center justify-between bg-neutral-50/40 dark:bg-neutral-900/50 backdrop-blur-[70px] ring-1 ring-neutral-900/15 dark:ring-neutral-50/20 rounded-xl max-w-[100%] pl-[0.82rem] pr-[0.58rem] md:pr-[0.86rem] md:dark:pr-[0.92rem] my-1.5 pt-[0.125rem] pb-[0.5rem]">
            <Link to={"/"} className="text-[2.4rem] font-bold z-20">
                Shopflix
            </Link>

            {/* Larger screens */}
            <>
                <ul className="hidden md:flex items-center gap-10 mt-[0.22rem]">
                    <MenuLink
                        destination={"/"}
                        menuLinkText={"Home"}
                        addStyles={"text-lg text-neutral-800 dark:text-neutral-100 font-semibold dark:font-medium tracking-wide"}
                        activeStyles={"relative before:absolute before:-bottom-1 before:left-0 before:bg-rose-400/70 dark:before:bg-rose-400/95 before:w-full before:h-[0.205rem] before:rounded-full"}
                    />
                    <MenuLink
                        destination={"/products/all"}
                        menuLinkText={"Products"}
                        addStyles={"text-lg text-neutral-800 dark:text-neutral-100 font-semibold dark:font-medium tracking-wide"}
                        activeStyles={"relative before:absolute before:-bottom-1 before:left-0 before:bg-rose-400/70 dark:before:bg-rose-400/95 before:w-full before:h-[0.205rem] before:rounded-full"}
                    />
                </ul>
                <div className="flex justify-center items-center gap-[1.15rem] dark:gap-[1.27rem] mt-[0.2rem] ml-auto mr-[1.15rem] dark:mr-[1.25rem] md:mx-0 md:dark:mx-0">
                    <Link to={"/wishlist"} className="max-[414px]:hidden">
                        <BsBookmark className="text-[1.4rem] text-sky-500/85 dark:text-sky-400" />
                    </Link>
                    <Link to={"/liked_products"} className="max-[463px]:hidden">
                        <BiBookHeart className="text-[1.55rem] text-red-500/85 dark:text-red-400" />
                    </Link>
                    <Link to={"/cart"} className="relative max-[359px]:hidden">
                        <BsCart3 className="text-[1.5rem]" />
                        <p className={`absolute -top-3.5 -right-3.5 z-10 text-[0.75rem] text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide 
                            ${cartLength >= 10 ? "w-[1.6rem] h-[1.6rem]" : "w-[1.48rem] h-[1.48rem]"} 
                            flex items-center justify-center bg-neutral-50/90 dark:bg-neutral-900/90 ring-1 ring-neutral-900/15 dark:ring-neutral-50/30 rounded-full`}
                        >
                            {cartLength}
                        </p>
                    </Link>
                    <ThemeBtn hideSeek={"max-[499px]:hidden min-[500px]:pl-[0.6rem]"} />
                </div>
            </>

            {/* Mobile */}
            <button
                ref={menuButtonRef}
                className={`md:hidden mt-[0.2rem] cursor-pointer space-y-2 z-20 transform transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
                onClick={toggleMenu}
            >
                {isMenuOpen ? <IoClose className="text-[2.3rem] transition-all duration-300" /> : <CgMenuLeftAlt className="text-4xl rotate-180 transition-all duration-300" />}
            </button>

            <ul
                ref={menuRef}
                className={`space-y-6 w-full text-end z-10 
                    ${isMenuOpen
                        ? "opacity-100 translate-y-0 duration-300 ease-in-out"
                        : "opacity-0 -translate-y-5 pointer-events-none"
                    } transition-all duration-300 ease-in-out absolute top-[4.7rem] right-0 
                    bg-neutral-50 dark:bg-neutral-900 ring-1 ring-neutral-900/15 dark:ring-neutral-50/20 rounded-lg shadow-lg px-5 pt-8 pb-3.5 md:hidden
                    `}
            >
                {/* <Link to={"/cart"} className="relative min-[360px]:hidden ml-auto">
                    <BsCart3 className="text-[1.5rem]" />
                    <p className={`absolute -top-3.5 -right-3.5 z-10 text-[0.75rem] text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide 
                            ${cartLength >= 10 ? "w-[1.6rem] h-[1.6rem]" : "w-[1.48rem] h-[1.48rem]"} 
                            flex items-center justify-center bg-neutral-50/90 dark:bg-neutral-900/90 ring-1 ring-neutral-900/15 dark:ring-neutral-50/30 rounded-full`}
                    >
                        {cartLength}
                    </p>
                </Link> */}
                <li
                    className={`${staggerChildren ? "delay-400 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <MenuLink
                        destination={"/"}
                        menuLinkText={"Home"}
                        addStyles={"text-xl text-neutral-800 dark:text-neutral-100 font-semibold dark:font-medium tracking-wide"}
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
                        addStyles={"text-xl text-neutral-800 dark:text-neutral-100 font-semibold dark:font-medium tracking-wide"}
                        activeStyles={"relative before:absolute before:-bottom-1 before:left-0 before:bg-rose-400/70 dark:before:bg-rose-400/95 before:w-full before:h-[0.205rem] before:rounded-full"}
                        onClick={closeMenu}
                    />
                </li>

                <li
                    className={`${staggerChildren ? "delay-200 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <ThemeBtn hideSeek={"min-[500px]:hidden ml-auto pt-2"} />
                </li>
                <li
                    className={`${staggerChildren ? "delay-300 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <Link to={"/liked_products"} onClick={closeMenu}>
                        <BiBookHeart className="text-[1.55rem] text-red-500/85 dark:text-red-400 min-[464px]:hidden ml-auto -mr-[0.1rem]" />
                    </Link>
                </li>
                <li
                    className={`${staggerChildren ? "delay-300 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <Link to={"/wishlist"} onClick={closeMenu}>
                        <BsBookmark className="text-[1.4rem] text-sky-500/85 dark:text-sky-400 min-[415px]:hidden mt-8 mb-5 ml-auto -mr-[0.1rem]" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
