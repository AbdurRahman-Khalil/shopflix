import { Outlet } from "react-router-dom";

import { MenuLink } from "../components/navbar/MenuLink";
import { Categories } from "../components/categories/Categories";
import { SearchBar } from "../components/SearchBar";


export const Products = () => {
    return (
        <section id="products" className="mb-[3.75rem] px-5 md:px-10 xl:mx-auto xl:container">
            <Categories />
            <h2 className="text-[2rem] text-neutral-800 dark:text-neutral-100 font-semibold dark:font-medium mb-[2.35rem] relative after:absolute after:-bottom-1 after:left-0 after:bg-neutral-800 dark:after:bg-neutral-100 after:h-[0.2rem] after:w-[6.5rem] after:rounded-full">
                Our Products
            </h2>
            <ul className="list-none max-[877px]:relative 
                    max-[877px]:before:absolute before:top-16 before:-right-[0.2rem] before:w-[1.3rem] before:h-[35%] before:bg-gradient-to-r before:from-transparent before:to-neutral-50 dark:before:to-neutral-900
                    max-[877px]:after:absolute after:top-16 after:-left-[0.2rem] after:w-[1.3rem] after:h-[35%] after:bg-gradient-to-l after:from-transparent after:to-neutral-50 dark:after:to-neutral-900"
            >
                <SearchBar />
                <div className="max-[877px]:overflow-x-scroll">
                    <div className="flex items-center gap-7 font-medium my-[1.35rem]">
                        <MenuLink
                            destination={"/products/all"}
                            menuLinkText={"All"}
                            addStyles={"font-medium dark:font-light text-neutral-800/70 dark:text-neutral-100/70 max-[877px]:pl-2 min-[878px]:pl-0.5"}
                            activeStyles={"text-neutral-950 dark:text-neutral-50 font-semibold dark:font-medium"}
                        />
                        <MenuLink
                            destination={"/products/watches"}
                            menuLinkText={"Watches"}
                            addStyles={"font-medium dark:font-light text-neutral-800/70 dark:text-neutral-100/70"}
                            activeStyles={"text-neutral-950 dark:text-neutral-50 font-semibold dark:font-medium"}
                        />
                        <MenuLink
                            destination={"/products/mobiles"}
                            menuLinkText={"Mobiles"}
                            addStyles={"font-medium dark:font-light text-neutral-800/70 dark:text-neutral-100/70"}
                            activeStyles={"text-neutral-950 dark:text-neutral-50 font-semibold dark:font-medium"}
                        />
                        <MenuLink
                            destination={"/products/shoes"}
                            menuLinkText={"Shoes"}
                            addStyles={"font-medium dark:font-light text-neutral-800/70 dark:text-neutral-100/70"}
                            activeStyles={"text-neutral-950 dark:text-neutral-50 font-semibold dark:font-medium"}
                        />
                        <MenuLink
                            destination={"/products/glasses"}
                            menuLinkText={"Glasses"}
                            addStyles={"font-medium dark:font-light text-neutral-800/70 dark:text-neutral-100/70"}
                            activeStyles={"text-neutral-950 dark:text-neutral-50 font-semibold dark:font-medium"}
                        />
                        <MenuLink
                            destination={"/products/hoodies"}
                            menuLinkText={"Hoodies"}
                            addStyles={"font-medium dark:font-light text-neutral-800/70 dark:text-neutral-100/70"}
                            activeStyles={"text-neutral-950 dark:text-neutral-50 font-semibold dark:font-medium"}
                        />
                        <MenuLink
                            destination={"/products/laptops"}
                            menuLinkText={"Laptops"}
                            addStyles={"font-medium dark:font-light text-neutral-800/70 dark:text-neutral-100/70"}
                            activeStyles={"text-neutral-950 dark:text-neutral-50 font-semibold dark:font-medium"}
                        />
                        <p className="font-bold dark:font-semibold ">|</p>
                        <MenuLink
                            destination={"/products/liked"}
                            menuLinkText={"Liked"}
                            addStyles={"font-medium dark:font-light text-neutral-800/70 dark:text-neutral-100/70"}
                            activeStyles={"text-neutral-950 dark:text-neutral-50 font-semibold dark:font-medium"}
                        />
                        <MenuLink
                            destination={"/products/wishlisted"}
                            menuLinkText={"Wishlisted"}
                            addStyles={"font-medium dark:font-light text-neutral-800/70 dark:text-neutral-100/70 max-[877px]:pr-2"}
                            activeStyles={"text-neutral-950 dark:text-neutral-50 font-semibold dark:font-medium"}
                        />
                    </div>
                </div>
            </ul>

            <Outlet />

        </section>
    );
};



