import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import bd from "./img/bd"
import ItemDetail from "./ItemDetail"
const ItemDetailContainer = () => {
    const { gameId } = useParams()
    const [juego, setJuego] = useState([])
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            resolve(bd)
        })
        promesa
            .then(result => {
                setJuego(result.find(j => j.id == gameId))
            })
    })

    return (
        <div className="w-4/6 mx-auto">ItemDetailContainer
            <ItemDetail key={juego.id} juego={juego} />
        </div>
    )
}
export default ItemDetailContainer