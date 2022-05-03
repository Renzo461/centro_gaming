import Contador from "./Contador"

const ItemDetail = ({ juego }) => {
    return (
        <div className="flex bg-slate-300 rounded-lg m-5 p-5 text-slate-900">
            <div className="w-2/5">
                <img className="rounded-lg" src={juego.imagen} alt={juego.nombre} />
            </div>
            <div className="w-3/5 px-20">
                <h1 className="text-3xl font-black mb-5">{juego.nombre}</h1>
                <p className="text-left">{juego.descripcion}</p>
                <div className="flex mt-5">
                    <h2 className="text-left font-semibold text-slate-700 w-3/6">DESARROLLADOR:</h2>
                    <p className="text-left font-mediumw-3/6 text-slate-600">{juego.desarrollador}</p>
                </div>
                <div className="flex">
                    <h2 className="text-left font-semibold text-slate-700 w-3/6">EDITOR:</h2>
                    <p className="text-left font-mediumw-3/6 text-slate-600">{juego.editor}</p>
                </div>
                <div className="flex items-center font-bold mt-5">
                    <h2 className="text-xl text-left font-semibold text-slate-700 w-3/6">PRECIO:</h2>
                    <p className="p-3 rounded-xl text-4xl text-left w-auto bg-indigo-400">{juego.precio}</p>
                </div>                
                <Contador stock={10} initial={1}/>
            </div>
        </div>
    )
}
export default ItemDetail