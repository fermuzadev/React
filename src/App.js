import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./pages/Error404";
import Header from "./pages/Header";
import Inicio from "./pages/Inicio";
import Footer from "./pages/footer";
import Integrantes from "./pages/Integrantes";
import Discografia from "./pages/Discografia";


function App() {
  return (
    <div className="text-light bg-dark">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/Integrantes" element={<Integrantes/>}></Route>
        <Route path="/Discografia" element={<Discografia/>}></Route>
        <Route path="/*" element={<Inicio/>}></Route>
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
