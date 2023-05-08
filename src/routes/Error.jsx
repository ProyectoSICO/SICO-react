/*Se crea la interfaz Error.jsx como página de infome de errores. Se importa el Hook useRouteError requerida*/

import { useRouteError } from "react-router-dom";

export default function Error() {

    const error = useRouteError();
    return <div>
        <h1>404</h1>
        ´<p>Page not found</p>
        <p>{error.statusText || error.message}</p>
    </div>
}