import { createContext, useContext, useState } from "react"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const isInCart = (id) => cart.find(prod => prod.id == id)
    const addToCart = (producto, cantidad) => {
        const newCart = [...cart]
        const productoEnCart = isInCart(producto.id)
        if (productoEnCart) {
            newCart[newCart.findIndex(prod => prod.id == productoEnCart.id)].quantity += cantidad
            setCart(newCart)
            return
        }
        producto.quantity = cantidad
        setCart([...newCart, producto])
    }

    const deleteFromCart = (producto) => {
        const newCart = [...cart]
        const productoEnCart = isInCart(producto.id)
        if (!productoEnCart) {
            return
        }
        const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)
        setCart(deleteProduct)
    }

    const deleteCart = () => setCart([])
    return (
        <CartContext.Provider value={{ cart, addToCart, deleteFromCart, setCart }}>{children}</CartContext.Provider>
    )
}
export default CartContextProvider