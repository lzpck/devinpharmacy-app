import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navigation from "./Navigation";

function RegisterMedicinePage() {
    const [nomeMedicamento, setNomeMedicamento] = useState("");
    const [nomeLaboratorio, setNomeLaboratorio] = useState("");
    const [dosagem, setDosagem] = useState("");
    const [descricao, setDescricao] = useState("");
    const [precoUnitario, setPrecoUnitario] = useState("");
    const [tipo, setTipo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nomeMedicamento || !nomeLaboratorio || !dosagem || !precoUnitario || !tipo) {
            toast.error("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const dadosMedicamento = {
            nomeMedicamento,
            nomeLaboratorio,
            dosagem,
            descricao,
            precoUnitario,
            tipo,
        };

        let medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

        medicamentos.push(dadosMedicamento);

        localStorage.setItem('medicamentos', JSON.stringify(medicamentos));

        toast.success("Medicamento cadastrado com sucesso!");
    };

    return (
        <>
            <ToastContainer />
            <div className="container">
                <Navigation />
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                        <form className="mt-5" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nome do medicamento</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nomeMedicamento}
                                    onChange={(e) => setNomeMedicamento(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Nome do laboratório</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nomeLaboratorio}
                                    onChange={(e) => setNomeLaboratorio(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Dosagem do medicamento</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={dosagem}
                                    onChange={(e) => setDosagem(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Descrição do medicamento</label>
                                <textarea
                                    className="form-control"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Preço unitário do medicamento</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={precoUnitario}
                                    onChange={(e) => setPrecoUnitario(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Tipo do medicamento</label>
                                <select
                                    className="form-control"
                                    value={tipo}
                                    onChange={(e) => setTipo(e.target.value)}
                                    required
                                >
                                    <option value="">Selecione o tipo</option>
                                    <option value="controlado">Medicamento controlado</option>
                                    <option value="comum">Medicamento comum</option>
                                </select>
                            </div>
                            <div className="mt-4"></div> {/* Espaço em branco */}
                            <button type="submit" className="btn btn-primary btn-block">
                                Cadastrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );


}

export default RegisterMedicinePage;