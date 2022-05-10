import { useState } from "react"
import { Link } from "react-router-dom"

const Contador = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

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
  return (
    <div className="flex flex-col w-fit rounded-md text-center">
      <h3 className="text-xl">STOCK <span className="text-base">({stock} Disponibles)</span></h3>
      <div className="flex justify-center mt-2">
        <button className="bg-blue-600 font-bold w-7 h-7 rounded-sm" onClick={resHandler}>-</button>
        <div className="font-bold mx-3"> {count} </div>
        <button className="bg-red-600 font-bold w-7 h-7 rounded-sm" onClick={addHandler}>+</button>        
      </div>
      <Link to={'/cart'}><button className="border-black border-2 font-bold rounded-md mt-2 bg-sky-300 px-5 py-1 uppercase" onClick={()=>{onAdd(count)}}>Añadir al carrito</button></Link>
    </div>
  )
}
export default Contador