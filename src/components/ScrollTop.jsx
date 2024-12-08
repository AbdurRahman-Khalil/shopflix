import { useState, useEffect } from 'react';

import { IoIosArrowRoundUp } from "react-icons/io";



export const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 text-[1.9rem] text-sky-900 dark:text-sky-100 px-1 py-2 bg-sky-400/40 dark:bg-sky-400/45 backdrop-blur-lg shadow-2xl border-2 border-sky-400/70 dark:border-sky-400 rounded-full 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transform transition-all duration-900 ease-in-out
                `}
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }} // Prevent clicking when hidden
        >
            <IoIosArrowRoundUp />
        </button>
    );
};
