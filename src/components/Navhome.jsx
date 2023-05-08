/* componente para el header de Home  */

import "../styles.css/navhome.css";
import { Link } from "react-router-dom";

export default function Navhome() {

  return (
    <nav className="navhome">
      <div className="containerNavhome">
        <img 
        className="imagenNavhome" 
        src={require("../imagenes/Logo SICO.png")}
        alt="imagen SICO" />
          <Link to="./IngresoAdministrativo.jsx"><button className="button">Ingreso Administrativo</button></Link>
      </div>
    </nav>
  )
};