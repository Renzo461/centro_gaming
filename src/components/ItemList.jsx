import { useEffect, useState } from "react"
import Item from "./Item"
import juego1 from "./img/ageOfEmpiresiv.jpg"
import juego2 from "./img/battlefield2042.jpg"

const ItemList = () => {
    const item = [
        { id: "1", nombre: "Age Of Empire 4", precio: "40$", imagen: juego1 },
        { id: "2", nombre: "JUEGO 2", precio: "40$", imagen: juego2 },
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
        <div className="flex flex-wrap">
            {juego.map(j => 
                <Item key={j.id} nombre={j.nombre} precio={j.precio} imagen={j.imagen}/>
            )}
        </div>
    )
}
export default ItemList