import { AnimatePresence, motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { Product } from "../../components/products/Product";


export const All = () => {
    const products = useProductStore((state) => state.products);

    const shuffledProducts = products.sort(() => Math.random() - 0.5);


    return (
        <motion.section layout id="all-products" className="grid grid-cols-4 gap-3">
            <AnimatePresence>
                {shuffledProducts.map(prod => (
                    <Product key={prod.id} prod={prod} />
                ))}
            </AnimatePresence>
        </motion.section>
    );
};
