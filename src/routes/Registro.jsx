/* Se crea la interfaz Registro para que los usuarios nuevos soliciten a través del ingreso de datos, acceso a la apliación.  Se crea formulario y se importan las extensiones requeridas y los componentes Contraseña para la autenticación, Volver para el redireccionamiento a la página de recuperar contraseña y Footer como pie de página */

import logo from "../imagenes/Logo SICO.png";
import usuario from "../imagenes/usuario.png";
import Contraseña from "../componentes/Contraseña";
import Volver from "../componentes/Volver";
import Footer from "../componentes/Footer";

export default function Registro() {
  return (
    <div>
      <header>
        <img src={logo} className='logo1' alt="logo" />
      </header>
      <a><img src={usuario} alt="personaje"
        style={{ marginTop: "145px", margin: "100px", float: "left", width: "145px" }} /></a>
      <form className='formulario'>
        <div className="nombre">
          <input type="text" class="nombre2" name="txtnombre" placeholder="Nombre Completo" autofocus required style={{ float: "left" }}
          />
        </div>
        <div className="nom1">
          <select className="nom2" aria-label="Default select example" autofocus required style={{ float: "right" }} >
            <option selected>Localidad</option>
            <option value="1">Antonio Nariño</option>
            <option value="2">Barrios Unidos </option>
            <option value="3">Bosa </option>
            <option value="4">Chapinero </option>
            <option value="5">Ciudad Bolivar</option>
            <option value="6">Engativa</option>
            <option value="7">Fontibon </option>
            <option value="8">Kennedy</option>
            <option value="9">La candelaria</option>
            <option value="10">Los martires </option>
            <option value="11">Puente aranda</option>
            <option value="12">Rafael uribe uribe </option>
            <option value="13">San cristobal </option>
            <option value="14">Santa fe </option>
            <option value="15">Suba</option>
            <option value="16">Sumapaz </option>
            <option value="17">Teusaquillo </option>
            <option value="18">Tunjuelito</option>
            <option value="19"> Usaquen</option>
            <option value="20">Usme</option>
          </select>
        </div>
        <div className="nombre">
          <input type="text" className="nombre2" name="txtnombre" placeholder="Nacionalidad" autofocus required
            style={{ float: "left" }} />
        </div>
        <div className="nombre">
          <input type="text" className="nombre2" name="txtnombre" placeholder="Direccion" autofocus required
            style={{ float: "right" }} />
        </div>
        <div className="nom1">
          <select className="nom2" aria-label="Default select example" autofocus required style={{ float: "left" }} >
            <option selected>Tipo de documento</option>
            <option value="1">Cedula de ciudadania</option>
            <option value="2">Cedula de extranjeria</option>
            <option value="3">Tarjeta de indentidad </option>
            <option value="3">Otros </option>
          </select>
        </div>
        <div className="nombre">
          <input type="number" className="nombre2" name="txtnumber" placeholder="Numero de documento" autofocus required
            style={{ float: "right" }} />
        </div>
        <div className="nombre">
          <input type="number" className="nombre2" name="txtnumber" placeholder="Telefono" autofocus required
            style={{ float: "left" }} />
        </div>
        <div className="nombre">
          <input type="email" className="nombre2" name="txtnumber" placeholder="Correo electronico" autofocus required
            style={{ float: "right" }} />
        </div>
        <div>
          <Contraseña />
        </div>
        <div className='boton1'>
          <input className='boton2' type='submit' value="Registrar" />
        </div>
      </form>
      <div >
        <Volver />
      </div>
      <Footer />
    </div>
  )
};
