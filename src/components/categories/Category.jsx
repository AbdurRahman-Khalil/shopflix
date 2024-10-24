import { motion } from "framer-motion";
import { Link } from "react-router-dom";


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
            variants={itemVariants}
        >
            <Link to={cat.destination} className="text-neutral-100 text-[1.5rem] font-medium group flex justify-center items-center max-w-full min-h-full bg-neutral-900/75 hover:bg-neutral-900/0 rounded-xl duration-200 ease-in cursor-pointer">
                <span className="group-hover:scale-125 group-hover:opacity-0 duration-200 ease-in">
                    {cat.catName}
                </span>
            </Link>
        </motion.div>
    );
};
