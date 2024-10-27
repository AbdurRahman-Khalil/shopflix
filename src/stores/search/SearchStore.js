import { create } from "zustand";

import { devtools } from "zustand/middleware";


const searchStore = (set) => ({
    searchQuery: "",

    updateSearchQuery: (searchQuery) => {
        set(() => (
            { searchQuery: searchQuery }
        ));
    },
});

const useSearchStore = create(
    devtools(searchStore)
);


export default useSearchStore;