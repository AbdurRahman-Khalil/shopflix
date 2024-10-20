import { useEffect } from "react";

import useThemeStore from "../stores/theme/ThemeStore";

import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";


export const ThemeBtn = () => {

    const { theme, darkTheme, lightTheme } = useThemeStore((state) => ({
        theme: state.theme,
        darkTheme: state.darkTheme,
        lightTheme: state.lightTheme
    }));

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
            className={`p-[0.8rem] duration-300 ease-linear`}
            onClick={handleTheme}
        >
            {theme === "light" ? <FiSun />: <BsMoonStars />}
        </button>
    );
};
