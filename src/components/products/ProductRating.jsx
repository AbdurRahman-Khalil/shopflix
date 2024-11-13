import { FaStar, FaRegStar } from "react-icons/fa";


export const ProductRating = ({ ratings, addStarStyles }) => {

    return (
        <p className="flex items-center gap-[0.2rem] text-[#ffd700]">
            {[...Array(5)].map((star, index) => {
                const isFullStar = index < ratings;

                return (
                    <span key={index}>
                        {isFullStar ? (
                            <FaStar className={`${addStarStyles} duration-200 ease-linear`} />
                        ) : (
                            <FaRegStar className={`${addStarStyles} duration-200 ease-linear`} />
                        )}
                    </span>
                );
            })}
        </p>
    );
};