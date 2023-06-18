# Aplicativo DevinPharmacy

## Visão Geral

O aplicativo DevinPharmacy é um aplicativo de gestão de farmácias construído utilizando tecnologias web modernas. Ele é projetado para auxiliar na gestão de farmácias e listas de medicamentos. O aplicativo é construído usando o React, uma biblioteca JavaScript para construção de interfaces de usuário, e utiliza uma série de outras dependências como Bootstrap para estilização, e react-router-dom para roteamento.

## Estrutura do Projeto

A estrutura do projeto é organizada principalmente no diretório `src`, que contém a lógica principal do aplicativo. Os principais componentes do aplicativo incluem:

- **HomePage**: Esta é a página inicial do aplicativo. Ela fornece links de navegação para várias funcionalidades do aplicativo, como registrar uma nova farmácia, registrar um novo medicamento, visualizar a lista de medicamentos e a página de FAQ.

- **LoginPage**: Esta página fornece um formulário de login para os usuários se autenticarem. Atualmente, há uma lista de usuários de teste que podem ser usados para simular a autenticação. O sistema valida o e-mail e a senha inseridos contra essa lista de usuários de teste.

- **MedicationList**: Esta página exibe uma lista através de cards mostrando os medicamentos que foram cadastrados pelo usuário.

- **RegisterMedicinePage**: É onde os medicamentos são registrados contendo o nome do medicamento (obrigatório), nome do laboratório (obrigatório), a dosagem do medicamento (obrigatório), a descrição do medicamento (opcional), o preço unitário do medicamento (obrigatório) e se ele é comum ou de uso controlado (obrigatório).

- **RegisterPharmacyPage**: Esta é a página para cadastro das farmácias contendo a razão social (obrigatório), CNPJ (obrigatório), nome fantasia (obrigatório), e-mail (obrigatório), telefone (opcional), celular (obrigatório) e endereço em que é utilizado a API ViaCEP do IBGE Brasil para preencher automaticamente os campos disponíveis. 


## Tecnologias e Linguagens Usadas

- **React.js**: A principal biblioteca usada para construir a interface do usuário deste aplicativo. A versão atual usada é 18.2.0.
- **Bootstrap**: Um framework CSS popular usado para estilizar os componentes deste aplicativo. A versão atual usada é 5.3.0.
- **react-router-dom**: Isso é usado para gerenciar o roteamento no aplicativo. A versão atual usada é 6.12.0.
- **Vite**: Uma ferramenta de construção que é mais rápida que o Webpack e é usada para construir, servir e visualizar o projeto. A versão usada é 4.3.9.
- **ESLint**: Um linter JavaScript plugável. É usado para manter a qualidade do código e encontrar e corrigir problemas no código JavaScript. A versão usada é 8.38.0.

## Executando o Projeto

Para executar o projeto, você precisará ter o Node.js instalado em sua máquina. Uma vez que o Node.js esteja instalado, siga estas etapas:

1. Clone o repositório para sua máquina local usando `git clone https://github.com/lzpck/devinpharmacy-app.git`
2. Navegue até o diretório do projeto usando `cd devinpharmacy-app`
3. Instale as dependências do projeto executando `npm install`
4. Para iniciar o servidor de desenvolvimento, execute `npm run dev`
