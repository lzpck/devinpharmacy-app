import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";

function RegisterPharmacyPage() {
    const [razaoSocial, setRazaoSocial] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [nomeFantasia, setNomeFantasia] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [cep, setCep] = useState("");
    const [fetchingCep, setFetchingCep] = useState(false);
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [complemento, setComplemento] = useState("");

    useEffect(() => {
        if (cep.length !== 8) {
            return;
        }

        if (fetchingCep) {
            return;
        }

        setFetchingCep(true);

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((data) => {
                if (data.erro) {
                    toast.error("CEP inválido.");
                } else {
                    setRua(data.logradouro);
                    setBairro(data.bairro);
                    setCidade(data.localidade);
                    setEstado(data.uf);
                }
            })
            .catch(() => {
                toast.error("Erro ao buscar CEP.");
            })
            .finally(() => {
                setFetchingCep(false);
            });
    }, [cep]);  // Monitorar a variável cep

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validação dos campos de entrada
        if (!razaoSocial || !cnpj || !nomeFantasia || !email || !celular || !cep || !rua || !numero || !bairro || !cidade || !estado) {
            toast.error("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        //Recupera os dados existentes
        let farmacias = JSON.parse(localStorage.getItem('pharmacyData')) || [];

        //Salvar dados no localStorage
        const novaFarmacia = {
            razaoSocial,
            cnpj,
            nomeFantasia,
            email,
            telefone,
            celular,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            complemento,
        };

        // Adiciona a nova farmácia à lista
        farmacias.push(novaFarmacia);

        // Salva a lista atualizada de volta ao localStorage
        localStorage.setItem('pharmacyData', JSON.stringify(pharmacyData));

        // Exibir mensagem de sucesso
        toast.success("Farmácia cadastrada com sucesso!");
    };

    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                        <form className="mt-5" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Razão Social</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="razaoSocial"
                                            value={razaoSocial}
                                            onChange={(e) => setRazaoSocial(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>CNPJ</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cnpj"
                                            value={cnpj}
                                            onChange={(e) => setCnpj(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Nome Fantasia</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nomeFantasia"
                                            value={nomeFantasia}
                                            onChange={(e) => setNomeFantasia(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>E-mail</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Telefone</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="telefone"
                                            value={telefone}
                                            onChange={(e) => setTelefone(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Celular</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="celular"
                                            value={celular}
                                            onChange={(e) => setCelular(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>CEP</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cep"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Logradouro</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="rua"
                                    value={rua}
                                    onChange={(e) => setRua(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Número</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="numero"
                                            value={numero}
                                            onChange={(e) => setNumero(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Bairro</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="bairro"
                                            value={bairro}
                                            onChange={(e) => setBairro(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cidade</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cidade"
                                            value={cidade}
                                            onChange={(e) => setCidade(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Estado</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="estado"
                                            value={estado}
                                            onChange={(e) => setEstado(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Complemento</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="complemento"
                                    value={complemento}
                                    onChange={(e) => setComplemento(e.target.value)}
                                />
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                        <div style={{ marginBottom: '50px' }}></div> {/* Espaço em branco */}
                    </div>
                </div>
            </div>
        </>
    );
}


export default RegisterPharmacyPage;