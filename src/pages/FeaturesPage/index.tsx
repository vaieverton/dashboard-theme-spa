import React from "react";

// import { Container } from './styles';

const FeaturesPage: React.FC = () => {
  return (
    <div className="container" style={{ justifyContent: 'space-around' }}>
      <h4>Este projeto possui as seguintes caracteristicas:</h4>

      <p>
        Single Page Application - Você pode mudar de página sem a necessidade de
        recarregar
      </p>

      <p>
        Mudança de tema - Utilizando context-API e CSS, afetando todos os componentes
      </p>

      <p>Escalabilidade - Para adicionar uma nova pagina, basta mapear-la nas rotas a própria aplicação
        a adiciona no menu, faz o roteamento, etc...
      </p>
    </div>
  );
};

export default FeaturesPage;
