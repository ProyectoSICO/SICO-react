import React  from 'react';
import Usuario1 from './img/Usuario1.png';
import logo from './img/Sico.png';
import '../components/cinini';
import Conini from '../components/cinini';
import '../components/link';
import Link from '../components/link';

const iniciodesesion = () => {

   return (
   <div>
      <header>
        <img src= {logo} className='logo1' alt="logo"/>
        <br/>
        <br/>
        <div align="center"><img src={Usuario1} className='usu' alt='persona' style={{width:"69px"} }/></div>
        </header>
  <div class="formulario1">
  <form method="post">
    <div class="username1">
      <input  class="reglon1 "type="text" id="op1" placeholder="Usuario"/> 
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
export default iniciodesesion;