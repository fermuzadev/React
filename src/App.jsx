import NavBar from "./components/navBar";
import  Footer  from "./components/footer";
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
    return (
        <>
        <NavBar/>
        <ItemListContainer greeting="Bienvenid@ a Dos Pájaros Volando React E-Commerce"/>
        <Footer/>
        </>
    )
}
export default App;