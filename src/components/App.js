import React from "react";
import TelaCards from "./TelaCards/TelaCards";
import TelaInicial from "./TelaInicial/TelaInicial";
import "../css/reset.css";
import "../css/style.css";
import logo from "../images/logo.png";
import logoMobile from "../images/logo-pequeno.png";

export default function App() {
  const [screen, setScreen] = React.useState(true);
  return (
    <>
      {screen ? (
        <div className="fundo">
          <TelaInicial logo={logo} />
          <div
            className="botao-inicio"
            onClick={() => {
              setScreen(!screen);
            }}
          >
            Iniciar Recall!
          </div>
        </div>
      ) : (
        <div>
          <TelaCards logoMobile={logoMobile} />
        </div>
      )}
    </>
  );
}
