import React from "react";
import { useState } from "react";


const Volver = () => {
    const [showPwd, setShowPwd] = useState(true)
    return  <div className="razon6" align="right">
    <div className="position-absolute pointer pwd-icon" onClick={() => setShowPwd(!showPwd)} style={{float:"23%"}}> 
      {showPwd ?<svg xmlns = " http://www.w3.org/2000/svg "  viewBox = " 0 0 448 512 " fill="currentColor" height={"1.0rem"}><path d = " M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z "/></svg>
       : <svg  xmlns = " http://www.w3.org/2000/svg "  viewBox = " 0 0 448 512 "  fill="currentColor" height={"1.0rem"}><path  d = " M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5 -12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z "/></svg>}
       <a type={showPwd ? "text" : "password"} className="razon6" href="" >Regresar</a>
    </div>
  </div>
}
export default Volver;
