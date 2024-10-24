import { Outlet } from "react-router-dom";

import { MenuLink } from "../../components/navbar/MenuLink";
import { Categories } from "../../components/categories/Categories";


export const Products = () => {
    return (
        <section id="products" className="mb-[3.75rem] px-5 md:px-10 xl:mx-auto xl:container">
            <Categories />
            <h2 className="text-[2rem] font-semibold mb-8 relative after:absolute after:-bottom-1.5 after:left-0 after:bg-neutral-800 after:h-[0.2rem] after:w-[6.5rem] after:rounded-full">
                Our Products
            </h2>
            <ul className="list-none max-[565px]:overflow-x-scroll">
                <div className="flex items-center gap-7 font-medium mb-5 ">
                    <MenuLink
                        destination={"/products/all"}
                        menuLinkText={"All"}
                        addStyles={"font-medium text-neutral-800/70"}
                        activeStyles={"text-neutral-950 font-semibold"}
                    />
                    <MenuLink
                        destination={"/products/watches"}
                        menuLinkText={"Watches"}
                        addStyles={"font-medium text-neutral-800/70"}
                        activeStyles={"text-neutral-950 font-semibold"}
                    />
                    <MenuLink
                        destination={"/products/mobiles"}
                        menuLinkText={"Mobiles"}
                        addStyles={"font-medium text-neutral-800/70"}
                        activeStyles={"text-neutral-950 font-semibold"}
                    />
                    <MenuLink
                        destination={"/products/shoes"}
                        menuLinkText={"Shoes"}
                        addStyles={"font-medium text-neutral-800/70"}
                        activeStyles={"text-neutral-950 font-semibold"}
                    />
                    <MenuLink
                        destination={"/products/glasses"}
                        menuLinkText={"Glasses"}
                        addStyles={"font-medium text-neutral-800/70"}
                        activeStyles={"text-neutral-950 font-semibold"}
                    />
                    <MenuLink
                        destination={"/products/hoodies"}
                        menuLinkText={"Hoodies"}
                        addStyles={"font-medium text-neutral-800/70"}
                        activeStyles={"text-neutral-950 font-semibold"}
                    />
                    <MenuLink
                        destination={"/products/laptops"}
                        menuLinkText={"Laptops"}
                        addStyles={"font-medium text-neutral-800/70"}
                        activeStyles={"text-neutral-950 font-semibold"}
                    />
                </div>
            </ul>

            <Outlet />

        </section>
    );
};



