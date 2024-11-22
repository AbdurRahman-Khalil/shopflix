import { useEffect, useRef, useState } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

import useProductStore from "../stores/products/ProductStore";



export const ProtectedRoute = ({ children }) => {
    const cartLength = useProductStore((state) => state.cartLength);
    const [redirect, setRedirect] = useState(false);
    const hasShownToast = useRef(false); // Track if the toast has already been shown
    const location = useLocation();

    useEffect(() => {
        // Reset toast state when the route changes
        hasShownToast.current = false;
    }, [location]);

    if (cartLength < 1 && !hasShownToast.current) {
        toast.info('Your cart is empty! Do some shopping.');
        hasShownToast.current = true; // Mark toast as shown
        setTimeout(() => setRedirect(true), 100); // Delay navigation
    }

    if (redirect) {
        return <Navigate to="/products/all" replace />;
    }

    return children;

};


