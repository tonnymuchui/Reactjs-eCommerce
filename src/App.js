import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="shop/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
