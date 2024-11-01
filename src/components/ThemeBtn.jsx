import { useEffect } from "react";

import useThemeStore from "../stores/theme/ThemeStore";

import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";



export const ThemeBtn = ({ hideSeek }) => {
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
            className={`${hideSeek} duration-200 ease-linear`}
            onClick={handleTheme}
        >
            {
                theme === "light"
                    ? <IoSunny className="text-amber-500/85 text-[1.5rem]" />
                    : <BsMoonStarsFill className="text-[1.25rem]" />
            }
        </button>
    );
};
