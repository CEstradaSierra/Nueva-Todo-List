import { Header } from "../componentes/Header"
import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="Home">
        <h1>Welcome to the Application focus on manage your time</h1>
        <h2>Here you will find the next application:</h2> 
        <Link to={'/tareas'}>
          <Header titleApp={"Todo-App"}/>
        </Link>
    </div>
  )
}

export default Home