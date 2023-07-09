import "./App.css";
import Menu from "./componentes/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskList } from "./pages/Tareas";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import { lazy, Suspense } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const[open,setOpen]=useState(false)
  const Tareass = lazy(()=>import("./pages/Tareas")); 
  const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));


  return (
    <div className="App">
      <BrowserRouter>
      <div className="menu-container">
        <div className="menu-trigger" onClick={()=>setOpen(!open)}>
          <FontAwesomeIcon icon={faBars}/>
        </div>
        <div className={`dropdown-menu ${open? 'active':'inactive'} `}>
          <Menu />
        </div>
      </div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tareas" element={<TaskList />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
