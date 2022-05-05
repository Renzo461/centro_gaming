import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <div key={id} className="w-1/5 p-2 text-center text-slate-100">
            <div className="bg-stone-900 border rounded-md border-cyan-100 p-2">
                <img src={imagen} alt={nombre}></img>
                <div>
                    <h2>{nombre}</h2>
                </div>
                <div>
                    <p>{precio}</p>
                </div>
                <Link to={`/juego/${id}`} className="btn btn-accent mt-2">DETALLES</Link>
            </div >
        </div>
    )
}
export default Item