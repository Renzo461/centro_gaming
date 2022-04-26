import { useState } from "react"

const Contador = ({ stock, initial }) => {
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
    <div className="flex justify-center">
      <div className="border-2 border-sky-500 mt-5 p-3 w-fit">
        <h1>CONTADOR</h1>
        <div className="mb-3">Stock: {stock} Inicial: {initial}</div>
        <button className="btn btn-primary" onClick={resHandler}>-</button>
        <strong className="mx-3"> {count} </strong>
        <button className="btn btn-primary" onClick={addHandler}>+</button>
      </div>
    </div>
  )
}
export default Contador