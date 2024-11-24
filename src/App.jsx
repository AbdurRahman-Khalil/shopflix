import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

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

  return (
    <>
      <Toaster
        position="top-center"
        richColors
      />
      <div className="wrapper font-montserrat">
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
