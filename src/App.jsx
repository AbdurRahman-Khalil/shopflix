import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";
import { Products } from "./pages/Products";
import { ProductsSection } from "./components/products/ProductsSection";
import { Cart } from "./pages/Cart";



export const App = () => {

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="wrapper font-montserrat">
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />}>
              <Route path="/products/:category" element={<ProductsSection />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <footer>
        
        </footer>
      </div>
    </>
  );

};
