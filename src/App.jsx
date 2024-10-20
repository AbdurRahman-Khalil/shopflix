import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";



export const App = () => {
  return (
    <div className="wrapper font-montserrat">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/shopflix/" element={<HomePage />}></Route>
          
        </Routes>
      </main>

      <footer>

      </footer>
    </div>
  );
};
