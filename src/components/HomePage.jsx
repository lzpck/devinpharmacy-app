import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const HomePage = () => {
    return (
        <div className="container">
            <div className="mb-4">
                <Navigation />
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cadastrar Farmácia</h5>
                            <p className="card-text">Clique aqui para cadastrar uma nova farmácia.</p>
                            <Link to="/cadastro-farmacia" className="btn btn-primary">Ir para Cadastro de Farmácia</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cadastrar Medicamento</h5>
                            <p className="card-text">Clique aqui para cadastrar um novo medicamento.</p>
                            <Link to="/cadastro-medicamento" className="btn btn-primary">Ir para Cadastro de Medicamento</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Lista de Medicamentos</h5>
                            <p className="card-text">Clique aqui para ver a lista de medicamentos.</p>
                            <Link to="/lista-medicamentos" className="btn btn-primary">Ir para Lista de Medicamentos</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">FAQ</h5>
                            <p className="card-text">Clique aqui para ver as perguntas frequentes.</p>
                            <Link to="/faq" className="btn btn-primary">Ir para FAQ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;