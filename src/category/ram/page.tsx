import CategoryPage from "../../components/Category-page";

const ram = [
  {
    id: 1,
    name: "Corsair Vengeance LPX 16GB",
    price: 5999,
    image:
      "https://apple-avenue.ru/upload/resize_cache/webp/iblock/093/thiogd61h317c5beusb3kg587c8uy9dy.webp?height=200&width=200",
  },
  {
    id: 2,
    name: "G.Skill Ripjaws V 32GB",
    price: 11999,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLyPBDvHqLSYlaPrHm5huooF_0pz5_3nVY8ftoevMkmDI3IHMMHCwC4DW5UKIR8p0Biwqpy8sTTFzvAj01o4jxMtcIyXVWOSvAC6PpnyS-v342b17UI7aj_ErGP3lhFebZDfMIx-E&usqp=CAc",
  },
  {
    id: 3,
    name: "Kingston HyperX Fury 8GB",
    price: 2999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsDbOfslalAfrVk0Uj9X1j6ISju0AW9g6Tw&s",
  },
  {
    id: 4,
    name: "Crucial Ballistix 64GB",
    price: 23999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ86dhyX9IlzKHooVmqmisWQdNenkqGnNIZ1A&s",
  },
];

export default function RamPage() {
  return <CategoryPage categoryName="Оперативная память" products={ram} />;
}
