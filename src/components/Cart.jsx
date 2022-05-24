import { useCartContext } from "./context/CartContext"

const Cart = ({ juego, eliminar }) => {
    const { deleteFromCart } = useCartContext()
    const montoTotal = juego.quantity * juego.precio
    return (
        <div className="m-auto flex mb-1 bg-slate-100">
            <div className="w-20">
                <img src={juego.imagen} alt={juego.nombre} />
            </div>
            <div className="pl-5 flex flex-col justify-around w-10/12 text-black">
                <div>
                    <h1 className="text-3xl font-bold">{juego.nombre}</h1>
                </div>
                <div className="w-full flex items-baseline text-xl">
                    <div className="w-1/2 flex">
                        <p>Cantidad: {juego.quantity}</p>
                        <p className="ml-5">Precio: {juego.precio}$</p>
                    </div>
                    <p className="text-center font-bold w-1/2">Subtotal: {montoTotal}$</p>
                </div>
            </div>
            {eliminar == true ?
                <div className="m-auto text-black">
                    <div className="hover:scale-125 duration-100 cursor-pointer rounded-md" onClick={() => deleteFromCart(juego)}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fillRule="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor" />
                            <path d="M9 9H11V17H9V9Z" fillRule="currentColor" />
                            <path d="M13 9H15V17H13V9Z" fillRule="currentColor" />
                        </svg>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}
export default Cart