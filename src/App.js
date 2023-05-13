import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
