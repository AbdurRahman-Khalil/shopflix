import { AnimatePresence, motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { Product } from "../../components/products/Product";


export const Watches = () => {
    const products = useProductStore((state) => state.products);

    const watchesData = products.filter((product) => product.category === "Watches");


    return (
        <motion.section layout id="watches" className="grid grid-cols-4 gap-3">
            <AnimatePresence>
                {watchesData.map(watch => (
                    <Product key={watch.id} prod={watch} />
                ))}
            </AnimatePresence>
        </motion.section>
    );
};
