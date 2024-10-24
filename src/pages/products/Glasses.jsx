import { AnimatePresence, motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { Product } from "../../components/products/Product";


export const Glasses = () => {
    const products = useProductStore((state) => state.products);

    const glassesData = products.filter((product) => product.category === "Glasses");


    return (
        <motion.section layout id="glasses" className="grid grid-cols-4 gap-3">
            <AnimatePresence>
                {glassesData.map(glass => (
                    <Product key={glass.id} prod={glass} />
                ))}
            </AnimatePresence>
        </motion.section>


    );
};
