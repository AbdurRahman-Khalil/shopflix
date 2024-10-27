import useSearchStore from "../stores/search/SearchStore";

import { FiSearch } from "react-icons/fi";


export const SearchBar = () => {

    const searchQuery = useSearchStore((state) => state.searchQuery);
    const updateSearchQuery = useSearchStore((state) => state.updateSearchQuery);


    return (
        <form className={`flex -mt-[0.7rem] relative`}
            onSubmit={(e) => e.preventDefualt()}
        >
            <button className="absolute top-[0.85rem] left-[0.7rem]">
                <FiSearch className="text-[1.2rem] text-neutral-700" />
            </button>
            <input
                className="text-[0.9rem] pr-[0.8rem] pl-10 py-3 w-72 border-2 border-neutral-600/90 focus:border-neutral-300 outline-none rounded-lg font-semibold tracking-wide placeholder:font-medium placeholder:tracking-normal duration-200 ease-linear"
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






