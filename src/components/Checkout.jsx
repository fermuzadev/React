import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { getFirestore, collection, addDoc} from 'firebase/firestore';
import { Link } from 'react-router-dom';


function Checkout() {

    const { cart, precioTotal, vaciarCarrito} = useContext(CartContext);
    const [name, setName] = useState('');
    const [phone, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [validacion, setValidacion] = useState(false)

    const handleForm  = (e) => {
        e.preventDefault()
        if (validacion) {
        const order = {
            buyer: {name, phone, email},
            items: cart,
            date: new Date(),
            total: precioTotal()
        }
        console.log(order)
        const db = getFirestore()

        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(resp => {
            if (resp.id) {
                vaciarCarrito();
                alert("Su pedido nro. " + resp.id + "se ha generado con éxito") 
            }
        })
    
    
    }else{
            alert("Los correos no coinciden")
        }
    }
    
    return (
        
    <>
    <form>
        <div className="form-group">
            <h1>Finalizar Pedido</h1>
            <label>Nombre</label>
            <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Ingrese su nombre" required />
        </div>
        <div className="form-group">
            <label>Telefono</label>
            <input onChange={(e) => setTelefono(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ingrese su teléfono" required />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ingrese su mail" required />
        </div>
        <div className="form-group">
            <label>Reingrese Email</label>
            <input onChange={(e) => e.target.value === email ? setValidacion(true) : false} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Vuelva a ingresar su mail" required/>
        </div>
        <button onClick={handleForm} className='btn btn-primary mt-3 m-5' type='submit'>Enviar</button>
        <Link to='/' className="btn btn-success mt-3 m-5"> Ir a inicio </Link>
    </form>
    </>
    )
}

export default Checkout