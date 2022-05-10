import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <div className="w-1/6 p-2 text-center text-black">
            <div>
                <div className="duration-500 hover:scale-105 rounded-md shadow-md shadow-zinc-700">
                    <Link to={`/juego/${id}`} key={id} className=" relative">
                        <img className="rounded-md" src={imagen} alt={nombre}></img>
                        <div className="absolute px-2 py-1 rounded-bl-md bottom-0 bg-black">
                            <p className="text-white font-medium text-lg">{precio}</p>
                        </div>
                    </Link>
                </div>
                <div className="mt-1">
                    <h2 className="overflow-hidden whitespace-nowrap uppercase text-ellipsis font-semibold text-lg">{nombre}</h2>
                </div>
            </div >
        </div>
    )
}
export default Item