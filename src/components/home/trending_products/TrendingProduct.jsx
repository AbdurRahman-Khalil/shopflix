import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import generateSlug from "../../../utils/generateSlug";
import genSmallCaseCategory from "../../../utils/genSmallCaseCategory";



export const TrendingProduct = ({ item, index }) => {

    const sluggedTitle = generateSlug(item.title);
    const smallCasedCategory = genSmallCaseCategory(item.category);

    return (
        <motion.div
            className="min-h-full rounded-2xl sm:rounded-xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <Link to={`/products/${smallCasedCategory}/${sluggedTitle}`}>
                <img src={item.image} className="max-w-full h-auto aspect-square object-cover object-center border border-neutral-900/20 dark:border-neutral-50/15 rounded-2xl sm:rounded-xl hover:scale-105 duration-[250ms] ease-in" alt="" />
            </Link>
            <div className="relative text-center px-3 pt-2 min-[420px]:pt-2.5 pb-3.5">
                <p
                    className="absolute min-[340px]:max-[419px]:-top-[2.7rem] -top-[3rem] right-0 left-0
                    text-neutral-800 min-[340px]:max-[419px]:text-[0.93rem] text-[1.05rem] font-medium tracking-wide
                    max-w-fit bg-neutral-50/35 backdrop-blur-[6px] px-3 py-1.5 mx-auto rounded-2xl"
                >
                    &#x24;<span className="ml-[0.1rem]">{item.price}</span>
                </p>
                <Link to={`/products/${smallCasedCategory}/${sluggedTitle}`}>
                    <p className="flex-1 min-[340px]:max-[419px]:text-[1.1rem] text-[1.25rem] font-semibold dark:font-medium tracking-wide min-[340px]:max-[419px]:leading-[1.5rem] leading-[1.65rem] line-clamp-2">{item.title}</p>
                </Link>
            </div>
        </motion.div>
    );
};