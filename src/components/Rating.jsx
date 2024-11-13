import { useState } from "react";

import useProductStore from "../stores/products/ProductStore";

import generateUserId from "../utils/generateUserId";
import formatDate from "../utils/formateDate";

import { FaStar, FaRegStar } from "react-icons/fa";



export const Rating = ({ productId, addStarStyles }) => {

    const addRating = useProductStore((state) => state.addRating);

    const [rating, setRating] = useState(null);

    const ratingId = generateUserId();
    const userId = generateUserId();
    const formattedDate = formatDate();

    const handleRating = async (currentRating) => {
        try {
            const newRating = {
                id: ratingId,
                userId: userId,
                rating: currentRating,
                ratingDate: formattedDate,
            };

            setRating(currentRating);

            await addRating(newRating, productId);

        } catch (err) {
            alert("An error occured: " + JSON.stringify(err.message, null, 2));
        }
    };


    return (
        <div className="flex items-center gap-[0.2rem] text-[#ffd700]">
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;

                return (
                    <label key={index}>
                        <input
                            className="hidden"
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => handleRating(currentRating)}
                        />
                        <span
                        >
                            {
                                currentRating <= rating
                                    ? <FaStar className={`${addStarStyles} cursor-pointer duration-200 ease-linear`} />
                                    : <FaRegStar className={`${addStarStyles} cursor-pointer duration-200 ease-linear`} />
                            }
                        </span>
                    </label>
                )
            })}
        </div>
    );
};






