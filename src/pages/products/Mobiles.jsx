import { AnimatePresence, motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { Product } from "../../components/products/Product";


export const Mobiles = () => {
    const products = useProductStore((state) => state.products);

    const mobilesData = products.filter((product) => product.category === "Mobiles");


    return (
        <motion.section layout id="mobiles" className="grid grid-cols-4 gap-3">
            <AnimatePresence>
                {mobilesData.map(mobile => (
                    <Product key={mobile.id} prod={mobile} />
                ))}
            </AnimatePresence>
        </motion.section>
    );
};





