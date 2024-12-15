import CategoryPage from "../../components/Category-page";

export const graphicsCards = [
  {
    id: 1,
    name: "NVIDIA GeForce RTX 3080",
    price: 89999,
    image: "https://m.media-amazon.com/images/I/81lBqpfoncS.jpg",
    path: "graphics-cards",
  },
  {
    id: 2,
    name: "AMD Radeon RX 6800 XT",
    price: 79999,
    image: "https://m.media-amazon.com/images/I/711fGYMXTlL.jpg",
    path: "graphics-cards",
  },
  {
    id: 3,
    name: "NVIDIA GeForce RTX 3070",
    price: 69999,
    image: "https://m.media-amazon.com/images/I/61+aEAi70wS.jpg",
    path: "graphics-cards",
  },
  {
    id: 4,
    name: "AMD Radeon RX 6700 XT",
    price: 59999,
    image: "https://m.media-amazon.com/images/I/81L7-qPS0ZL._AC_UF1000,1000_QL80_.jpg",
    path: "graphics-cards",
  },
];

export default function GraphicsCardsPage() {
  return <CategoryPage categoryName="Видеокарты" products={graphicsCards} />;
}
