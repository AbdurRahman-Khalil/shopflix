import { AnimatePresence, motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { Product } from "../../components/products/Product";


export const Glasses = () => {
    const products = useProductStore((state) => state.products);

    const glassesData = products.filter((product) => product.category === "Glasses");


    return (
        <motion.section layout id="glasses" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.2rem] sm:gap-[0.85rem] min-[850px]:gap-[0.95rem] lg:gap-[0.85rem] xl:gap-[0.82rem]">
            <AnimatePresence>
                {glassesData.map(glass => (
                    <Product key={glass.id} prod={glass} />
                ))}
            </AnimatePresence>
        </motion.section>


    );
};
