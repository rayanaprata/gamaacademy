## Assuntos abordados no curso de React

- [x] **Por que React?**

O React é uma lib para criação de interfaces utilizada na criação de SPA (Single Page Applications).

É possível chamar de framework devido ao seu ecossistema que é composto pelo ReactJS, React Native, Redux, Webpack, etc...

Vantagens de utilizar o React:

- Organização do código em blocos (componentização);
- O funcionamento de um componente não interfere em outro;
- Se um componente é removido os outros continuam funcionando.

- Divisão de funcionaliades:

  - Backend: Regras de negócio
  - Frontend: Interface

- [x] **Preparando o ambientes**

- É necessário realizar a instalação do [NodeJS](https://nodejs.org/en/).
- O node por padrão vem com o gerenciador de pacotes [NPM](https://www.npmjs.com/) instalado.
- Durante o curso utilizamos o [VS Code](https://code.visualstudio.com/).

Para iniciar o projeto:

#### 1. Entrar no repositório que você deseja iniciar o projeto.

#### 2. Rodar o comando:

    npx create-react-app gamagit

\*Você pode substituir o gamagit pelo nome que você quer dar ao seu projeto.

#### Após concluir a criação do seu projeto você pode executar o comando:

    npm start

- [ ] **Entendendo a arquitetura do React**

Fundamentos do React:

O React trabalha utilizando renderizações, ou seja, o Javascript do React pega um código HTML que foi escrito dentro do Javascript e insere no HTML, criando componentes que são renderizados dentro do HTML.

- [x] **Primeiros passos e conceitos básicos**

- Componentes
  Componentes permitem você dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente.

- Props (abreviação de properties).
  São informações que podem ser passadas para um componente para serem usados por ele. Pode ser uma string, um número, até mesmo uma função. Este valor pode então ser utilizado pelo componente que a recebe.

- State
  São dados utilizados pelo componente, privados e controlados pelo próprio. Pode ser também uma string, um objeto, um array ou um número. A diferença é que ao invés de receber a informação e somente utilizá-la, o state é privado e completamente controlado pelo componente.

- Hooks
  Um Hook é uma função especial que te permite utilizar recursos do React. Por exemplo, useState é um Hook que te permite adicionar o state do React a um componente de função.

- [x] **Consumindo dados de uma API com Axios**

Aprendemos a fazer requisições, lidar com métodos e componentes controlados nesta aula.

Fizemos uma requisição na API do GitHub para pegar os dados dos repositórios de algum usuário.

- [x] **Utilizando React Router para criar rotas**

Instalação e configuração do react-router-dom no Projeto.

- Configurar o arquivo de rotas;
- Importar o arquivo de rotas no App.js;
- Utilizando boas práticas utilizando a rota do Home como componente principal da aplicaçã utilizando 'exact'.

- [x] **Boas práticas: organização e estilo**

Criamos uma pasta components e outra pages, além disso também foram criadas pastas para as páginas de Home e Repositories (que agora se chamam index.js), que ficam dentro da pasta pages.

Fizemos a instalação e aprendemos a utilizar o Styled Components no projeto.

Aprendemos a salvar dados no Storage.

- [x] **Entendendo, na prática, o poder da programação declarativa**

Programação Imperativa: você precisa dizer tudo o que o computador precisa fazer, é necessário ser mais verboso.

Programação Declarativa: ela fala para o computador o que eu espero que aconteça em um estado específico.
