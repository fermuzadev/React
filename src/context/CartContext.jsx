import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartInitial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(cartInitial)
    
    const addItem = (producto, cantidad) => {
        const productoAgregado = {...producto, cantidad};

        const newCart = [...cart];
        const isInCart = newCart.find((item) => item.id === productoAgregado.id)
        isInCart ? isInCart.cantidad+=cantidad : newCart.push(productoAgregado)
        setCart(newCart)
    }

    const cantCart = () => {
        return cart.reduce((total , producto) => total + producto.cantidad, 0)
    }

    const precioTotal = () => {
        return cart.reduce((total, producto) => total + parseInt(producto.price) * producto.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const borrarItem = id => {
        const carritoNuevo = cart.filter(producto => producto.id !== id)
        setCart(carritoNuevo)
    }


    return (
        <CartContext.Provider value={{cart, addItem, cantCart, precioTotal, vaciarCarrito, borrarItem,}}>
            {children}
        </CartContext.Provider>
    )
}