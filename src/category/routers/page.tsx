import CategoryPage from '../../components/Category-page'

const routers = [
  { id: 1, name: "TP-Link Archer C6", price: 2999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPOUsT7p8HDN0lANRgzXPXiH-Qx--AU-cyA&s" },
  { id: 2, name: "ASUS RT-AX82U", price: 9999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQvT7rtHxVeebXAQ5g0JY6dcNWxOBtDR0MQ&s" },
  { id: 3, name: "Netgear Nighthawk RAX80", price: 19999, image: "https://static2.nordic.pictures/30117017-product_big/netgear-nighthawk-rax80-100eus.jpg" },
  { id: 4, name: "Xiaomi Mi Router 4A", price: 1499, image: "https://m.media-amazon.com/images/I/412u+FrcaZL.jpg" },
]

export default function RoutersPage() {
  return <CategoryPage categoryName="Сетевые роутеры" products={routers} />
}

