import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddProducts from "./pages/AddProducts";
import AddDealers from "./pages/AddDealers";
import ListDealers from "./pages/ListDealers";
import ListProducts from "./pages/ListProducts";
import Navbar from "./components/nav/Navbar";
import HomeAdmin from "./pages/HomeAdmin";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route path="/add-dealers" element={<AddDealers />} />
          <Route path="/list-dealers" element={<ListDealers />} />
          <Route path="/list-products" element={<ListProducts />} />
          <Route path="/home-admin" element={<HomeAdmin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
