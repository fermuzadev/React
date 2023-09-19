import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <Link to="/"> <img src="https://bloglost815.files.wordpress.com/2014/12/pink_floyd_logo.png" alt="Pink Floyd" width={180}/> </Link>
                </div>
                <div className="col">
                    <ul class="nav d-flex justify-content-end align-items-center">
                        <li class="nav-item">
                            <Link class="nav-link active text-light" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="./Integrantes">Integrantes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="./Discografia">Discografia</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header;