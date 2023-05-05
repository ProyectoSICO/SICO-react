import React  from 'react';
import Usuario1 from './img/Usuario1.png';
import logo from './img/Sico.png';
import '../components/Conini';
import Conini from '../components/Conini';
import '../components/link';
import Link from '../components/link';




const iniciodeservicio = () => {

   return (
   <div>
      <header>
        <img src= {logo} className='logo1' alt="logo"/>
        <br/>
        <br/>
        <div align="center"><img src={Usuario1} className='usu' alt='persona' style={{width:"69px"} }/></div>
        </header>
  <div class="formulario2">
  <br/>
  <form method="post">
  <div class="username2">
          <input class="reglon2 " type="text" id="op1" placeholder="Correo Institucional" autofocus required/>
        </div>
   <div>
   <Conini/>
   </div>
   <div>
   <Link/>
    </div>
    <br/>    
    <div className='bot4'>
        <input  className='bot5' type='submit' value= "Iniciar" />
        </div>
     <br/> 
  </form>
</div>
<br/>
 <br/>
 <br/>
 <br/>
      <div className="entregar" href="https://lineadecodigo.com/html/c-de-copyright/">© 2022 Copyright: Todos los derechos
      Reservados-SICO.com
    </div>
</div>

    
    )
};
export default iniciodeservicio;