import { useEffect, useState } from "react"
import juego1 from "./img/ageOfEmpiresiv.jpg"
import juego2 from "./img/battlefield2042.jpg"
import ItemDetail from "./ItemDetail"
const ItemDetailContainer = () => {
    const item = [
        { id: "1", nombre: "Age Of Empire 4", precio: "40$", imagen: juego1, descripcion: "Uno de los juegos de estrategia en tiempo real más queridos vuelve a demostrar todo su esplendor con Age of Empires IV, donde serás la estrella de las épicas batallas históricas que moldearon el mundo que hoy conocemos.", desarrollador:"Relic Entertainment, World's Edge",editor:"Xbox Game Studios"},
        { id: "2", nombre: "JUEGO 2", precio: "40$", imagen: juego2,descripcion:"Los campos de batalla cambian ante tus ojos. Un arsenal de vanguardia a tu disposición. El retorno de la guerra total. Adáptate y vence en descomunales batallas de 128 jugadores* en las que las tormentas dinámicas, los peligros medioambientales, la libertad de combate y la característica destrucción de Battlefield desatan una nueva dimensión de momentos exclusivos de Battlefield",desarrollador:"DICE",editor:"Electronic Arts" },
    ]
    const [juego, setJuego] = useState([])
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item)
            }, 2000)
        })
        promesa
            .then(result => {
                setJuego(result)
            })
    })

    return (
        <div className="w-4/6 mx-auto">ItemDetailContainer
            {item.map(j => <ItemDetail key={j} juego={j}/>)}
        </div>
    )
}
export default ItemDetailContainer