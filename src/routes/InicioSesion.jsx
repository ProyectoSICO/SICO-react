/* Se crea la interfaz inicio de sesión que es la puerta de ingreso para los usuarios registrados.  Se crea formulario y se importan las extensiones requeridoas y los componentes Conini para la autenticación, Links para el redireccionamiento a la página de recuperar contraseña y Footer como pie de página */

import Usuario1 from "../imagenes/Usuario1.png";
import logo from "../imagenes/Logo SICO.png";
import Conini from "../componentes/Conini";
import Links from "../componentes/Links";
import Footer from "../componentes/Footer";

export default function InicioSesion() {
  
  return (
    <div>
    <header>
      <img src={logo} className='logo1' alt="logo" />
      <br />
      <br />
      <div align="center"><img src={Usuario1} className='usu' alt='persona' style={{ width: "69px" }} /></div>
    </header>
    <div class="formulario2">
      <br />
      <form method="post">
        <div class="username2">
          <input class="reglon2 " type="text" id="op1" placeholder="Correo Institucional" autofocus required />
        </div>
        <div>
          <Conini />
        </div>
        <div>
          <Links />
        </div>
        <br />
        <div className='bot4'>
          <input className='bot5' type='submit' value="Iniciar" />
        </div>
        <br />
      </form>
    </div>
    <Footer />
  </div>
  )
};