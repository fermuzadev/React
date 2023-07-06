import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import  Footer  from "./components/footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";

const App = () => {
    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Program-Store"/>} />
            <Route path="/category/:id" element={<ItemListContainer greeting="Program-Store"/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="*" element={<Error404/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default App;