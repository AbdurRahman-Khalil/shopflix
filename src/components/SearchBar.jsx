import useSearchStore from "../stores/search/SearchStore";

import { FiSearch } from "react-icons/fi";


export const SearchBar = () => {

    const searchQuery = useSearchStore((state) => state.searchQuery);
    const updateSearchQuery = useSearchStore((state) => state.updateSearchQuery);


    return (
        <form className={`relative`}
            onSubmit={(e) => e.preventDefualt()}
        >
            <button className="absolute top-[0.9rem] left-[0.73rem] duration-200 ease-linear">
                <FiSearch className="text-[1.275rem] text-neutral-700 dark:text-neutral-300" />
            </button>
            <input
                className="text-[0.93rem] pr-[0.83rem] pl-[2.42rem] py-3 w-full sm:w-[23rem] bg-white dark:bg-black/20 border-2 border-neutral-600/90 dark:border-neutral-400 focus:border-neutral-400/60 dark:focus:border-neutral-600 outline-none rounded-lg font-semibold dark:font-medium tracking-wide placeholder:font-medium duration-200 ease-linear"
                type="text"
                name="searchQuery"
                id="searchQuery"
                placeholder="Search by title or price..."
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e.target.value)}
            />
        </form>
    );
};






