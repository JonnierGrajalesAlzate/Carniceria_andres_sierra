import { Link } from "react-router-dom"
import "../conocenos/conocenos.css"

export default function Conocenos() {
    return (
        <>
            <body>
                <nav>
                    <li>
                        <Link href="./index.html" >Inicio</Link>
                        <Link to={"/conocenos"} class="activa">Quienes somos</Link>
                    </li>
                    <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                    <li>
                        <Link to={"/pedidos"}>Productos</Link>
                        <Link to={"contacto"}>Contacto</Link>
                    </li>
                </nav>
                <div className="caja1">
                    <h2>QUIENES SOMOS</h2>
                    <p className="parrafo">La carnicería Andrés Sierra opera con un personal con experiencia, esto
                        nos convierte en un establecimiento que cuenta con un servicio optimo y satisfactorio
                        para aquellas personas que consumen de nuestros productos.</p>
                </div>
                <div className="contenedorMVI">
                    <div className="izquierda">
                        <h2 className="mision">Misión</h2>
                        <p className="parrafo">Somos una carnicería dedicada a la prestación de servicio
                            al público, brindando productos de calidad y bajo costo a nuestros clientes.</p>

                        <h2 className="mision">Visión</h2>
                        <p className="parrafo">Para el año 2026 la carnicería Andrés Sierra prestará de sus
                            servicios por todo Santa Elena, siendo asi un referente de carnes de calidad por
                            todo el corregimiento.</p>
                    </div>

                    <aside className="imgbody">
                        <img src="https://news.agrofystatic.com/carne-carniceria-203759.jpg?d=500x375" alt="" />
                    </aside>

                </div>
            </body>
            <footer>
                <div class="imagen">
                    <img src="./imagenes/logo bn_Mesa de trabajo 1.png" alt="" />
                </div>
                <div class="contenido">
                    <div class="textos">
                        <h4>Contacto</h4>
                        <p>3147175537</p>
                    </div>
                    <div class="textos">
                        <h4>Horarios</h4>
                        <p>Nuestros servicios van desde las 8am hasta las 8pm de lunes a sabado <br />
                            Los domingos Nuestros servicios van desde las 8am hasta las 2pm
                        </p>
                    </div>
                    <div class="icon">
                        <svg heigth="80" width="80">
                            <circle cx="40" cy="40" stroke="white" stroke-width="4" fill="none"></circle>
                        </svg>
                        <i class='bx bxl-facebook-circle'></i>

                    </div>

                    <div class="icon">
                        <svg heigth="80" width="80">
                            <circle cx="40" cy="40" stroke="white" stroke-width="4" fill="none"></circle>
                        </svg>
                        <i class="fa-brands fa-tiktok"></i>

                    </div>
                    <div class="icon">
                        <svg heigth="80" width="80">
                            <circle cx="40" cy="40" stroke="white" stroke-width="4" fill="none"></circle>
                        </svg>
                        <i class='bx bxl-instagram'></i>
                    </div>
                    <div class="textos">
                        <h4>Direccion</h4>
                        <p>Vía Vda. Mazo, Santa Elena, Medellín, Antioquia</p>
                    </div>

                </div>
                <div class="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.5251584926393!2d-75.49555875382457!3d6.233914035712934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4427ba57cfd6ed%3A0x9cf641e74848383d!2sPUNTO%20DE%20VENTA%20LA%20GRANJA!5e0!3m2!1ses!2sco!4v1684432900628!5m2!1ses!2sco"
                        width="1350" height="600" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </footer>
        </>
    )
}