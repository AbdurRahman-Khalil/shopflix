import { AnimatePresence, motion } from "framer-motion";

import useProductStore from "../../stores/products/ProductStore";

import { Product } from "../../components/products/Product";


export const Laptops = () => {
    const products = useProductStore((state) => state.products);

    const laptopsData = products.filter((product) => product.category === "Laptops");


    return (
        <motion.section layout id="laptops" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.2rem] sm:gap-[0.85rem] min-[850px]:gap-[0.95rem] lg:gap-[0.85rem] xl:gap-[0.82rem]">
            <AnimatePresence>
                {laptopsData.map(laptop => (
                    <Product key={laptop.id} prod={laptop} />
                ))}
            </AnimatePresence>
        </motion.section>
    );
};



