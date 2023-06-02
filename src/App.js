<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Inicio from "./pages/Inicio";
import Footer from "./pages/footer";
import Integrantes from "./pages/Integrantes";
import Discografia from "./pages/Discografia";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="text-light bg-dark">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/Integrantes" element={<Integrantes/>}></Route>
        <Route path="/Discografia" element={<Discografia/>}></Route>
        <Route path="/*" element={<Error404/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> bdad01c2a2dc0b48a819e4d02538409d68c499e7
}

export default App;
