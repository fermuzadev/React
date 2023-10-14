import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import  Footer  from "./components/footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";

import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout";

const App = () => {
    return (
            <BrowserRouter>
                <CartProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Developer"/>} />
                    <Route path="/React" element={<ItemListContainer greeting="Developer"/>} />
                    <Route path="/category/:id" element={<ItemListContainer greeting="Developer"/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="*" element={<Error404/>} />
                </Routes>
                <Footer/>
                </CartProvider>
            </BrowserRouter>     
    )
}

export default App;