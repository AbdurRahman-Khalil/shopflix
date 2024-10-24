import { AnimatePresence, motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { Product } from "../../components/products/Product";


export const Hoodies = () => {
    const products = useProductStore((state) => state.products);

    const hoodiesData = products.filter((product) => product.category === "Hoodies");


    return (
        <motion.section layout id="hoodies" className="grid grid-cols-4 gap-3">
            <AnimatePresence>
                {hoodiesData.map(hoodie => (
                    <Product key={hoodie.id} prod={hoodie} />
                ))}
            </AnimatePresence>
        </motion.section>
    );
};



