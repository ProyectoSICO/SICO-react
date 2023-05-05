import Registro from './pages/Registro';
import Iniciodesesion from './pages/iniciodeseion';
import InicioAdministrativo from './pages/inicioAdministrativo';
import InicioAsignador from './pages/inicioAsignador';
import Iniciodeservicio from './pages/iniciodeservicio';
import './styles/estilo.css';
import './styles/inicio.css';
import './styles/container.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registro/>}/>
       <Route path='/iniciodesesion' element={<Iniciodesesion/>}/>
       <Route path='/InicioAdministrativo' element={<InicioAdministrativo/>}/>
       <Route path='/InicioAsignador' element={<InicioAsignador/>}/>
       <Route path='/Iniciodeservicio' element={<Iniciodeservicio/>}/>
      </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
