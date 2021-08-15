import React from "react";

import "./styles.scss";

const HomePage: React.FC = () => {

  return (
    <div className="container">      
      <h2>Olá, bem vindo ao projeto Dashboard!</h2>

      <p><a href="https://github.com/vaieverton/dashboard-theme-spa" target="_blank noreferrer">Aqui</a> você encontra o código que criou esse site</p>

      <p>A estrutura do dashboard contém: Mudança de tema (Dark | Light), barra lateral colapsável, SPA, Switch, etc...</p>

      <h4>O foco do projeto não é estilização, e sim, a estrutura em React</h4>
      <p>(confira o código)</p>
      
    </div>
  );
};

export default HomePage;
