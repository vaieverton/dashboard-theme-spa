import React from "react";

import "./styles.scss";

const HomePage: React.FC = () => {

  return (
    <div className="container">      
      <h2>Olá, bem vindo ao projeto Dashboard!</h2>

      <p><a href="https://github.com/vaieverton/portfolio-web" target="_blank noreferrer">Aqui</a> você encontra o código que criou esse site</p>

      <p>A estrutura do dashboard contém: Mudança de tema (Escuro | Claro), barra lateral colapsável, SPA, Switch, etc...</p>
      
    </div>
  );
};

export default HomePage;
