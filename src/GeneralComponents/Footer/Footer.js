import React from 'react';
import "./footer.css";

const header = () => {
    return (
        <footer id="fourth" className="text-center">
            <div className="social">
                <a href="https://twitter.com/?lang=es" title="Síguenos en Twitter!" rel="no_opener">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </div>
            <div className="social">
                <a href="https://es-es.facebook.com/" title="Síguenos en Facebook!" rel="no_opener">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/?hl=es" title="Síguenos en Instagram!" rel="no_opener">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
            <div className="copyrigth">
                <p><i className="fa fa-copyright" aria-hidden="true"></i>2018 FeelGood - Todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default header;