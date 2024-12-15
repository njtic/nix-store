import { Routes, Route } from "react-router";
import Home from "./Home";
import RoutersPage from "./category/routers/page";
import RamPage from "./category/ram/page";
import ProcessorsPage from "./category/processors/page";
import PowerSuppliesPage from "./category/power-supplies/page";
import GraphicsCardsPage from "./category/graphics-card/page";
import ProcessorDescription from "./category/processors/description";
import GraphicsDescription from "./category/graphics-card/description";
import RamDescription from "./category/ram/description";
import PowerDescription from "./category/power-supplies/description";
import RoutersDescription from "./category/routers/description";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="routers" element={<RoutersPage />} />
      <Route path="ram" element={<RamPage />} />
      <Route path="graphics-cards" element={<GraphicsCardsPage />} />
      <Route path="power-supplies" element={<PowerSuppliesPage />} />
      <Route path="processors" element={<ProcessorsPage />} />
      <Route
        path="processors-page"
        element={<ProcessorDescription  />}
      />
      <Route
        path="graphics-cards-page"
        element={<GraphicsDescription  />}
      />
       <Route
        path="ram-page"
        element={<RamDescription  />}
      />
       <Route
        path="power-supplies-page"
        element={<PowerDescription  />}
      />
       <Route
        path="routers-page"
        element={<RoutersDescription  />}
      />
    </Routes>
  );
}
export default App;
