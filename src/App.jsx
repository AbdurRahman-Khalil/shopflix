import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Navbar } from "./components/navbar/Navbar";
import { Cart } from "./pages/Cart";
import { HomePage } from "./pages/HomePage";
import { ProductsSection } from "./components/products/ProductsSection";
import { Products } from "./pages/Products";
import { ProductPage } from "./pages/ProductPage";
import { LikedWishlistedProducts } from "./pages/LikedWishlistedProducts";



export const App = () => {

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={true} />
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

          </Routes>
        </main>

        <footer></footer>
      </div>
    </>
  );

};
