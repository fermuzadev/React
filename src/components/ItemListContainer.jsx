import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import datos from '../data/datos.json'
import ItemList from './ItemList'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = props => {
    const [productos, setProductos] = useState([])
    
    const { id } = useParams()
    useEffect(() => {
        const db = getFirestore()
        const itemsRef = collection(db, "items")
        const consulta = id ? query(itemsRef, where("category", "==", id)) : itemsRef

        getDocs(consulta).then((snapshot) => {
            if (id){
                setProductos(
                    snapshot.docs.map((producto) => {
                        return {...producto.data(), id: producto.id}
                    })
                    )
            }else{
            setProductos(
            snapshot.docs.map((producto) => {
                return {...producto.data(), id: producto.id}
            })
            )}
        })
    }, [id])


        return (
                <>
                    <div className="text-center col-md-12">
                    <h1>{props.greeting}</h1>
                    <h2>{id}</h2>
                        {productos.length === 0 ? <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="Loading"/> : <ItemList productos={productos} />}
                    </div>
                </>
        )
        }
export default ItemListContainer
