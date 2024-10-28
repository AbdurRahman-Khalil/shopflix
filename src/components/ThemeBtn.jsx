import { useEffect } from "react";

import useThemeStore from "../stores/theme/ThemeStore";

import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { PiSunBold } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";



export const ThemeBtn = () => {
    const theme = useThemeStore((state) => state.theme);
    const darkTheme = useThemeStore((state) => state.darkTheme);
    const lightTheme = useThemeStore((state) => state.lightTheme);


    useEffect(() => {
        const htmlTree = document.querySelector("html");

        htmlTree.classList.remove("dark", "light");
        htmlTree.classList.add(theme);

    }, [theme]);

    const handleTheme = () => {
        theme === "light" ? darkTheme() : lightTheme();
    }


    return (
        <button
            className={`text-[1.3rem] dark:text-[1.15rem] p-[0.8rem] duration-200 ease-linear ml-auto mr-1.5 md:mx-0`}
            onClick={handleTheme}
        >
            {theme === "light" ? <IoSunny />: <BsMoonStarsFill />}
        </button>
    );
};
