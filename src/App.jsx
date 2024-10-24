import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";
import { Products } from "./pages/products/Products";
import { All } from "./pages/products/All";
import { Watches } from "./pages/products/Watches";
import { Mobiles } from "./pages/products/Mobiles";
import { Shoes } from "./pages/products/Shoes";
import { Glasses } from "./pages/products/Glasses";
import { Hoodies } from "./pages/products/Hoodies";
import { Laptops } from "./pages/products/Laptops";



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
            <Route path="/products/all" element={<All />} />
            <Route path="/products/watches" element={<Watches />} />
            <Route path="/products/mobiles" element={<Mobiles />} />
            <Route path="/products/shoes" element={<Shoes />} />
            <Route path="/products/glasses" element={<Glasses />} />
            <Route path="/products/hoodies" element={<Hoodies />} />
            <Route path="/products/laptops" element={<Laptops />} />
          </Route>
        </Routes>
      </main>

      <footer>

      </footer>
    </div>
  );
};
