import { useState } from "react"
import { Link } from "react-router-dom"
import Cart from "./Cart"
import { useCartContext } from "./context/CartContext"
import vacio from "./img/esta-vacio.jpg"

const CartList = () => {
    const { cart, deleteCart, c, mT } = useCartContext()
    return (
        <div className="bg-white flex-1 pt-5">
            {cart.length == 0 ?
                <div className="flex flex-col items-center text-center text-black text-3xl font-semibold">
                    <p>NO HAY NADA EN EL CARRITO</p>
                    <img className="w-1/2" src={vacio} alt="VACIO" />
                    <Link to={'/'} className="mt-5">
                        <div className="text-xl px-7 py-1 bg-blue-400 rounded-md">VER CATÁLOGO</div>
                    </Link>
                </div>
                :
                <div className="flex justify-center w-3/4 m-auto">
                    <div className="w-3/4">
                        {cart.map(c =>
                            <Cart key={c.id} juego={c} eliminar={true} />
                        )}
                        <div className="flex justify-end mt-3 text-zinc-900">
                            <div className="w-auto cursor-pointer bg-blue-400 px-5 py-1 rounded-md duration-200 hover:bg-cyan-400" onClick={() => deleteCart()}>
                                VACIAR CARRITO
                            </div>
                        </div>
                    </div>
                    <div className="text-xl text-black ml-5 w-1/4">
                        <div className="bg-slate-100 px-10 py-2 mb-1">
                            <h1 className="font-bold text-xl">RESUMEN</h1>
                            <div className="flex justify-between text-base mt-1">
                                {c == 1 ?
                                    <p>{c} Juego</p> :
                                    <p>{c} Juegos</p>
                                }
                                <p className="font-semibold">
                                    {mT}$
                                </p>
                            </div>
                        </div>
                        <div className="bg-slate-100 px-10 py-2">
                            <div className="flex justify-between items-center text-base ">
                                <h1 className="font-semibold">Total:</h1>
                                <p className="text-2xl font-extrabold">
                                    {mT}$
                                </p>
                            </div>
                        </div>
                        <div className="flex text-base justify-end mt-3 text-zinc-900">
                            <Link to={'/cart/pago'} className="w-auto cursor-pointer bg-blue-400 px-5 py-1 rounded-md duration-200 hover:bg-cyan-400">
                                COMPRAR
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default CartList