import CategoryPage from '../../components/Category-page'

const processors = [
  { id: 1, name: "Intel Core i9-11900K", price: 49999, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "AMD Ryzen 9 5950X", price: 54999, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Intel Core i7-11700K", price: 39999, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "AMD Ryzen 7 5800X", price: 34999, image: "/placeholder.svg?height=200&width=200" },
]

export default function ProcessorsPage() {
  return <CategoryPage categoryName="Процессоры" products={processors} />
}

