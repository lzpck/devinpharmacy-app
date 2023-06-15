import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext.jsx";
import { validateEmail, validatePassword } from "../utils/validators";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/devinpharmacy.png";

// Esta é uma lista de usuários de teste
const testUsers = [
    { email: 'admin@example.com', password: 'admin1' },
];

// Esta função verifica se o e-mail e a senha fornecidos correspondem a um dos usuários de teste
const authenticateUser = (email, password) => {
    for (const user of testUsers) {
        if (user.email === email && user.password === password) {
            return user;
        }
    }
    return null;
};

// Componente da página de login
function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validação dos campos de input
        if (validateEmail(email) && validatePassword(password)) {
            const user = authenticateUser(email, password);

            if (user) {
                setUser({ user });
                navigate("/home");
            } else {
                alert("E-mail ou senha incorretos");
            }
        } else {
            alert("Por favor, insira um email e uma senha válidos");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                    <form className="mt-5" onSubmit={handleSubmit}>
                        <div className="text-center mb-4">
                            <img src={logo} alt="Logo" style={{ width: '300px' }} />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mt-3 mt-md-4">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mt-3 mt-md-4">
                            <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;