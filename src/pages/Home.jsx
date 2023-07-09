import { Header } from "../componentes/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <div className="Home">
      <FontAwesomeIcon icon={faBriefcase} className="home-img"/>
      {/* <img
        className="home-img"
        src="https://images.assetsdelivery.com/compings_v2/fandijki/fandijki1808/fandijki180800104.jpg"
        alt="imagen enfocada en al productividad del manejo del tiempo"
      /> */}
      <div className="home-mini">
        <h1 className="home-titulo">
          Welcome to the Application focus on manage your time
        </h1>
        <h2 className="home-sub">Here you will find the next application:</h2>
        <Link to={"/tareas"} className="home-link">
          <Header titleApp={"Todo-App"} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
