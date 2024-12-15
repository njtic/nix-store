import CategoryPage from "../../components/Category-page";

export const powerSupplies = [
  {
    id: 1,
    name: "Corsair RM750x",
    price: 9999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2T4DogmbLcHN13aBe6HSdTw7_mJD5htqgXg&s",
      path: "power-supplies",
  },
  {
    id: 2,
    name: "EVGA SuperNOVA 650 G5",
    price: 7999,
    image: "https://m.media-amazon.com/images/I/71kHUt8km8L.jpg",
    path: "power-supplies",
  },
  {
    id: 3,
    name: "Seasonic Focus GX-550",
    price: 5999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaqjRgXNHTdgc7G30UvFfHL9JKenDosL9pA&s",
      path: "power-supplies",
  },
  {
    id: 4,
    name: "be quiet! Straight Power 11 850W",
    price: 12999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChFYzHZm5LdRogLcNI4CHUaqfRQNjW0Zrkw&s",
      path: "power-supplies",
  },
];

export default function PowerSuppliesPage() {
  return <CategoryPage categoryName="Блоки питания" products={powerSupplies} />;
}
