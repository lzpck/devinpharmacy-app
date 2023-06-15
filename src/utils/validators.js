// Função para validar um email
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Função para validar uma senha
export function validatePassword(password) {
    // Deve conter pelo menos 6 caracteres e incluir números e letras
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return re.test(password);
}