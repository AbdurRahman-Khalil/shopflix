import { AnimatePresence, motion } from "framer-motion";

import { Navigate, useParams } from "react-router-dom";

import useProductStore from "../../stores/products/ProductStore";
import useSearchStore from "../../stores/search/SearchStore";

import searchProducts from "../../utils/searchProducts";
import filterProducts from "../../utils/filterProducts";

import { Product } from "../products/Product";



export const ProductsSection = () => {
    const products = useProductStore((state) => state.products);
    const searchQuery = useSearchStore((state) => state.searchQuery);

    const { category } = useParams();
    

    // To allow only specified categories
    const allowedCategories = ["all", "watches", "mobiles", "shoes", "glasses", "hoodies", "laptops", "liked", "wishlisted"];

    // Checking if the category is valid
    if (!allowedCategories.includes(category)) {
        return <Navigate to="/products/all" replace />; // Redirecting to "all" if category is invalid
    }


    // Convert category to title case for consistency & better readability
    const titleCaseCategory = category && category !== "all"
        ? category.replace(/-/g, ' ').replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
        : null;


    const searchedProducts = searchProducts(products, searchQuery);

    // Category filter will apllied only if a specific category is chosen; otherwise, keep all products matching the search query
    const filteredProducts = titleCaseCategory ? filterProducts(searchedProducts, titleCaseCategory) : searchedProducts;


    return (
        <motion.section id={category} layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.2rem] sm:gap-[0.85rem] min-[850px]:gap-[0.95rem] lg:gap-[0.85rem] xl:gap-[0.82rem]">
            <AnimatePresence>
                {
                    filteredProducts.map((product) => (
                        <Product key={product.id} prod={product} />
                    ))
                }
            </AnimatePresence>
        </motion.section>
    );
};
