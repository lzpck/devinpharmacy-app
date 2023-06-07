import React, { useState, useContext } from "react";

const UserContext = React.createContext();

// Componente para fornecer o estado do usuário para os componentes filhos
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children} 
        </UserContext.Provider>
    );
}

// Hook personalizado para usar o contexto do usuário
export function useUser() {
    return useContext(UserContext);
  }