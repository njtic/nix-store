import ProductPage from "../../components/Product-page";
import { routers } from "./page";
import { useLocation } from "react-router-dom";

const allNames = routers.map((item) => item.name);
console.log(allNames);

const allPrices = routers.map((item) => item.price);
console.log(allPrices);

const allImages = routers.map((item) => item.image);
console.log(allImages);

const routersDes = [
    {
      id: 1,
      name: `${allNames[0]}`,
      price: `${allPrices[0]}`,
      image: `${allImages[0]}`,
      description:
        "TP-Link Archer C6 — доступный маршрутизатор с поддержкой двух диапазонов Wi-Fi для дома и офиса.",
      specifications: {
        "Стандарты Wi-Fi": "802.11ac (Wi-Fi 5)",
        "Диапазоны частот": "2.4 ГГц, 5 ГГц",
        "Максимальная скорость": "1200 Мбит/с",
        "Порты": "4 x LAN, 1 x WAN",
        "Антенны": "4 внешние + 1 внутренняя",
        "Особенности": "Поддержка MU-MIMO для повышения производительности сети.",
        "Размеры": "230 x 144 x 35 мм",
      },
    },
    {
      id: 2,
      name: `${allNames[1]}`,
      price: `${allPrices[1]}`,
      image: `${allImages[1]}`,
      description:
        "ASUS RT-AX82U — мощный игровой маршрутизатор с поддержкой Wi-Fi 6 и настраиваемой RGB-подсветкой.",
      specifications: {
        "Стандарты Wi-Fi": "802.11ax (Wi-Fi 6)",
        "Диапазоны частот": "2.4 ГГц, 5 ГГц",
        "Максимальная скорость": "5400 Мбит/с",
        "Порты": "4 x LAN, 1 x WAN, 1 x USB 3.1",
        "Антенны": "4 внешние",
        "Особенности": "Поддержка игрового режима, MU-MIMO, OFDMA.",
        "Размеры": "275 x 185 x 95 мм",
      },
    },
    {
      id: 3,
      name: `${allNames[2]}`,
      price: `${allPrices[2]}`,
      image: `${allImages[2]}`,
      description:
        "Netgear Nighthawk RAX80 — высокопроизводительный маршрутизатор для больших домов с поддержкой Wi-Fi 6.",
      specifications: {
        "Стандарты Wi-Fi": "802.11ax (Wi-Fi 6)",
        "Диапазоны частот": "2.4 ГГц, 5 ГГц",
        "Максимальная скорость": "6000 Мбит/с",
        "Порты": "5 x LAN, 1 x WAN, 2 x USB 3.0",
        "Антенны": "6 внутренних антенн",
        "Особенности": "Поддержка MU-MIMO, Beamforming и WPA3.",
        "Размеры": "310 x 205 x 60 мм",
      },
    },
    {
      id: 4,
      name: `${allNames[3]}`,
      price: `${allPrices[3]}`,
      image: `${allImages[3]}`,
      description:
        "Xiaomi Mi Router 4A — компактный и доступный маршрутизатор для небольших квартир.",
      specifications: {
        "Стандарты Wi-Fi": "802.11ac (Wi-Fi 5)",
        "Диапазоны частот": "2.4 ГГц, 5 ГГц",
        "Максимальная скорость": "1167 Мбит/с",
        "Порты": "2 x LAN, 1 x WAN",
        "Антенны": "4 внешние",
        "Особенности": "Простая настройка через мобильное приложение.",
        "Размеры": "201 x 122 x 174 мм",
      },
    },
  ];
  

export default function RoutersDescription() {
    const location = useLocation();
  const { id } = location.state || {};
  const product = routersDes.find((p) => p.id === parseInt(`${id}`));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <ProductPage
      product={product}
      categoryName="Роуторам"
      categorySlug="routers"
    />
  );
}
