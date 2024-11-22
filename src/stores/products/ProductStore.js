import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { toast } from "sonner";

import productsData from "./ProductData";


const productStore = (set, get) => ({

    products: productsData,

    cart: [],
    cartLength: 0,

    likedProducts: [],
    wishlist: [],


    // Actions
    addToCart: async (product) => {
        try {
            set((state) => {
                const existingProduct = state.cart.find((item) => item.id === product.id);
                if (existingProduct) {
                    return {
                        cart: state.cart.map((item) =>
                            item.id === product.id
                                ? {
                                    ...item,
                                    quantity: item.quantity + 1,
                                    totalPrice: item.totalPrice + item.price
                                }
                                : item
                        ),
                        cartLength: state.cartLength + 1,
                    };

                } else {
                    return {
                        cart: [product, ...state.cart],
                        cartLength: state.cartLength + 1,
                    };
                }
            });
            toast.success("Product added to cart successfully.");

        } catch (err) {
            console.error(err);
            toast.error("Failed to add Product to cart.");
        }
    },

    removeFromCart: async (productId) => {
        try {
            set((state) => {
                const productToRemove = state.cart.find((product) => product.id === productId);
                if (productToRemove) {
                    return {
                        cart: state.cart.filter((product) => product.id !== productId),
                        cartLength: state.cartLength - productToRemove.quantity, // Decrease cart length by the quantity of that removed item
                    };
                }
                return state;
            });
            toast.success("Product removed from cart successfully.");

        } catch (err) {
            console.error(err);
            toast.error("Failed to remove Product from cart.");
        }
    },

    increaseQuantity: (productId) => {
        try {
            set((state) => ({
                cart: state.cart.map((item) =>
                    item.id === productId
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                            totalPrice: item.totalPrice + item.price,
                        }
                        : item
                ),
                cartLength: state.cartLength + 1,
            }));

        } catch (err) {
            console.error(err);
            toast.error("Failed to increase quantity of the Product.");
        }
    },

    decreaseQuantity: (productId) => {
        try {
            set((state) => {
                const updatedCart = state.cart.map((item) =>
                    item.id === productId
                        ? {
                            ...item,
                            quantity: Math.max(item.quantity - 1, 1),
                            totalPrice: item.quantity > 1
                                ? item.totalPrice - item.price
                                : item.totalPrice,
                        }
                        : item
                );

                const decreasedLength = state.cart.find((item) => item.id === productId)?.quantity > 1
                    ? state.cartLength - 1
                    : state.cartLength;

                return {
                    cart: updatedCart,
                    cartLength: decreasedLength, // Adjust cart length based on decreased quantity of that item
                };
            });

        } catch (err) {
            console.error(err);
            toast.error("Failed to decrease quantity of the Product.");
        }
    },

    totalCartPrice: () => {
        return get().cart.reduce(
            (total, item) => total + item.totalPrice, 0
        );
    },

    clearCart: () => {
        const isAtCheckout = window.location.pathname.includes("/checkout");

        try {
            set(() => ({
                cart: [],
                cartLength: 0,
            }));

            if (!isAtCheckout) {
                toast.success("Cart has been cleared successfully.");
            }

        } catch (err) {
            console.error(err);

            if (!isAtCheckout) {
                toast.error("Failed to clear cart.");
            }
        }
    },

    like: async (likedProduct) => {
        try {
            set((state) => ({
                likedProducts: [likedProduct, ...state.likedProducts],
                products: state.products.map((product) =>
                    product.id === likedProduct.id
                        ? { ...product, isLiked: true }
                        : product
                ),
            }));

        } catch (err) {
            console.error(err);
            toast.error("Failed to Like the Product.");
        }
    },

    disLike: async (productId) => {
        try {
            set((state) => ({
                likedProducts: state.likedProducts.filter((item) => item.id !== productId),
                products: state.products.map((product) =>
                    product.id === productId
                        ? { ...product, isLiked: false }
                        : product
                ),
            }));

        } catch (err) {
            console.error(err);
            toast.error("Failed to unLike the Product.");
        }
    },

    addToWishlist: async (wishlistedProduct) => {
        try {
            set((state) => ({
                wishlist: [wishlistedProduct, ...state.wishlist],
                products: state.products.map((product) =>
                    product.id === wishlistedProduct.id
                        ? { ...product, isWishlisted: true }
                        : product
                ),
            }));

        } catch (err) {
            console.error(err);
            toast.error("Failed to add the Product to Wishlist.");
        }
    },

    removeFromWishlist: async (productId) => {
        try {
            set((state) => ({
                wishlist: state.wishlist.filter((item) => item.id !== productId),
                products: state.products.map((product) =>
                    product.id === productId
                        ? { ...product, isWishlisted: false }
                        : product
                ),
            }));

        } catch (err) {
            console.error(err);
            toast.error("Failed to remove the Product from Wishlist.");
        }
    },

    addRating: async (rating, productId) => {
        try {
            set((state) => ({
                products: state.products.map((p) =>
                    p.id === productId
                        ? {
                            ...p,
                            usersRatings: [rating, ...(p.usersRatings || [])],
                            rating: [rating, ...(p.usersRatings || [])]
                                .reduce((a, c) => a + c.rating, 0) / ((p.usersRatings || []).length + 1)
                        }
                        : p
                ),
            }));

        } catch (err) {
            console.error(err);
            toast.error("Failed to rate the Product.");
        }
    },

});


const useProductStore = create(
    devtools(
        persist(productStore, {
            name: "products",
            partialize: (state) => ({
                products: state.products,
                cart: state.cart,
                cartLength: state.cartLength,
                likedProducts: state.likedProducts,
                wishlist: state.wishlist,
            })
        })
    )
);

export default useProductStore;




