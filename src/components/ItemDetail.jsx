import ItemCount from "./ItemCount"

const ItemDetail = ({productos}) => {
  return (
    <>
      <div className="m-2 w-25 d-flex d-inline-flex p-4 flex-wrap">
        <img src={productos.img} className="img-fluid" alt={productos.name} />
        <div className="card-body">
          <h5 className="card-title">{[productos.name]}</h5>
          <p className="card-text">{productos.description}</p>
          <p className="card-text">{productos.price}</p>
          <ItemCount inicial={1} stock={10} onAdd={(contador) => console.log('Cantidad agregada ', contador)}/>
        </div>
      </div>
    </>
  )
}

export default ItemDetail