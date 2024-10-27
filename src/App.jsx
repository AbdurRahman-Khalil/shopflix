import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";
import { Products } from "./pages/Products";
import { ProductsSection } from "./components/products/ProductsSection";



export const App = () => {

  return (
    <div className="wrapper font-montserrat">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />}>
            <Route path={"/products/:category"} element={<ProductsSection />} />
          </Route>
        </Routes>
      </main>

      <footer>

      </footer>
    </div>
  );

};
