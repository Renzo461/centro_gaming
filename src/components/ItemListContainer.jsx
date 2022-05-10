import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {
  const { category } = useParams()
  return (
    <div className="bg-white flex-1">      
      <ItemList category={category}/>
    </div>
  )
}
export default ItemListContainer