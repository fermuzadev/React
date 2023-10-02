import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import datos from '../data/datos.json'
import ItemList from './ItemList'

const ItemListContainer = props => {
    const [productos, setProductos] = useState([])
    
    const { id } = useParams()
    useEffect(() => {
        const data = new Promise((resolve,rejected) => {
            setTimeout(() => resolve(datos), 2000)
        })
        data.then(res => {
            if (id) {
                setProductos(res.filter(producto => producto.category === id))
            }else {
                setProductos(res)
            }
    })}, [id])
        return (
                <>
                    <div className="text-center col-md-12">
                        <h1>{props.greeting}</h1>
                        {productos.length === 0 ? <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="Loading"/> : <ItemList productos={productos} />}
                    </div>
                </>
        )
        }
export default ItemListContainer
