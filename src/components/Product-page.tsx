import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router';

interface ProductPageProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    specifications: { [key: string]: string };
  };
  categoryName: string;
  categorySlug: string;
}

export default function ProductPage({ product, categoryName, categorySlug }: ProductPageProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <Link to={`/${categorySlug}`} className="flex items-center text-indigo-600 hover:text-indigo-900">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Назад к {categoryName}
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={product.image} 
                    alt={product.name} 
                    width={400} 
                    height={400} 
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
                  <p className="text-xl font-semibold text-indigo-600 mb-4">{product.price} ₽</p>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Характеристики:</h3>
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">{key}</dt>
                        <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

