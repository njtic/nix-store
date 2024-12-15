import ProductPage from "../../components/Product-page";
import { ram } from "./page";
import { useLocation } from "react-router-dom";

const allNames = ram.map((item) => item.name);
console.log(allNames);

const allPrices = ram.map((item) => item.price);
console.log(allPrices);

const allImages = ram.map((item) => item.image);
console.log(allImages);

const ramDes = [
    {
      id: 1,
      name: `${allNames[0]}`,
      price: `${allPrices[0]}`,
      image: `${allImages[0]}`,
      description:
        "Corsair Vengeance LPX 16GB — отличное решение для геймеров и энтузиастов с высокой частотой и низкими задержками.",
      specifications: {
        "Тип памяти": "DDR4",
        "Объем": "16 ГБ",
        "Частота": "3200 МГц",
        "Тайминги": "CL16",
        "Напряжение": "1.35 В",
        "Особенности": "Эффективный алюминиевый радиатор для охлаждения.",
      },
    },
    {
      id: 2,
      name: `${allNames[1]}`,
      price: `${allPrices[1]}`,
      image: `${allImages[1]}`,
      description:
        "G.Skill Ripjaws V 32GB — высокопроизводительная память для мощных игровых и рабочих станций.",
      specifications: {
        "Тип памяти": "DDR4",
        "Объем": "32 ГБ",
        "Частота": "3600 МГц",
        "Тайминги": "CL18",
        "Напряжение": "1.35 В",
        "Особенности": "Совместимость с современными платформами AMD и Intel.",
      },
    },
    {
      id: 3,
      name: `${allNames[2]}`,
      price: `${allPrices[2]}`,
      image: `${allImages[2]}`,
      description:
        "Kingston HyperX Fury 8GB — доступная и надёжная оперативная память для повседневных задач и лёгкого гейминга.",
      specifications: {
        "Тип памяти": "DDR4",
        "Объем": "8 ГБ",
        "Частота": "2666 МГц",
        "Тайминги": "CL16",
        "Напряжение": "1.2 В",
        "Особенности": "Автоматический разгон Plug-and-Play.",
      },
    },
    {
      id: 4,
      name: `${allNames[3]}`,
      price: `${allPrices[3]}`,
      image: `${allImages[3]}`,
      description:
        "Crucial Ballistix 64GB — оптимальный выбор для работы с большими массивами данных и профессиональных приложений.",
      specifications: {
        "Тип памяти": "DDR4",
        "Объем": "64 ГБ",
        "Частота": "3200 МГц",
        "Тайминги": "CL16",
        "Напряжение": "1.35 В",
        "Особенности": "Поддержка RGB-подсветки и расширенные возможности разгона.",
      },
    },
  ];
  

export default function RamDescription() {
    const location = useLocation();
  const { id } = location.state || {};
  const product = ramDes.find((p) => p.id === parseInt(`${id}`));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <ProductPage
      product={product}
      categoryName="Оперативной памяти"
      categorySlug="ram"
    />
  );
}
