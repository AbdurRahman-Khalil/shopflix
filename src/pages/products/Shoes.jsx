import { AnimatePresence, motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { Product } from "../../components/products/Product";


export const Shoes = () => {
    const products = useProductStore((state) => state.products);

    const shoesData = products.filter((product) => product.category === "Shoes");


    return (
        <motion.section layout id="glasses" className="grid grid-cols-4 gap-3">
            <AnimatePresence>
                {shoesData.map(shoe => (
                    <Product key={shoe.id} prod={shoe} />
                ))}
            </AnimatePresence>
        </motion.section>
    );
};

