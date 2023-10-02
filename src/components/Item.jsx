import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <>
      <div className="card-fluid m-5 w-25 d-flex d-inline-flex p-4 flex-wrap">
        <img src={producto.img} className="img-fluid" alt={producto.name} />
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <p className="card-text">{producto.description}</p>
          <p className="card-text">{producto.price}</p>
          <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver Detalle</Link>
        </div>
      </div>
    </>
  )
}

export default Item