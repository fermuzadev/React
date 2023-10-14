import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"


const ItemDetail = ({productos}) => {
  const [contador, setCantidadAgregada] = useState(0)
  
  const {cart, addItem} = useContext(CartContext)
  const AddItemButton= (cantidad) => {
    setCantidadAgregada(cantidad)

    const producto = productos
    addItem(producto, cantidad)
  
  }

  return (
    <>
      <div className="m-2 w-25 d-flex d-inline-flex p-4 flex-wrap">
        <img src={productos.img} className="img-fluid" alt={productos.name} />
        <div className="card-body">
          <h5 className="card-title">{[productos.name]}</h5>
          <p className="card-text">{productos.description}</p>
          <p className="card-text">${productos.price}</p>
          <p className="card-text">Stock: {productos.stock}</p>
          {
            contador > 0 ? (
                <button className="btn btn-primary p-auto text-light"><Link to='/cart' className="btn text-light">Terminar compra</Link></button>
            ) : (
                <ItemCount inicial={1} stock={productos.stock} onAdd={AddItemButton}/>
            )
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetail