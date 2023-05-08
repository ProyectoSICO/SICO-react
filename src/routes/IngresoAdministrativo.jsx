/* se crea la interfaz Ingreso Administrativo, que será la página de inicio para los colaboradores de la empresa que utilice el aplicativo.  Aunque, existes 3 tipos de usuarios (Admnistrador, Asignador y Servicio al Usuario, se realiza solamente la interfaz de ingreso general, ya que en el momento de verificar permisos de ingreso, se realizará la diferenciación por permisos de acceso).  Se crea formulario y se importan las extensiones requeridoas y los componentes Conini para la autenticación, Links para el redireccionamiento a la página de recuperar contraseña y Footer como pie de página */

import Usuario1 from "../imagenes/Usuario1.png";
import logo from "../imagenes/Logo SICO.png";
import Conini from "../componentes/Conini";
import Links from "../componentes/Links";
import Footer from "../componentes/Footer";

export default function IngresoAdministrativo() {

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
          <div >
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
