import CategoryPage from '../../components/Category-page'

const ram = [
  { id: 1, name: "Corsair Vengeance LPX 16GB", price: 5999, image: "https://apple-avenue.ru/upload/resize_cache/webp/iblock/093/thiogd61h317c5beusb3kg587c8uy9dy.webp?height=200&width=200" },
  { id: 2, name: "G.Skill Ripjaws V 32GB", price: 11999, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Kingston HyperX Fury 8GB", price: 2999, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Crucial Ballistix 64GB", price: 23999, image: "/placeholder.svg?height=200&width=200" },
]

export default function RamPage() {
  return <CategoryPage categoryName="Оперативная память" products={ram} />
}

