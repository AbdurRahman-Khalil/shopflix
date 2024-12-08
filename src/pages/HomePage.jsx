import { useEffect } from "react";

import { Hero } from "../components/home/Hero";
import { Categories } from "../components/home/categories/Categories";
import { TrendingProducts } from "../components/home/trending_products/TrendingProducts";
import { Newsletter } from "../components/home/Newsletter";



export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="homepage" className="space-y-[4rem]">
            <Hero />
            <Categories />
            <TrendingProducts />
            <Newsletter
                newsLetterHeading={"SUBSCRIBE TO OUR NEWSLETTER"}
                newsLetterParag={"Subscribe to receive our monthly newsletter and updates about Purpose Forward."}
                formPlaceholderText={"Enter your email here"}
            />
        </div>
    );
};
