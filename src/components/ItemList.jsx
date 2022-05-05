import { useEffect, useState } from "react"
import Item from "./Item"
import imagenes from "./img/bd"
import { useParams } from "react-router-dom"

const ItemList = ({category}) => {    
    const [juego, setJuego] = useState([])
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            resolve(imagenes)
        })
        promesa
            .then(result => {
                if (category == undefined) {
                    setJuego(result)
                }
                else {
                    if(category=="Steam"){
                        setJuego(result.filter(j => j.plataforma == category))
                    }                    
                    if(category=="Epic"){
                        setJuego(result.filter(j => j.plataforma == category))
                    }
                }
            })
    })

    return (
        <div className="flex flex-wrap justify-center">
            {juego.map(j =>
                <Item key={j.id} id={j.id} nombre={j.nombre} precio={j.precio} imagen={j.imagen} />
            )}
        </div>
    )
}
export default ItemList