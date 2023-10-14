import cart from '../images/cart.png'

export const CartWidget = () => {
    return (
        <>
        <img src= {cart}  alt="Cart" /><span className='text-light'>0</span>
        </>
    )
}
