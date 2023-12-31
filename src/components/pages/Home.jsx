import React from "react";
import Contacto from "../Contacto";
import '../../styles/animations.css';


function Home() {
  return (
    <div className="Home" id="scroll-animate-main">
      <div className="wrapper-parallax">
        <div className="parallax-container">
          <video autoPlay loop muted playsInline id="megavideofinca">
            <source
              src="/video/Finca-propia-sin-sonido-arreglo-1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <section id="fincaPropia"></section>
        <div className="linea-dorada"></div>
        <div className="Home content">
          <section className="cards">
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">Viví la experiencia</p>
                <p className="subtitulo-dorado">
                  Disfrutá de ser dueño <br /> de tu propio vino
                </p>
              </div>
            </section>
            <div className="image-cards">
              <article className="expresion">
                <div>
                  <img src="/Images/home/procesos-04.jpg" alt="expresión" />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/grupo.jpeg"
                   /*  src="/Images/home/IMG_4568-scaled-e1680126418462.jpg" */
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="dueño">
                <div>
                  <img
                   /*  src="/Images/home/MG_0160-scaled-e1680126635925.jpg" */
                    src="/Images/cande/chicosBrindando.jpg"
                    alt="dueño"
                  />
                </div>
              </article>
            </div>
          </section>

          <section className="cards">
            <div className="image-cards">
              <article className="expresion">
                <div>
                  <img
                    src="/Images/Finca/FincaPropiaMar20-198-scaled.jpg"
                    alt="expresión"
                  />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/cartelFamilia.jpeg"
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/Finca/FincaPropiaMar20-488-scaled.jpg"
                    alt="amigos"
                  />
                </div>
              </article>

            </div>
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">La expresión de tu Terroir</p>
                <p className="subtitulo-dorado">
                  Vinos intensos que nacen <br /> en el mejor viñedo
                </p>
              </div>
            </section>
          </section>
          <section className="cards">
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">Compartir con amigos</p>
                <p className="subtitulo-dorado">El fruto de tu producción</p>
              </div>
            </section>
            <div className="image-cards">
              <article className="expresion">
                <div>
                  <img src="/Images/cande/vidVerde.jpg" alt="expresión" />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/señores.jpeg"
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="dueño">
                <div>
                  <img
                    src="/Images/cande/fincaDron.jpeg"
                    alt="dueño"
                  />
                </div>
              </article>
            </div>
          </section>
          <section className="cards">
            <div className="image-cards">
              <article className="expresion">
                <div>
                  <img src="/Images/cande/degustacion.jpg" alt="expresión" />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src= "/Images/cande/pareja.jpg"
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="dueño">
                <div>
                  <img
                    src="/Images/cande/vidPrimerPlano.jpeg"
                    alt="dueño"
                  />
                </div>
              </article>
            </div>
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">Sé dueño</p>
                <p className="subtitulo-dorado">De la tierra</p>
              </div>
            </section>
          </section>
          <section id="serDueno"></section>
          <div className="linea-dorada"></div>
          <div className="products-title">
            <p>
              <span className="letraGrande">P</span>RODUCTOS
            </p>
          </div>
          <section className="products">
            <div className="image-cards">
              <article className="dueño">
                <div className="descripcion">
                  <p>24 Vides</p>
                </div>
                <div>
                  <img
                    src="/Images/dueno/24-vides-real-scaled.jpg"
                    alt="expresión"
                  />
                </div>
                <div className="descripcion">
                  <ul className="detail">
                    <div className="linea-dorada"></div>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      40 mts lineales de vid (100m2).
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      75 kg de uvas por cosecha.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      72 botellas de vino por año.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      Cosecha asegurada sin riesgos.
                    </li>
                  </ul>
                  <p className="total-precio">USD 5.000</p>
                  <div className="linea-dorada"></div>
                </div>
              </article>

              <article className="dueño">
                <div className="descripcion">
                  <p>Hilera</p>
                </div>
                <div>
                  <img src="/Images/dueno/hilera-scaled.jpg" alt="amigos" />
                </div>
                <div className="descripcion">
                  <ul className="detail">
                    <div className="linea-dorada"></div>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      80 mts lineales de vid(200m2)
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      150 kg de uvas por cosecha
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      144 botellas de vino por año
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      Cosecha asegurada sin riesgos.
                    </li>
                    <p className="total-precio">USD 8.000</p>
                  </ul>
                  <div className="linea-dorada"></div>
                </div>
              </article>
              <article className="dueño">
                <div className="descripcion">
                  <p>Terroir</p>
                </div>
                <div>
                  <img src="/Images/dueno/terroir-scaled.jpg" alt="dueño" />
                </div>
                <div className="descripcion">
                  <ul className="detail">
                    <div className="linea-dorada"></div>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      80 mts lineales de vid(200m2)
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      150 kg de uvas por cosecha
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      144 botellas de vino por año
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      Cosecha asegurada sin riesgos
                    </li>
                  </ul>
                  <li className="total-precio">USD 14.800 </li>
                  {/* <p className="total-precio">USD 14.800</p> */}
                  <div className="linea-dorada"></div>
                </div>
              </article>
            </div>
          </section>
          <section id="laFinca"></section>
          <p className="fraseFinal">
            VINOS PERSONALIZADOS CON FIRMA/LOGO/FRASE/DIBUJO ETIQUETA PROPIA
          </p>
          <div className="linea-dorada"></div>
          <div className="products-title-experience">
            <p>
              <span className="letraGrandeExperience">E</span>xperiencia &nbsp;
              <span className="letraGrandeExperience">P</span>ropietarios
            </p>
          </div>
          <section id="experienciaPropietarios"></section>
          <section className="products">
            <div className="image-cards-experience">
              <article className="experience-container">
                <div className="experience-descripcion">
                  <div className="container-comilla-linea">
                    <div className="texto-comillas">“</div>
                    <div className="linea-dorada2"></div>
                  </div>
                  <div className="statements">
                    <span>
                      Ser parte de Finca Propia me hace recordar a mi infancia,
                      con mi padre, caminando por el campo. <br></br>Gracias
                      totales.
                    </span>
                  </div>
                  <p className="author-statement">
                    Calendaria - Provincia de Santa Fé
                  </p>
                </div>
                <div>
                  <img
                    src="/Images/cande/familia.jpg"
                    alt="expresión"
                  />
                </div>
              </article>

              <article className="experience-container">
                <div className="experience-descripcion">
                  <div className="container-comilla-linea">
                    <div className="texto-comillas">“</div>
                    <div className="linea-dorada2"></div>
                  </div>
                  <div className="statements">
                    <span>
                      Poder compartir con Antonio y su hijo un asado en nuestro
                      viñedo, es una experiencia incomparable.
                    </span>
                  </div>
                  <div className="author-statement">
                    <p>Marco Antonio - Provincia de Chaco</p>
                  </div>
                </div>
                <div>
                  <img src="/Images/cande/brindisAmigas.jpg" alt="amigos" />
                </div>
              </article>
              <article className="experience-container">
                <div className="experience-descripcion">
                  <div className="container-comilla-linea">
                    <div className="texto-comillas">“</div>
                    <div className="linea-dorada2"></div>
                  </div>
                  <div className="statements">
                    <span>
                      Vivir las actividades como la vendimia, raleo y poda, me
                      hacen sentir viva. Salud!
                    </span>
                  </div>
                  <div className="author-statement">
                    <p>German - Provincia de Buenos Aires</p>
                  </div>
                </div>
                <div>
                  <img
                    src="/Images/cande/extranjeros.jpeg"
                    alt="dueño"
                  />
                </div>
              </article>
            </div>
          </section>
          <div className="linea-dorada"></div>

          {/* Menor a 500px se muestra el siguiente section(responsive)----------------------------------------------------------- */}
          {window.innerWidth <= 500 && (
            <section className="conditional-small-size">
              <section id="contacto"></section>
              <div className="products-title">
                <p>
                  <span className="letraGrande">C</span>ONTACTO
                </p>
              </div>
              <div className="contact-products-title">
                <p>
                  <span className="letraGrande">A</span>RGENTINA
                </p>
              </div>

              <section className="products">
                <div className="image-cards">
                  <article className="dueño2">
                    <div className="descripcion">
                      <button className="contact-media-button">
                        Ruta 88 Intersección Calle Campagnaro - Valle de Uco
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        (54) 9 11 2178-8701
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        contacto@fincapropia.com
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="social-media-button">
                        <span className="our-social-networks-text">NUESTRAS REDES</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer">

                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>

                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>
                      </button>
                    </div>


                  </article>


                </div>
              </section>
              <div className="contact-products-title">
                <p>
                  <span className="letraGrande">B</span>RASIL
                </p>
              </div>
              <section className="products">
                <div className="image-cards">
                  <article className="dueño2">
                    <div className="descripcion">
                      <button className="contact-media-button">
                        Av. Miruna 1569 - São Paulo - Brasil
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        (54) 9 11 2178-8701
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        atencion.brasil@fincapropia.com
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="social-media-button">
                        <span className="our-social-networks-text">NUESTRAS REDES</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer" >
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>
                      </button>
                    </div>
                  </article>


                </div>
              </section>
              <div className="contact-products-title">
                <p>
                  <span className="letraGrande">P</span>ARAGUAY
                </p>
              </div>
              <section className="products">
                <div className="image-cards">
                  <article className="dueño2">
                    <div className="descripcion">
                      <button className="contact-media-button">
                        Asunción: WTC torre 2 piso 10
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        (54) 9 11 2178-8701
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        atencion.paraguay@fincapropia.com
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="social-media-button">
                        <span className="our-social-networks-text">NUESTRAS REDES</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer" >
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>

                      </button>
                    </div>
                  </article>
                </div>
              </section>
              {/* -------------------------ACÁ TERMINA EL RESPONSIVE PEQUEÑO------------------------------- */}
              <div className="contact-products-title">
                <p>
                  <span className="letraGrande">C</span>ONTACTO
                </p>
              </div>
              <section className="products">
                <div className="image-cards">
                  <article className="dueño2">
                    <div className="descripcion">
                    <Contacto />
                     
                    </div>
                  </article>
                </div>
              </section>
            </section>




          )}
          {/* Mayor a 500px se muestra el siguiente section(responsive)----------------------------------------------------------- */}
          {window.innerWidth > 500 && (

            <section className="conditional-big-size">
              <section id="contacto"></section>
              <div className="products-title">
                <p>
                  <span className="letraGrande">O</span>FICINAS
                </p>
              </div>
              <section className="products">
                <div className="contact-image-cards">
                  <article className="experience-container">
                    <div className="contacto-descripcion">
                      <div className="paises-contacto">
                      </div>
                      <p>ARGENTINA</p>
                    </div>
                    <div className="container-buttons">
                      <button>
                        Ruta 88 Intersección Calle Campagnaro - Valle de Uco
                      </button>
                      <button>(54) 9 11 2178-8701</button>
                      <button>contacto@fincapropia.com</button>
                      <button className="social-media-button">
                        <span className="our-social-networks-text">NUESTRAS REDES</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>
                        {/*  <span className="image-icon">ICON</span> */}
                      </button>
                    </div>
                   {/*  <div className="author-statement">
                      <p>Subtexto final</p>
                    </div> */}
                  </article>

                  <article className="experience-container">
                    <div className="contacto-descripcion">
                      <div className="paises-contacto">
                        <p>BRASIL</p>
                      </div>
                    </div>
                    <div className="container-buttons">
                      <button>Av. Miruna 1569 - São Paulo - Brasil</button>
                      <button className="contact-button">
                        <span className="phone-number">(54) 9 11 2178-8701</span>
                      </button>

                      <button>atencion.brasil@fincapropia.com</button>
                      <button className="social-media-button">
                        <span className="our-social-networks-text">NUESTRAS REDES</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>
                        {/*  <span className="image-icon">ICON</span> */}
                      </button>
                    </div>
                 {/*    <div className="author-statement">
                      <p>Subtexto final</p>
                    </div> */}
                  </article>
                  <article className="experience-container">
                    <div className="contacto-descripcion">
                      <div className="paises-contacto">
                        <p>PARAGUAY</p>
                      </div>
                    </div>
                    <div className="container-buttons">
                      <button>Asunción: WTC torre 2 piso 10</button>
                      <button>(54) 9 11 2178-8701</button>
                      <button>atencion.paraguay@fincapropia.com</button>
                      <button className="social-media-button">
                        <span className="our-social-networks-text">NUESTRAS REDES</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>

                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>
                        {/*  <span className="image-icon">ICON</span> */}
                      </button>
                    </div>

                 {/*    <div className="author-statement">
                      <p>Subtexto final</p>
                    </div> */}
                  </article>
                </div>
              </section>

              <div className="products-title">
                <p>
                  <span className="letraGrande">C</span>ONTACTO
                </p>
              </div>
              <section className="products">
                <div className="contact-image-cards-form">
                  
                <Contacto />
             
            
                </div>
              </section>




            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
