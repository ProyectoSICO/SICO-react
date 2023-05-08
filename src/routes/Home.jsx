import { Link } from "react-router-dom";
import Navhome from "../componentes/Navhome";
import Footerhome from "../componentes/Footerhome";
import Deletrear from "../componentes/Deletrear";
import "../styles/home.css";

export default function Home() {
    return (
        <div className="divHome">
            <Navhome />
            <div className="contenedorPrimario">
                <h1>Sistema de Correspondencia - SICO</h1>
                <p className="parrafo1">El Sistema de correspondencia SICO, es un aplicativo diseñado para responder a tus
                    requerimientos de cupos y traslados escolares en la ciudad de Bogotá, durante el año lectivo, a
                    excepción de las fechas establecidas para el proceso de matrículas del año siguiente.
                </p>
            </div>
            <Deletrear />
            <div className="contenedorBotones">
                <Link to="./Registro.jsx"><button className="button1">Registro</button></Link>
                <Link to="./InicioSesion.jsx"><button className="button1">Inicio de sesión</button></Link>
            </div>
            <div className="contenedorlienzo">
                <div className="lienzo">
                    <img className="imagen" src={require("../imagenes/carta1.png")} />
                </div>
            </div>
            <Footerhome />
        </div>
    );
};
