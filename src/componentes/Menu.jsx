import { Link } from "react-router-dom"

function Menu() {
  return (
    <>
        <h2>Menu:</h2>
      <nav>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/tareas'}>Tareas</Link>
            </li>
            <li>
                <Link to={'/sobre-nosotros'}>Sobre Nosotros</Link>
            </li>
        </ul> 
      </nav>  

    </>
  )
}

export default Menu