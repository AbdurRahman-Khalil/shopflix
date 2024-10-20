import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Category } from "./Category";

import watches from "../../assets/category/watches.jpg";
import hats from "../../assets/category/hats.webp";
import shoes from "../../assets/category/shoes.jpg";
import glasses from "../../assets/category/glasses.jpg";
import hoodies from "../../assets/category/hoodies.jpeg";
import tshirts from "../../assets/category/tshirts.png";



const categoriesData = [
    {
        id: 1,
        catName: "Watches",
        catImg: watches
    },
    {
        id: 2,
        catName: "Hats",
        catImg: hats
    },
    {
        id: 3,
        catName: "Shoes",
        catImg: shoes
    },
    {
        id: 4,
        catName: "Glasses",
        catImg: glasses
    },
    {
        id: 5,
        catName: "Hoodies",
        catImg: hoodies
    },
    {
        id: 6,
        catName: "T Shirts",
        catImg: tshirts
    },
];


// export const Categories = () => {
//     return (
//         <section id="categories" className="my-[3.75rem] px-5 md:px-10 xl:mx-auto xl:container">
//             <h2 className="text-[2rem] font-semibold mb-12 relative after:absolute after:-bottom-2 after:left-0 after:bg-neutral-800 after:h-[0.2rem] after:w-[6.5rem] after:rounded-full">Top Category</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-2.5">
//                 {categoriesData.map((cat) => (
//                     <Category key={cat.id} cat={cat} />
//                 ))}
//             </div>
//         </section>
//     );
// };



export const Categories = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 }); // Trigger when 30% of the container is visible

    // Container variants to stagger child animations
    const containerVariants = {
        hidden: {}, // No initial animation for the container
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    return (
        <section
            id="categories"
            ref={ref}
            className="my-[3.75rem] px-5 md:px-10 xl:mx-auto xl:container"
        >
            <h2 className="text-[2rem] font-semibold mb-10 relative after:absolute after:-bottom-1.5 after:left-0 after:bg-neutral-800 after:h-[0.2rem] after:w-[6.5rem] after:rounded-full">
                Top Category
            </h2>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-2.5"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} // Animate children when the container is in view
            >
                {categoriesData.map((cat) => (
                    <Category key={cat.id} cat={cat} />
                ))}
            </motion.div>
        </section>
    );
};