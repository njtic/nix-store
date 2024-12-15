import ProductPage from "../../components/Product-page";
import { graphicsCards } from "./page";
import { useLocation } from "react-router-dom";

const allNames = graphicsCards.map((item) => item.name);
console.log(allNames);

const allPrices = graphicsCards.map((item) => item.price);
console.log(allPrices);

const allImages = graphicsCards.map((item) => item.image);
console.log(allImages);

const graphics= [
    {
      id: 1,
      name: `${allNames[0]}`,
    price: `${allPrices[0]}`,
    image: `${allImages[0]}`,
      description:
        "Мощная видеокарта NVIDIA GeForce RTX 3080 для современных игр в 4K и задач, требующих высокой производительности.",
      specifications: {
        "Архитектура": "Ampere",
        "Объем памяти": "10 ГБ GDDR6X",
        "Ширина шины": "320 бит",
        "Базовая частота": "1440 МГц",
        "Увеличенная частота": "1710 МГц",
        "Энергопотребление (TDP)": "320 Вт",
        "Выходы": "HDMI 2.1, 3 x DisplayPort 1.4a",
      },
    },
    {
      id: 2,
      name: `${allNames[1]}`,
      price: `${allPrices[1]}`,
      image: `${allImages[1]}`,
      description:
        "AMD Radeon RX 6800 XT предлагает отличную производительность в играх и поддержку трассировки лучей.",
      specifications: {
        "Архитектура": "RDNA 2",
        "Объем памяти": "16 ГБ GDDR6",
        "Ширина шины": "256 бит",
        "Базовая частота": "1825 МГц",
        "Увеличенная частота": "2250 МГц",
        "Энергопотребление (TDP)": "300 Вт",
        "Выходы": "HDMI 2.1, 2 x DisplayPort 1.4, USB-C",
      },
    },
    {
      id: 3,
      name: `${allNames[2]}`,
      price: `${allPrices[2]}`,
      image: `${allImages[2]}`,
      description:
        "NVIDIA GeForce RTX 3070 обеспечивает высокую производительность для игр в 1440p и 4K при доступной цене.",
      specifications: {
        "Архитектура": "Ampere",
        "Объем памяти": "8 ГБ GDDR6",
        "Ширина шины": "256 бит",
        "Базовая частота": "1500 МГц",
        "Увеличенная частота": "1725 МГц",
        "Энергопотребление (TDP)": "220 Вт",
        "Выходы": "HDMI 2.1, 3 x DisplayPort 1.4a",
      },
    },
    {
      id: 4,
      name: `${allNames[3]}`,
    price: `${allPrices[3]}`,
    image: `${allImages[3]}`,
      description:
        "AMD Radeon RX 6700 XT — отличная видеокарта для игр в разрешении 1440p с высокой частотой кадров.",
      specifications: {
        "Архитектура": "RDNA 2",
        "Объем памяти": "12 ГБ GDDR6",
        "Ширина шины": "192 бит",
        "Базовая частота": "2321 МГц",
        "Увеличенная частота": "2581 МГц",
        "Энергопотребление (TDP)": "230 Вт",
        "Выходы": "HDMI 2.1, 3 x DisplayPort 1.4",
      },
    },
  ];
  

export default function GraphicsDescription() {
    const location = useLocation();
  const { id } = location.state || {};
  const product = graphics.find((p) => p.id === parseInt(`${id}`));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <ProductPage
      product={product}
      categoryName="Видиокартам"
      categorySlug="graphics-cards"
    />
  );
}
