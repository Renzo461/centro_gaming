
import { createContext, useContext, useEffect, useState } from "react"
import juegos from "../data/bd"
const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            resolve(juegos)
        })
        promesa
            .then((result) => setProducts(result))


    })
    return <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
}
export default AppContextProvider