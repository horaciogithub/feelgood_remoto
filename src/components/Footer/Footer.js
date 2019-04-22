import React, { Component } from 'react';
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="text-center">
                <div className="social">
                    <a href="https://twitter.com/?lang=es" title="Síguenos en Twitter!" rel="no_opener">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div className="social">
                    <a href="https://es-es.facebook.com/" title="Síguenos en Facebook!" rel="no_opener">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.instagram.com/?hl=es" title="Síguenos en Instagram!" rel="no_opener">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="copyrigth">
                    <p><i className="far fa-copyright"></i>2019 FeelGood - Todos los derechos reservados</p>
                </div>
            </footer>
        );
    }
}