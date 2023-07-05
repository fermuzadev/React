import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import datos from '../data/datos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    
    const { id } = useParams()
    useEffect(() => {
        const data = new Promise((resolve,rejected) => {
            setTimeout(() => resolve(datos), 2000)
        })
        data.then(res => {
                setProductos(res.find(producto => producto.id === parseInt(id)))
    })}, [id])
        return (
                <>
                    <div className="text-center col-md-12">
                        <h1>Detalle</h1>
                        {productos.length === 0 ? <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="Loading"/> : <ItemDetail productos={productos} />}
                    </div>
                </>
        )
        }
export default ItemDetailContainer
