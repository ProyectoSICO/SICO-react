/* componente para simular máquina de escribir en frase principal de página Home  */

import Typewriter from "typewriter-effect";
import '../styles.css/deletrear.css';

export default function Deletrear() {
  return (
    <div className="Deletrear">
      <Typewriter

        onInit={(typewriter) => {

          typewriter
            .pauseFor(1000)
            .deleteAll()
            .typeString("!Regístrate y envía tus solicitudes¡")
            .start();
        }}
      />
    </div>
  );
};