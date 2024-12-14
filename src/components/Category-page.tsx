import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CategoryPageProps {
  categoryName: string;
  products: Product[];
}

export default function CategoryPage({
  categoryName,
  products,
}: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
          <Link
            to="/"
            className="flex items-center text-indigo-600 hover:text-indigo-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Назад
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center justify-center h-48 bg-gray-200 rounded-md">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-64 h-48 object-cover"
                        
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xl font-semibold text-indigo-600">
                        {product.price} ₽
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
