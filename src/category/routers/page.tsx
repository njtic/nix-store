import CategoryPage from '../../components/Category-page'

const routers = [
  { id: 1, name: "TP-Link Archer C6", price: 2999, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "ASUS RT-AX82U", price: 9999, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Netgear Nighthawk RAX80", price: 19999, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Xiaomi Mi Router 4A", price: 1499, image: "/placeholder.svg?height=200&width=200" },
]

export default function RoutersPage() {
  return <CategoryPage categoryName="Сетевые роутеры" products={routers} />
}

