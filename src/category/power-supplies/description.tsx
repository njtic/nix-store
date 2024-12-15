import ProductPage from "../../components/Product-page";
import { powerSupplies } from "./page";
import { useLocation } from "react-router-dom";

const allNames = powerSupplies.map((item) => item.name);
console.log(allNames);

const allPrices = powerSupplies.map((item) => item.price);
console.log(allPrices);

const allImages = powerSupplies.map((item) => item.image);
console.log(allImages);

const powerSuppliesDes = [
    {
      id: 1,
      name: `${allNames[0]}`,
      price: `${allPrices[0]}`,
      image: `${allImages[0]}`,
      description:
        "Corsair RM750x — высокоэффективный блок питания на 750 Вт с модульной конструкцией и сертификацией 80 Plus Gold.",
      specifications: {
        "Мощность": "750 Вт",
        "Сертификация": "80 Plus Gold",
        "Тип кабелей": "Полностью модульные",
        "Охлаждение": "140 мм вентилятор с низким уровнем шума",
        "Габариты": "160 x 86 x 150 мм",
        "Гарантия": "10 лет",
        "Особенности": "Конденсаторы японского производства для стабильной работы.",
      },
    },
    {
      id: 2,
      name: `${allNames[1]}`,
      price: `${allPrices[1]}`,
      image: `${allImages[1]}`,
      description:
        "EVGA SuperNOVA 650 G5 — компактный и надёжный блок питания с мощностью 650 Вт и сертификацией 80 Plus Gold.",
      specifications: {
        "Мощность": "650 Вт",
        "Сертификация": "80 Plus Gold",
        "Тип кабелей": "Полностью модульные",
        "Охлаждение": "135 мм вентилятор с гидродинамическим подшипником",
        "Габариты": "150 x 85 x 140 мм",
        "Гарантия": "10 лет",
        "Особенности": "Компактные размеры для установки в большинство корпусов.",
      },
    },
    {
      id: 3,
      name: `${allNames[2]}`,
      price: `${allPrices[2]}`,
      image: `${allImages[2]}`,
      description:
        "Seasonic Focus GX-550 — эффективный блок питания на 550 Вт с модульной конструкцией и тихим охлаждением.",
      specifications: {
        "Мощность": "550 Вт",
        "Сертификация": "80 Plus Gold",
        "Тип кабелей": "Полностью модульные",
        "Охлаждение": "120 мм вентилятор с гидродинамическим подшипником",
        "Габариты": "140 x 150 x 86 мм",
        "Гарантия": "10 лет",
        "Особенности": "Компактные размеры и высокая эффективность.",
      },
    },
    {
      id: 4,
      name: `${allNames[3]}`,
      price: `${allPrices[3]}`,
      image: `${allImages[3]}`,
      description:
        "be quiet! Straight Power 11 850W — бесшумный блок питания на 850 Вт с отличной эффективностью и надёжностью.",
      specifications: {
        "Мощность": "850 Вт",
        "Сертификация": "80 Plus Gold",
        "Тип кабелей": "Полностью модульные",
        "Охлаждение": "Silent Wings 3 135 мм вентилятор",
        "Габариты": "160 x 150 x 86 мм",
        "Гарантия": "5 лет",
        "Особенности": "Идеальный выбор для бесшумных ПК и мощных систем.",
      },
    },
  ];
  
export default function PowerDescription() {
    const location = useLocation();
  const { id } = location.state || {};
  const product = powerSuppliesDes.find((p) => p.id === parseInt(`${id}`));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <ProductPage
      product={product}
      categoryName="Блокам питания"
      categorySlug="power-supplies"
    />
  );
}
