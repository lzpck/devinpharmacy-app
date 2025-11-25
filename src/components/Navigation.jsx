import { Link } from 'react-router-dom';
import logo from "../assets/devinpharmacy.png";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/home" className="navbar-brand">
                    <img src={logo} alt="Logo" style={{ width: '150px' }} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cadastro-farmacia" className="nav-link">Cadastro de Farmácia</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cadastro-medicamento" className="nav-link">Cadastro de Medicamento</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lista-medicamentos" className="nav-link">Lista de Medicamentos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faq" className="nav-link">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
