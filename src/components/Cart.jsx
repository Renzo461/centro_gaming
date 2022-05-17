import { useCartContext } from "./context/CartContext"

const Cart = ({ juego }) => {
    const {deleteFromCart}=useCartContext()
    const montoTotal = juego.quantity * juego.precio
    return (
        <div className="m-auto cart p-5 flex border-b-2">
            <div className="w-20">
                <img src={juego.imagen} alt={juego.nombre} />
            </div>
            <div className="pl-10 flex flex-col justify-between w-10/12 text-black">
                <div>
                    <h1 className="text-4xl font-bold">{juego.nombre}</h1>
                </div>
                <div className="w-full flex items-baseline">
                    <span className="text-xl mr-10 w-1/2">Cantidad: {juego.quantity}</span>
                    <p className="text-3xl font-medium w-1/2">{montoTotal}$</p>
                </div>
            </div>
            <div className="m-auto text-white">
                <div className="cursor-pointer bg-red-600 px-5 py-1 rounded-md" onClick={()=>deleteFromCart(juego)}>
                    ELIMINAR
                </div>
            </div>
        </div>
    )
}
export default Cart