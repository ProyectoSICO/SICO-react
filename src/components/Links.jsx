/* componente para acceso a la página de recuperar contraseña  */

import { useState } from "react";


export default function Links() {
  const [showPwd, setShowPwd] = useState(true)
  return <div className="razon" align="center" >
    <div className="position-absolute pointer pwd-icon" onClick={() => setShowPwd(!showPwd)} style={{ float: "23%" }}>
      {showPwd ? <svg aria-hidden="true" focusable="false" class="icon" xmlns=" http://www.w3.org/2000/svg " viewBox=" 0 0 448 512 " width="1em" height="1em"><path d=" M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z " /></svg>
        : <svg aria-hidden="true" focusable="false" class="icon" xmlns=" http://www.w3.org/2000/svg " viewBox=" 0 0 448 512 " width="1em" height="1em"><path d=" M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5 -12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z " /></svg>}
      <a type={showPwd ? "text" : "password"} className="razon" href="#">Recuperar Contraseña</a>
    </div>
  </div>
};

