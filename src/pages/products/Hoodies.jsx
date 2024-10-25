import { AnimatePresence, motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { Product } from "../../components/products/Product";


export const Hoodies = () => {
    const products = useProductStore((state) => state.products);

    const hoodiesData = products.filter((product) => product.category === "Hoodies");


    return (
        <motion.section layout id="hoodies" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.2rem] sm:gap-[0.85rem] min-[850px]:gap-[0.95rem] lg:gap-[0.85rem] xl:gap-[0.82rem]">
            <AnimatePresence>
                {hoodiesData.map(hoodie => (
                    <Product key={hoodie.id} prod={hoodie} />
                ))}
            </AnimatePresence>
        </motion.section>
    );
};



