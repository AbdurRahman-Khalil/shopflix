import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { NavbarLink } from "./NavbarLink";

import { CgMenuLeftAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";



export const Navbar = () => {
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
            <Link to={"/"} className="text-[2.4rem] sm:text-[2.5rem] font-bold z-20">
                Shopflix
            </Link>

            {/* Larger screens */}
            <ul className="hidden md:flex items-center gap-10">
                <NavbarLink destination={"/"} navbarLinkText={"Home"} />
                <NavbarLink destination={"/products"} navbarLinkText={"Products"} />
                <NavbarLink destination={"/about"} navbarLinkText={"About"} />
                <NavbarLink destination={"/contact"} navbarLinkText={"Contact"} />
            </ul>

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
                className={`space-y-5 w-full text-end ${isMenuOpen
                    ? "opacity-100 translate-y-0 duration-300 ease-in-out"
                    : "opacity-0 -translate-y-5 pointer-events-none"
                    } transition-all duration-300 ease-in-out absolute top-[4.5rem] right-0 bg-neutral-50 shadow-lg rounded-md px-5 py-7 md:hidden`}
            >
                <li
                    className={`${staggerChildren ? "delay-400 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <NavbarLink destination={"/shopflix/"} navbarLinkText={"Home"} />
                </li>
                <li
                    className={`${staggerChildren ? "delay-100 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <NavbarLink destination={"/shopflix//products"} navbarLinkText={"Products"} />
                </li>
                <li
                    className={`${staggerChildren ? "delay-200 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <NavbarLink destination={"/shopflix//about"} navbarLinkText={"About"} />
                </li>
                <li
                    className={`${staggerChildren ? "delay-300 opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                        } transition duration-300`}
                >
                    <NavbarLink destination={"/shopflix//contact"} navbarLinkText={"Contact"} />
                </li>
            </ul>
        </nav>
    );
};
