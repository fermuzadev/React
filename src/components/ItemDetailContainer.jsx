import {useState, useEffect} from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
// import datos from '../data/datos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const documentoRef = doc(db, "items", id );
        getDoc(documentoRef).then((snapshot) => {
            setProductos(
            {...snapshot.data(), id: snapshot.id}
            )
        })
    }, [id])
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
