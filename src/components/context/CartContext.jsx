import { createContext, useContext, useState } from "react"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [c, setC] = useState(0)
    const [mT, setMT] = useState(0)
    const actualizarCantidad = cart.reduce((acc, cart) => acc + cart.quantity, 0)
    const actualizarTotal = cart.reduce((acc, cart) => acc + (cart.quantity * cart.precio), 0)
    const isInCart = (id) => cart.find(prod => prod.id == id)
    const addToCart = (producto, cantidad) => {
        const newCart = [...cart]
        const productoEnCart = isInCart(producto.id)
        if (productoEnCart) {
            newCart[newCart.findIndex(prod => prod.id == productoEnCart.id)].quantity += cantidad
            setCart(newCart)
            setC(c + cantidad)
            setMT(mT + (cantidad * productoEnCart.precio))
            return
        }
        producto.quantity = cantidad
        setCart([...newCart, producto])
        setC(c + cantidad)
        setMT(mT + (cantidad * producto.precio))
    }
    const deleteFromCart = (producto) => {
        const newCart = [...cart]
        const productoEnCart = isInCart(producto.id)
        if (!productoEnCart) {
            return
        }
        const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)
        setCart(deleteProduct)
        setC(c - producto.quantity)
        setMT(mT - (producto.quantity * producto.precio))
    }
    const deleteCart = () => {
        setCart([])
        setC(0)
        setMT(0)
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, deleteFromCart, deleteCart, c, mT }}>{children}</CartContext.Provider>
    )
}
export default CartContextProvider