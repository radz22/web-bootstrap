import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product1" element={<Product1 />} />
            <Route path="/product2" element={<Product2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
