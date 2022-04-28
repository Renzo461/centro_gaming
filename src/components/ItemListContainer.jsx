import ItemList from "./ItemList"

const ItemListContainer = ({ nombre }) => {
  return (
    <div>
      <p>Bienvenido a la pagina Centro Gaming {nombre}</p>
      <ItemList/>
    </div>
  )
}
export default ItemListContainer