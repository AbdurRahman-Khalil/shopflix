import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export const Category = ({ cat, index }) => {

    return (
        <motion.div
            className="rounded-xl border border-neutral-300 dark:border-neutral-800 max-w-full min-h-32"
            style={{
                backgroundImage: `url(${cat.catImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <Link to={cat.destination} className="text-neutral-100 text-[1.5rem] font-medium group flex justify-center items-center max-w-full min-h-full bg-neutral-900/75 hover:bg-neutral-900/0 rounded-xl duration-200 ease-in cursor-pointer">
                <span className="group-hover:scale-125 group-hover:opacity-0 duration-[250ms] ease-in">
                    {cat.catName}
                </span>
            </Link>
        </motion.div>
    );
};
