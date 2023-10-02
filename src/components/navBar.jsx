import {CartWidget} from "./CartWidget";

const navBar = () => {
    return (
        <>
        <div>
        <nav className="navbar bg-primary container-fluid">
        <a className="nav-link text-light bg-primary" aria-current="page" href="./">Dos Pájaros Volando</a>
        <ul className="nav justify-content-center bg-primary ">
            <li className="nav-item">
                <a className="nav-link text-light" href="./Remeras">Remeras</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="./Buzos">Buzos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light"href="./Camperas">Camperas</a>
            </li>
            <CartWidget className='text-light' /> 
        </ul>
        </nav>
        </div>
        </>
    )
}

export default navBar; 