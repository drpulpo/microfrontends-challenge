import React from "react";
import ReactDOM from "react-dom";

import { Wrapper } from "./styles";

export const Home = () => {
  const lang='en';
  return(
      <Wrapper>
        <div className="wrapper__welcome">
        {lang==='es'?'Bienvenido a la Enciclopedia de Personajes':'Welcome to the Characters Encyclopedia'}
        </div>
        <div className="wrapper__instructions">
        {lang==='es'?'Elige tu Programa de TV favorito del menú':'Choose your favorite TV Show from the menu'}
        </div>
      </Wrapper>
  );
};
