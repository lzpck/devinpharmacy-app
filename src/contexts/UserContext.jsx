import { useState, useContext, createContext } from "react";
import PropTypes from 'prop-types';

const UserContext = createContext();

// Componente para fornecer o estado do usuário para os componentes filhos
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children} 
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Hook personalizado para usar o contexto do usuário
// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
    return useContext(UserContext);
  }
