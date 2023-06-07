import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext.jsx";
import { validateEmail, validatePassword } from "../utils/validators";

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
            setUser({ email });
            navigate("/pharmacies"); // Redireciona para a página de farmácias
        } else {
            alert("Por favor, insira um email e uma senha válidos");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input 
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button type="submit">Entrar</button>
        </form>
    )
}

export default LoginPage;