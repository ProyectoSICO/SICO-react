/* componente para importar linea de información al footer de Home  */

import "../styles.css/footerhome.css"

export default function Footer() {
    const year = new Date().getFullYear();

    return (

        <footer>
            <div className="contenedorFooterHome">
                <div class="list-group">
                    <a class="list-group-item" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="list-group-item" href="#"><i class="fab fa-google"></i></a>
                    <a class="list-group-item" href="#"><i class="fab fa-youtube"></i></a>
                    <a class="list-group-item" href="#"><i class="fab fa-whatsapp"></i></a>
                </div>
                <h4>
                    {`Copyright © Todos los derechos Reservados-SICO.com ${year}`}
                </h4>
            </div>
        </footer>
    )
};