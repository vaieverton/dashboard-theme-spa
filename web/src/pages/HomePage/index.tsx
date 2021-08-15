import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const HomePage: React.FC = () => {

  return (
    <div className="container">
      {/* <h2>Oi, sou Everton, programador, e estava me perguntando como
        mostrar meus conhecimentos de maneira prática e efetiva. <br /> <br />
        Então decidi fazer um <Link to="/dashboard" style={{color: 'gray'}}>dashboard</Link> listando ele, você pode escolher clicando ao lado
      </h2> */}
      
      <h2>
        Olá, bem vindo ao projeto Dashboard!
      </h2>

      <p>Aqui você encontra o código que criou esse site</p>

      <p>O dashboard contém: Mudança de tema (Escuro | Claro), barra lateral colapsável, SPA, Switch, etc...</p>
      
    </div>
  );
};

export default HomePage;
