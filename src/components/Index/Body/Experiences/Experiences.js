import React from 'react';
import "./Experiences.css";

const experiences = () => {
    return (
        <section id="experiencias">
            <div id="demo" className="carousel slide" data-ride="carousel">

                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                {/* Slides */}
                <div className="carousel-inner">
                    <div className="overlay"></div>
                    <div className="carousel-item active">
                        <img src="img/opinion1.png" alt="Opinion 1" />
                        <div className="carousel-caption">
                            <h3>Claudia Rivas</h3>
                            <p>¡Gracias a la dieta y a los ejercicios proporcionados por FeelGood he conseguido bajar de peso!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/opinion2.jpg" alt="Opinion 2" />
                        <div className="carousel-caption">
                            <h3>Raquel Ramírez</h3>
                            <p>Me siento mucho mas motivada gracias a los consejos de los expertos nutricionistas</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/opinion3.jpg" alt="Opinion 3" />
                        <div className="carousel-caption">
                            <h3>Carmen Ojeda</h3>
                            <p>¡Gracias, FeelGood, ahora me siento mucho mas ágil!</p>
                        </div>
                    </div>
                </div>

                {/* Lateral Controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </section>
    );
}

export default experiences;