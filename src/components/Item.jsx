const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <div key={id} className="w-1/5 p-2 m-1 border border-emerald-500">
            <img src={imagen} alt={nombre}></img>
            <div>
                <h2>{nombre}</h2>
            </div>
            <div>
                <p>{precio}</p>
            </div>
            <button className="btn btn-accent">COMPRAR</button>            
        </div >
    )
}
export default Item