import { useState, useEffect } from "react";
import './MedicationList.css';
import Navigation from "./Navigation";

const MedicationList = () => {
    const [medicamentos, setMedicamentos] = useState([]);
    const [busca, setBusca] = useState('');
    const [medicamentosFiltrados, setMedicamentosFiltrados] = useState([]);

    useEffect(() => {
        const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];
        setMedicamentos(medicamentos);
    }, []);

    useEffect(() => {
        const resultado = medicamentos.filter(medicamento =>
            medicamento.nomeMedicamento.toLowerCase().includes(busca.toLowerCase())
        );
        setMedicamentosFiltrados(resultado);
    }, [busca, medicamentos]);

    return (
        <div className="container">
            <Navigation />
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="mt-5">
                        <input
                            type="text"
                            className="form-control"
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            placeholder="Buscar medicamento"
                        />
                    </div>
                    <div className="row mt-3">
                        {medicamentosFiltrados.map((medicamento, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">{medicamento.nomeMedicamento}</h2>
                                        <p className="card-text">Laboratório: {medicamento.nomeLaboratorio}</p>
                                        <p className="card-text">Dosagem: {medicamento.dosagem}</p>
                                        <p className="card-text">Descrição: {medicamento.descricao}</p>
                                        <p className="card-text">Preço Unitário: {medicamento.precoUnitario}</p>
                                        <p className="card-text">Tipo: {medicamento.tipo}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MedicationList;