import "./App.css";
import Menu from "./componentes/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskList } from "./pages/Tareas";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import { lazy, Suspense } from "react";

function App() {
  const Tareass = lazy(()=>import("./pages/Tareas")); 
  const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));

  return (
    <div className="App">
      <BrowserRouter>
          <Menu />
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
