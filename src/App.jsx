import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";
import { ProductsSection } from "./pages/ProductsSection";
import { Products } from "./pages/Products";
import { ProductPage } from "./pages/ProductPage";
import { LikedWishlistedProducts } from "./pages/LikedWishlistedProducts";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { ProtectedRoute } from "./pages/ProtectedRoute";



export const App = () => {
  const succesToast = {
    duration: 2200,
    style: {
      background: '#0ea5e9',
      color: '#f0f9ff',
      border: '2px solid #bae6fd',
    },
    iconTheme: {
      primary: '#bae6fd',
      secondary: '#0ea5e9',
    },
  }

  const errorToast = {
    duration: 2200,
    style: {
      background: '#ef4444',
      color: '#fef2f2',
      border: '2px solid #fecaca',
    },
    iconTheme: {
      primary: '#fecaca', // fg
      secondary: '#ef4444', // bg
    },
  }


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: succesToast,
          error: errorToast,
        }}
      />
      <div className="wrapper font-montserrat bg-sk">
        <header>
          <Navbar />
        </header>

        <main className="overflow-hidden">
          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/products" element={<Products />}>
              <Route path="/products/:category" element={<ProductsSection />} />
            </Route>

            <Route path="/products/:category/:slug" element={<ProductPage />} />

            <Route path="/liked_products" element={<LikedWishlistedProducts />} />
            <Route path="/wishlist" element={<LikedWishlistedProducts />} />

            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />

          </Routes>
        </main>

        <footer></footer>
      </div>
    </>
  );

};
