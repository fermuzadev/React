import {CartWidget} from "./CartWidget";
import datos from '../data/datos.json'
import { Link, NavLink } from "react-router-dom";


const navBar = () => {
    
    const categorias = datos.map( producto => producto.category )
    const categ = new Set(categorias)
    return (
        <>
        <div>
        <nav className="navbar bg-primary container-fluid">
        <Link className="nav-link text-light bg-primary" aria-current="page" to="/">Dos Pájaros Volando</Link>
        <ul className="nav justify-content-center bg-primary ">
            {[...categ].map(producto => (
            <li key={producto} className="nav-item">
                <NavLink key={producto} className="nav-link text-light" to={`/category/${producto}`}>{producto}</NavLink>
            </li>
            ))}
            <CartWidget className='text-light' /> 
        </ul>
        </nav>
        </div>
        </>
    )
}

export default navBar; 