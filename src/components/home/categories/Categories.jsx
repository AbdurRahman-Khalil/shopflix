import { SectionHead } from "../../SectionHead";
import { Category } from "./Category";

import watches from "../../../assets/category/watches.jpg";
import mobiles from "../../../assets/category/mobiles.webp";
import shoes from "../../../assets/category/shoes.jpg";
import glasses from "../../../assets/category/glasses.jpg";
import hoodies from "../../../assets/category/hoodies.jpg";
import laptops from "../../../assets/category/laptops.webp";



const categoriesData = [
    {
        id: 1,
        catName: "Watches",
        catImg: watches,
        destination: "/products/watches"
    },
    {
        id: 2,
        catName: "Mobiles",
        catImg: mobiles,
        destination: "/products/mobiles"
    },
    {
        id: 3,
        catName: "Shoes",
        catImg: shoes,
        destination: "/products/shoes"
    },
    {
        id: 4,
        catName: "Glasses",
        catImg: glasses,
        destination: "/products/glasses"
    },
    {
        id: 5,
        catName: "Hoodies",
        catImg: hoodies,
        destination: "/products/hoodies"
    },
    {
        id: 6,
        catName: "Laptops",
        catImg: laptops,
        destination: "/products/laptops"
    },
];


export const Categories = () => {

    return (
        <div id="categories" className="px-5 md:px-10 xl:mx-auto xl:container duration-200 ease-linear">
            {/* <h2 className="text-[2rem] text-neutral-800 dark:text-neutral-100 font-semibold dark:font-medium mb-10 relative after:absolute after:-bottom-1.5 after:left-0 after:bg-neutral-800 dark:after:bg-neutral-100 after:h-[0.2rem] after:w-[6.5rem] after:rounded-full">
                Top Category
            </h2> */}
            <SectionHead
                headlineIcon={"✨"}
                headline={"Top Category"}
                subHeadline={"Explore Top Picks, Popular Choices and Must-Have Essentials"}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-2.5">
                {categoriesData.map((cat, index) => (
                    <Category key={cat.id} cat={cat} index={index} />
                ))}
            </div>
        </div>
    );
};