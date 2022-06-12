import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppContext } from "./context/AppContext"
import { useCartContext } from "./context/CartContext"

const Contador = ({ stock, onAdd, terminar, id }) => {
  const [count, setCount] = useState(1)
  const { addToCart } = useCartContext()
  const { products } = useAppContext()

  const addHandler = () => {
    if (stock > count) {
      setCount(count + 1)
    }
  }
  const resHandler = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleClick = (id, cantidad) => {
    const findProduct = products.find((producto) => producto.id == id)
    if (!findProduct) {
      alert("Error en la base de datos")
      return
    }
    addToCart(findProduct, cantidad)
    onAdd(count)
  }

  return (
    <div className="flex flex-col w-fit rounded-md text-center">
      <h3 className="text-xl">STOCK <span className="text-base">({stock} Disponibles)</span></h3>
      {
        stock == 0 ?
          <>
            <Link to={'/'}><button className="font-bold rounded-md mt-2 bg-blue-400 hover:bg-cyan-400 px-5 py-1 uppercase">Ver Catálogo</button></Link>
          </>
          :
          <>
            {terminar ?
              <>
                <Link to={'/'}><button className="font-bold rounded-md mt-2 bg-blue-400 hover:bg-cyan-400 px-5 py-1 uppercase">Ver Catálogo</button></Link>
                <Link to={'/cart'}><button className="font-bold rounded-md mt-2 bg-blue-400 hover:bg-cyan-400 px-5 py-1 uppercase">Terminar Compra</button></Link>
              </>
              :
              <div>
                <div className="flex justify-center mt-2">
                  <button className="bg-blue-600 font-bold w-7 h-7 rounded-sm" onClick={resHandler}>-</button>
                  <div className="font-bold mx-3"> {count} </div>
                  <button className="bg-red-600 font-bold w-7 h-7 rounded-sm" onClick={addHandler}>+</button>
                </div>
                <button className="font-bold rounded-md mt-2 bg-blue-400 hover:bg-cyan-400 px-5 py-1 uppercase" onClick={() => handleClick(id, count)}>Añadir al carrito</button>
              </div>
            }
          </>
      }

    </div>
  )
}
export default Contador