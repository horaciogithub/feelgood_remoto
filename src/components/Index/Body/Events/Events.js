import React, { Component } from 'react';
import "./Events.css";


export default class Events extends Component {
    render() {
        return (
            <section id="third" className="lastContent">
                <div className="col-lg-12 headings">
                    <h2>Eventos</h2>
                    <hr className="underline" />
                </div>

                <div className="container-expand row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-responsive" src="img/g.jpg" alt="" />
                            <div className="overlay">
                                <h2>Spartan race</h2>
                                <a className="info" href="http://www.spartanrace.es/?gclid=EAIaIQobChMIkcTI98bH2gIVyuMbCh0H1QyhEAAYASAAEgKwg_D_BwE">Haz click</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-responsive" src="img/bodyCombat.jpg" alt="Body combat" />
                            <div className="overlay">
                                <h2>Body combat</h2>
                                <a className="info" href="https://www.lesmills.es/bodycombat/">Haz click</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-responsive" src="img/transgranca.jpg" alt="Trans Gran Canaria" />
                            <div className="overlay">
                                <h2>Trans Gran Canaria</h2>
                                <a className="info" href="http://www.transgrancanaria.net/">Haz click</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-responsive" src="img/taller-dietas.jpg" alt="Taller dietas" />
                            <div className="overlay">
                                <h2>Conferencia comer bien</h2>
                                <a className="info" href="http://navarra.definde.com/ficha-evento/conferencia-la-importancia-de-comer-bien-ante-el-problema-de-fibromialgia-o-fatiga-cronica-12915">Haz click</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-responsive" src="img/cursococina.jpg" alt="Curso de cocina" />
                            <div className="overlay">
                                <h2>Taller de cocina</h2>
                                <a className="info" href="http://darafeelingood.com/feeling-cooking/">Haz click</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-responsive" src="img/pil.jpg" alt="Pilates" />
                            <div className="overlay">
                                <h2>Pilates para todos</h2>
                                <a className="info" href="https://www.webconsultas.com/ejercicio-y-deporte/vida-activa/el-metodo-pilates-5866">Haz click</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}