import CategoryPage from "../../components/Category-page";

const graphicsCards = [
  {
    id: 1,
    name: "NVIDIA GeForce RTX 3080",
    price: 89999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "AMD Radeon RX 6800 XT",
    price: 79999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "NVIDIA GeForce RTX 3070",
    price: 69999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "AMD Radeon RX 6700 XT",
    price: 59999,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function GraphicsCardsPage() {
  return <CategoryPage categoryName="Видеокарты" products={graphicsCards} />;
}
