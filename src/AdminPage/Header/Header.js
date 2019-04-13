import React from 'react';
import "./header.css";

const header = () => {
    return (
        <header className="pt-5 pb-5 mb-5">
            <div className="col-1 logout">
                <button type="button" className="btn btn-outline-default waves-effect">
                    <i className="fas fa-sign-out-alt"></i> Salir
                </button>
            </div>
            <div className="col-12">
                <h1 className="text-center text-uppercase">Panel de administración</h1>
            </div>
        </header>
    );
}

export default header;