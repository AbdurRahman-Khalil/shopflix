import { Link } from "react-router-dom";

import useProductStore from "../../../stores/products/ProductStore";

import shuffleArray from "../../../utils/shuffleArray";

import { SectionHead } from "../../SectionHead";
import { TrendingProduct } from "./TrendingProduct";

import { IoIosArrowRoundForward } from "react-icons/io";



export const TrendingProducts = () => {
    const products = useProductStore((state) => state.products);

    const recentOnes = shuffleArray(products).slice(0, 10);


    return (
        <section
            id="recent_products"
            className="px-5 md:px-10 xl:mx-auto xl:container duration-200 ease-linear"
        >
            <SectionHead
                headlineIcon={"⚡"}
                headline={"Trending Products"}
                subHeadline={"Discover the hottest products everyone's talking about"}
            />
            <div className="grid grid-cols-1 gap-[1.15rem] min-[340px]:gap-[0.8rem] min-[340px]:grid-cols-2 min-[420px]:gap-[0.935rem] min-[620px]:grid-cols-3 min-[859px]:grid-cols-4 min-[1060px]:grid-cols-5 min-[1700px]:grid-cols-6">
                {
                    recentOnes.map((item, index) => (
                        <TrendingProduct key={item.id} item={item} index={index} />
                    ))
                }
            </div>
            <Link to={"/products/all"} className="group max-w-fit mx-auto flex items-center gap-1.5 bg-rose-400/20 dark:bg-rose-400/10 border-2 border-rose-400 mt-6 px-3.5 py-2.5 rounded-xl">
                <p className="text-rose-950 dark:text-rose-100 text-[0.95rem] font-medium dark:font-light dark:tracking-wide">Explore more</p>
                <IoIosArrowRoundForward className="text-rose-500 dark:text-rose-400 text-2xl group-hover:translate-x-[0.33rem] transition-transform duration-200 ease-linear" />
            </Link>
        </section>
    );
};




