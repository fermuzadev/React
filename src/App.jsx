import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import  Footer  from "./components/footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Program-Store"/>} />
            <Route path="/category/:id" element={<ItemListContainer greeting="Program-Store"/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default App;