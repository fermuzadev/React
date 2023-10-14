
import { useState } from "react"
import mas from "../images/+.png"
import menos from "../images/-.png"

const ItemCount = ({inicial, stock, onAdd}) => {
    const [contador, setContador] = useState(inicial)

    const suma = () => {
        contador < stock ? setContador(contador+1) : setContador(stock);
    }
    
    const resta = () => {
        if (contador <= stock && contador >=1) {
        setContador(contador-1)}
    }
    return (
        <>
        <div className="container d-flex">
            <button onClick={ resta } className="btn"><img src={menos} alt="" /></button>
            <h1>{contador}</h1>
            <button onClick={ suma } className="btn"><img src={mas} alt="" /></button> 
            <button onClick={() => onAdd(contador)} disabled={!contador || !stock} className="btn btn-primary p-auto text-light">Agregar al carrito </button>
        </div>
        </>
    )
}

export default ItemCount;