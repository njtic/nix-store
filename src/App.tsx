import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Home";
import RoutersPage from "./category/routers/page";
import RamPage from "./category/ram/page";
import ProcessorsPage from "./category/processors/page";
import PowerSuppliesPage from "./category/power-supplies/page";
import GraphicsCardsPage from "./category/graphics-card/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="routers" element={<RoutersPage />} />
      <Route path="ram" element={<RamPage />} />
      <Route path="graphics-cards" element={<GraphicsCardsPage />} />
      <Route path="power-supplies" element={<PowerSuppliesPage />} />
      <Route path="processors" element={<ProcessorsPage />} />
    </Routes>
  );
}
export default App;
