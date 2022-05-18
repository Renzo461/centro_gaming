
import { createContext, useContext, useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, snapshotEqual, where } from "firebase/firestore"
const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const db = getFirestore();

        const juegosBD = collection(db, "juegos")
        getDocs(juegosBD)
            .then((result) => setProducts(result.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))
    }, [])
    console.log(products)
    return <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
}
export default AppContextProvider