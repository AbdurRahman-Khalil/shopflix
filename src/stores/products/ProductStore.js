import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";
import productsData from "./ProductData";

// import axios from "axios";
// import toast from "react-hot-toast";



const productStore = () => ({

    products: productsData,

    // fetchLoading: false,
    // fetchError: null,

    // addLoading: false,
    // addError: null,

    // deleteLoading: false,
    // deleteError: null,

    // ratingError: null,

    // reviewAdding: false,
    // reviewError: null,

    // reviewsFetching: false,
    // reviewsError: null,


    // // Actions
    // fetchBooks: async () => {
    //     set({ fetchLoading: true, fetchError: null });

    //     const API_URL = "http://localhost:5000/api";

    //     try {
    //         const response = await axios.get(API_URL);

    //         set(() => ({
    //             books: response.data.allBooks,
    //             fetchLoading: false
    //         }));

    //     } catch (err) {
    //         console.error(err);
    //         set({ fetchError: err.message || "Failed to Fetch books", fetchLoading: false });
    //     }
    // },

    // addBook: async (book) => {
    //     set({ addLoading: true, addError: null });

    //     const API_URL = "http://localhost:5000/api/list_book";

    //     try {
    //         await axios.post(API_URL, book);

    //         set((state) => ({
    //             books: [book, ...state.books],
    //             addLoading: false
    //         }));
    //         toast.success("Book Listed successfully!");

    //     } catch (err) {
    //         console.error(err);
    //         set({ addError: err.message || "Failed to List the book", addLoading: false });
    //         toast.error("Failed to List the book");
    //     }
    // },

    // deleteBook: async (bookId, userId) => {
    //     set({ deleteLoading: true, deleteError: null });

    //     const API_URL = `http://localhost:5000/api/delete_book/${bookId}/${userId}`;

    //     try {
    //         await axios.delete(API_URL);

    //         set((state) => ({
    //             books: state.books.filter((b) => (b.id || b._id) !== bookId),
    //             deleteLoading: false
    //         }));
    //         toast.success("Book Deleted successfully!");

    //     } catch (err) {
    //         console.error(err);
    //         set({ deleteError: err.message || "Failed to Delete the book", deleteLoading: false });
    //         toast.error("Failed to Delete the book");
    //     }
    // },

    // addRating: async (rating) => {
    //     // set({ ratingError: null });
    //     const { bookId, ...actualRating } = rating;

    //     const API_URL = "http://localhost:5000/api/add_rating";

    //     try {
    //         await axios.post(API_URL, { rating });

    //         set((state) => ({
    //             books: state.books.map((b) =>
    //                 (b.id || b._id) === bookId
    //                     ? {
    //                         ...b,
    //                         usersRatings: [actualRating, ...(b.usersRatings || [])],
    //                         bookRating: [actualRating, ...(b.usersRatings || [])]
    //                             .reduce((a, c) => a + c.rating, 0) / ((b.usersRatings || []).length + 1)
    //                     }
    //                     : b
    //             ),
    //         }));

    //     } catch (err) {
    //         console.error(err);
    //         // set({ ratingError: JSON.stringify(err.message, null, 2) || "Failed to Rate the Book" });
    //     }
    // },

    // fetchRatings: async (bookId) => {

    //     const API_URL = `http://localhost:5000/api/get_ratings/${bookId}`;

    //     try {
    //         const response = await axios.get(API_URL);
    //         const updatedRatings = response.data.usersRatings.reverse();

    //         set((state) => ({
    //             books: state.books.map((b) =>
    //                 (b.id || b._id) === bookId
    //                     ? { ...b, usersRatings: updatedRatings }
    //                     : b
    //             ),
    //         }));

    //     } catch (err) {
    //         console.error('Failed to fetch updated Ratings:', err);
    //     }
    // },

    // addReview: async (review) => {
    //     set({ reviewAdding: true, reviewError: null });

    //     const { bookId, ...actualReview } = review;

    //     const API_URL = "http://localhost:5000/api/add_review";

    //     try {
    //         await axios.post(API_URL, { review });

    //         set((state) => ({
    //             books: state.books.map((b) =>
    //                 (b.id || b._id) === bookId
    //                     ? {
    //                         ...b,
    //                         reviews: [actualReview, ...(b.reviews || [])]
    //                     }
    //                     : b
    //             ),
    //             reviewAdding: false
    //         }));

    //     } catch (err) {
    //         console.error(err);
    //         set({ reviewError: err.message || "Failed to add a Review", reviewAdding: false });
    //     }
    // },

    // fetchReviews: async (bookId) => {
    //     set({ reviewsFetching: true, reviewsError: null });

    //     const API_URL = `http://localhost:5000/api/get_reviews/${bookId}`;

    //     try {
    //         const response = await axios.get(API_URL);
    //         const updatedReviews = response.data.reviews.reverse();

    //         set((state) => ({
    //             books: state.books.map((b) =>
    //                 (b.id || b._id) === bookId
    //                     ? { ...b, reviews: updatedReviews }
    //                     : b
    //             ),
    //             reviewsFetching: false
    //         }));

    //     } catch (err) {
    //         console.error(err);
    //         set({ reviewsError: err.message || "Failed to fetch updated Reviews", reviewsFetching: false });
    //     }
    // },

});


const useProductStore = create(
    devtools(productStore,
        persist(productStore, {
            name: "products",
            // partialize: (state) => ({
            //     products: state.products
            // }),
        })
    )
);

export default useProductStore;