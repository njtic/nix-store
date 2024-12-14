import CategoryPage from '../../components/Category-page'

const powerSupplies = [
  { id: 1, name: "Corsair RM750x", price: 9999, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "EVGA SuperNOVA 650 G5", price: 7999, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Seasonic Focus GX-550", price: 5999, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "be quiet! Straight Power 11 850W", price: 12999, image: "/placeholder.svg?height=200&width=200" },
]

export default function PowerSuppliesPage() {
  return <CategoryPage categoryName="Блоки питания" products={powerSupplies} />
}

