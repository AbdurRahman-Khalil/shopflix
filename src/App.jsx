import { Route, Routes, useLocation } from "react-router-dom";
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
import { NotFoundPage } from "./pages/NotFoundPage";
import { FooterContent } from "./components/footer/FooterContent";
import { ScrollTop } from "./components/ScrollTop";



export const App = () => {

  const location = useLocation();

  const isHomeOrCheckout = location.pathname === "/" || location.pathname === "/checkout";


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

            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </main>

        {isHomeOrCheckout && (
          <footer className="mt-[1.25rem] mb-[0.8rem] px-2 min-[346px]:px-3.5 duration-200 ease-linear">
            {/* <hr className="my-5 h-[0.17rem] bg-neutral-900/80 dark:bg-neutral-50" /> */}
            <FooterContent />
          </footer>
        )}
      </div>
      <ScrollTop />
    </>
  );

};
