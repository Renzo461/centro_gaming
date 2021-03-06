import { useEffect, useState } from "react"
import Contador from "./Contador"
import { useCartContext } from "./context/CartContext"

const ItemDetail = ({ juego }) => {
    const { cart } = useCartContext()
    const [terminar, setTerminar] = useState(false)
    const [s, setS] = useState(0)
    const onAdd = () => {
        setTerminar(true)
    }
    useEffect(() => {
        const prod = cart.find((producto) => producto.id == juego.id)
        if (prod) {            
            setS(juego.stock - prod.quantity)
            return
        }
        setS(juego.stock)
    }, [])
    return (
        <div className="flex bg-zinc-100 rounded-lg m-5 p-5 text-black shadow-md shadow-zinc-700">
            <div className="w-2/5 px-10">
                <img className="shadow-md shadow-zinc-700 w-full rounded-lg" src={juego.imagen} alt={juego.nombre} />
            </div>
            <div className="w-3/5 px-10 border-l-8 border-zinc-300">
                <div className=" h-full">
                    <h1 className="text-3xl font-black mb-5 uppercase">{juego.nombre}</h1>
                    <p className="text-left">{juego.descripcion}</p>
                    <div className="flex mt-5">
                        <h2 className="text-left font-semibold text-slate-700 w-3/6">DESARROLLADOR:</h2>
                        <p className="text-left font-mediumw-3/6 text-slate-600">{juego.desarrollador}</p>
                    </div>
                    <div className="flex">
                        <h2 className="text-left font-semibold text-slate-700 w-3/6">EDITOR:</h2>
                        <p className="text-left font-mediumw-3/6 text-slate-600">{juego.editor}</p>
                    </div>
                    <div className="flex items-center flex-col mt-5">
                        <Contador stock={s} id={juego.id} onAdd={onAdd} terminar={terminar} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail