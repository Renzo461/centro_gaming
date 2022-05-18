import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppContext } from "./context/AppContext"
import ItemDetail from "./ItemDetail"
const ItemDetailContainer = () => {
    const { products } = useAppContext()
    const { gameId } = useParams()
    const [juego, setJuego] = useState([])
    useEffect(() => {
        const db = getFirestore();
        const juegosBD = doc(db, "juegos", gameId)
        getDoc(juegosBD).then((result) => {
            setJuego(({ id: result.id, ...result.data() }))
        })
        // setJuego(products.find((j)=>j.id==gameId))
    }, [])
    console.log(products)
    return (
        <div className="bg-white flex-1">
            <ItemDetail key={juego.id} juego={juego} />
        </div>
    )
}
export default ItemDetailContainer