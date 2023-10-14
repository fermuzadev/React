import { useContext } from 'react'
import carrito from '../images/carrito.png'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const {cantCart} = useContext(CartContext)
    return (
        <Link to='/cart'><img src= {carrito}  alt="Carrito" /><span className='text-light'>{cantCart()}</span></Link>
    )
}
