import { AnimatePresence, motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { Product } from "../../components/products/Product";


export const Laptops = () => {
    const products = useProductStore((state) => state.products);

    const laptopsData = products.filter((product) => product.category === "Laptops");


    return (
        <motion.section layout id="laptops" className="grid grid-cols-4 gap-3">
            <AnimatePresence>
                {laptopsData.map(laptop => (
                    <Product key={laptop.id} prod={laptop} />
                ))}
            </AnimatePresence>
        </motion.section>
    );
};



