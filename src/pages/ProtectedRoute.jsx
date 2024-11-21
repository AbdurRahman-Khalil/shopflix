import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

import useProductStore from "../stores/products/ProductStore";



export const ProtectedRoute = ({ children }) => {
    const cartLength = useProductStore((state) => state.cartLength);

    if (cartLength < 1) {
        toast.dismiss();
        toast('Your cart is empty! Do some shopping.', {
            duration: 3500,
            icon: '😊',
            style: {
                background: '#eab308',
                color: '#fefce8',
            },
        });

        // Redirect the user
        return <Navigate to="/products/all" replace />;
    }

    return children;
};


