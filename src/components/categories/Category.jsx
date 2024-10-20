
// export const Category = ({ cat }) => {
//     return (
//         <div
//             className="rounded-xl border max-w-full min-h-32"
//             style={{
//                 backgroundImage: `url(${cat.catImg})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//             }}>
//             <p className="text-neutral-100 text-[1.6rem] font-medium group flex justify-center items-center max-w-full min-h-full bg-neutral-900/75 hover:bg-neutral-900/0 rounded-xl duration-200 ease-in cursor-pointer">
//                 <span className="group-hover:scale-125 group-hover:opacity-0 duration-200 ease-in">
//                     {cat.catName}
//                 </span>
//             </p>
//         </div>
//     );
// };



import { motion } from "framer-motion";


export const Category = ({ cat }) => {
    // Animation for each individual category
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.6 }, // Start off the screen (below)
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeIn" }, // Animate to visible and at correct position
        },
    };

    return (
        <motion.div
            className="rounded-xl border border-neutral-300 max-w-full min-h-32"
            style={{
                backgroundImage: `url(${cat.catImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            variants={itemVariants} // Animate each category item based on the container's stagger
        >
            <p className="text-neutral-100 text-[1.6rem] font-medium group flex justify-center items-center max-w-full min-h-full bg-neutral-900/75 hover:bg-neutral-900/0 rounded-xl duration-200 ease-in cursor-pointer">
                <span className="group-hover:scale-125 group-hover:opacity-0 duration-200 ease-in">
                    {cat.catName}
                </span>
            </p>
        </motion.div>
    );
};
