import { create } from "zustand";

import { devtools } from "zustand/middleware";


const themeStore = (set) => ({

    theme: "light",

    // Actions
    darkTheme: () => {
        set(() => (
            { theme: "dark" }
        ));
    },

    lightTheme: () => {
        set(() => (
            { theme: "light" }
        ));
    },

});


const useThemeStore = create(devtools(themeStore));

export default useThemeStore;