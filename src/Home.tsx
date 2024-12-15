import {
  Cpu,
  Microchip as Gpu,
  Wifi,
  MemoryStickIcon as Memory,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

function Home() {
  const categories = [
    {
      name: "Процессоры",
      icon: Cpu,
      description: "Мощные CPU для вашего ПК",
      path: "processors",
    },
    {
      name: "Видеокарты",
      icon: Gpu,
      description: "Графические ускорители для игр и работы",
      path: "graphics-cards",
    },
    {
      name: "Сетевые роутеры",
      icon: Wifi,
      description: "Надежное сетевое оборудование",
      path: "routers",
    },
    {
      name: "Платы оперативной памяти",
      icon: Memory,
      description: "Быстрая RAM для многозадачности",
      path: "ram",
    },
    {
      name: "Блоки питания",
      icon: Zap,
      description: "Стабильное питание для вашей системы",
      path: "power-supplies",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Компьютерный магазин
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Link
                  to={category.path}
                  key={category.name}
                  className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                  <div className="flex items-center">
                    <category.icon className="h-8 w-8 text-blue-500" />
                    <h2 className="ml-3 text-xl font-semibold text-gray-900">
                      {category.name}
                    </h2>
                  </div>
                  <p className="mt-4 text-gray-600">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
