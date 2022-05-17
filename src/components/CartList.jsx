import { Link } from "react-router-dom"
import Cart from "./Cart"
import { useCartContext } from "./context/CartContext"
import vacio from "./img/esta-vacio.jpg"

const CartList = () => {
    const { cart, deleteFromCart } = useCartContext()
    console.log(cart)
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
                <div>
                    {cart.map(c =>
                        <Cart key={c.id} juego={c} />
                    )}
                </div>
            }
        </div>
    )
}
export default CartList