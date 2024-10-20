import { NavLink } from "react-router-dom";

export const Products = () => {
    return (
        <section className="mb-[3.75rem] px-5 md:px-10 xl:mx-auto xl:container">
            <h2 className="text-[2rem] font-semibold mb-10 relative after:absolute after:-bottom-1.5 after:left-0 after:bg-neutral-800 after:h-[0.2rem] after:w-[6.5rem] after:rounded-full">
                Our Products
            </h2>
            <ul className="flex items-center gap-7 font-medium list-none">
                <li>All</li>
                <li>Watches</li>
                <li>Hats</li>
                <li>Shoes</li>
                <li>Glasses</li>
                <li>Hoodies</li>
                <li>T Shirts</li>
            </ul>

        </section>
    );
};
