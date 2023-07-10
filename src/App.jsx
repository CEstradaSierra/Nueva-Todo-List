import "./App.css";
import Menu from "./componentes/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskList } from "./pages/Tareas";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import { lazy, Suspense } from "react";
import {VStack, Flex, Heading ,IconButton} from "@chakra-ui/react";
import {useColorMode} from "@chakra-ui/color-mode"
import {FaMoon,FaSun} from "react-icons/fa"

function App() {
  const{colorMode,toggleColorMode}=useColorMode()
  const isDark= colorMode==="dark"
  const Tareass = lazy(()=>import("./pages/Tareas")); 
  const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));


  return (

      <BrowserRouter>
        <VStack>
            <Flex w="100%"justify="space-between" align="flex-start" pt={5} px={5}>
              <Heading  >
                <IconButton size="lg"icon={isDark? <FaSun/>:<FaMoon/>} onClick={toggleColorMode} isRound={true} />
              </Heading>
              <Menu />
            </Flex>
        </VStack>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tareas" element={<TaskList />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

  );
}

export default App;
