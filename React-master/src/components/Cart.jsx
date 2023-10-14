import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, precioTotal, vaciarCarrito, borrarItem } = useContext(CartContext);

return (
    <div className="container">
        {
            cart.map((prod) => (
                <div key={prod.id} className='col-sm  d-flex row text-center mb-4 mt-4 p-2 justify-content-between'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th><img src={prod.img} className="img-fluid rounded-circle" width={100} alt="" /></th>
                                <th><p className='text-secondary'>{prod.name}</p></th>
                                <th><p className=" text-secondary"> ${prod.price}</p></th>
                                <th><p className=" text-secondary">Unidades: {prod.cantidad}</p></th>
                                <th><p className="text-secondary"> ${prod.price * prod.cantidad}</p></th>
                                <th><button onClick={() => borrarItem(prod.id)} className='btn btn-danger p-auto text-light d-fluid'>Borrar Item</button></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            ))
        }

        {  
            cart.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={() => vaciarCarrito()} className='btn btn-danger p-auto text-light p-2 m-2'>Vaciar Pedido</button>
                <button className='btn btn-success p-auto text-light p-2 m-2'><Link to="/checkout" className='text-light'>Finalizar compra</Link></button>
            </> :
            <>
            <h2>Tu pedido está vacío</h2>
            <Link to='/' className="btn btn-primary text-light lg rounded-2 mb-4 mx-auto"> Seguir Comprando </Link>
            </>
        }
        
    </div>
)
}

export default Cart