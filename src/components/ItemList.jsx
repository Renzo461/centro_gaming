import { useEffect, useState } from "react"
import Item from "./Item"
import imagenes from "./data/bd"
import { useAppContext } from "./context/AppContext"

const ItemList = ({ category }) => {

    const { products } = useAppContext()
    const [juego, setJuego] = useState([])
    useEffect(() => {
        if (category == undefined) {
            setJuego(products)
        }
        else {
            if (category == "Steam") {
                setJuego(products.filter(j => j.plataforma == category))
            }
            if (category == "Epic") {
                setJuego(products.filter(j => j.plataforma == category))
            }
        }
    })

    return (
        <div className="flex flex-wrap justify-center pt-2">
            {juego.map(j =>
                <Item key={j.id} id={j.id} nombre={j.nombre} precio={j.precio} imagen={j.imagen} />
            )}
        </div>
    )
}
export default ItemList