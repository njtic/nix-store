import ProductPage from "../../components/Product-page";
import { processors } from "./page";
import { useLocation } from "react-router-dom";

const allNames = processors.map((item) => item.name);
console.log(allNames);

const allPrices = processors.map((item) => item.price);
console.log(allPrices);

const allImages = processors.map((item) => item.image);
console.log(allImages);

const processorsDes = [
  {
    id: 1,
    name: `${allNames[0]}`,
    price: `${allPrices[0]}`,
    image: `${allImages[0]}`,
    description:
      "Мощный процессор Intel Core i9-11900K для высокопроизводительных систем и игровых ПК.",
    specifications: {
      "Количество ядер": "8",
      "Количество потоков": "16",
      "Базовая частота": "3.5 ГГц",
      "Максимальная частота": "5.3 ГГц",
      "Кэш L3": "16 МБ",
      TDP: "125 Вт",
    },
  },
  {
    id: 2,
    name: `${allNames[1]}`,
    price: `${allPrices[1]}`,
    image: `${allImages[1]}`,
    description:
      "Процессор AMD Ryzen 9 5950X идеально подходит для энтузиастов и профессионалов, требующих максимальной производительности.",
    specifications: {
      "Количество ядер": "16",
      "Количество потоков": "32",
      "Базовая частота": "3.4 ГГц",
      "Максимальная частота": "4.9 ГГц",
      "Кэш L3": "64 МБ",
      TDP: "105 Вт",
    },
  },
  {
    id: 3,
    name: `${allNames[2]}`,
    price: `${allPrices[2]}`,
    image: `${allImages[2]}`,
    description:
      "Процессор Intel Core i7-11700K обеспечивает высокую производительность для современных игровых и рабочих систем.",
    specifications: {
      "Количество ядер": "8",
      "Количество потоков": "16",
      "Базовая частота": "3.6 ГГц",
      "Максимальная частота": "5.0 ГГц",
      "Кэш L3": "16 МБ",
      TDP: "125 Вт",
    },
  },
  {
    id: 4,
    name: `${allNames[3]}`,
    price: `${allPrices[3]}`,
    image: `${allImages[3]}`,
    description:
      "AMD Ryzen 7 5800X — оптимальный выбор для геймеров и профессионалов, требующих стабильной производительности.",
    specifications: {
      "Количество ядер": "8",
      "Количество потоков": "16",
      "Базовая частота": "3.8 ГГц",
      "Максимальная частота": "4.7 ГГц",
      "Кэш L3": "32 МБ",
      TDP: "105 Вт",
    },
  }
];

export default function ProcessorDescription() {
    const location = useLocation();
  const { id } = location.state || {};
  const product = processorsDes.find((p) => p.id === parseInt(`${id}`));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <ProductPage
      product={product}
      categoryName="Процессорам"
      categorySlug="processors"
    />
  );
}
