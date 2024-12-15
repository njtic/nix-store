import CategoryPage from "../../components/Category-page";

const processors = [
  {
    id: 1,
    name: "Intel Core i9-11900K",
    price: 49999,
    image:
      "https://cdn.vox-cdn.com/thumbor/dFVkcKaKQVezqRZQPMdyGaKtdq0=/0x0:2640x1748/2000x1333/filters:focal(1320x874:1321x875)/cdn.vox-cdn.com/uploads/chorus_asset/file/22407555/intelcorei9_11900K_1.jpg",
  },
  {
    id: 2,
    name: "AMD Ryzen 9 5950X",
    price: 54999,
    image:
      "https://i.pcmag.com/imagery/reviews/04WhihjI4VL8APGcfo39ny1-1.fit_lim.size_1050x591.v1608222496.jpg",
  },
  {
    id: 3,
    name: "Intel Core i7-11700K",
    price: 39999,
    image:
      "https://www.funkykit.com/wp-content/uploads/2021/03/Intel-Core-i7-11700k-Retail2.jpg",
  },
  {
    id: 4,
    name: "AMD Ryzen 7 5800X",
    price: 34999,
    image:
      "https://assetsio.gnwcdn.com/amd-ryzen-7-5800x-review.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
  },
  
];

export default function ProcessorsPage() {
  return <CategoryPage categoryName="Процессоры" products={processors} />;
}
