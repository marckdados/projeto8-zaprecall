import Cards from "../Cards/Cards";
import Concluidos from "../Concluidos/Concluidos";
import "./style.css";

export default function TelaCards({ logoMobile }) {
  const deck = [
    {
      pergunta: "O que é JSX?",
      reposta: "Uma extensão de linguagem do JavaScript",
      tapped: false,
    },
    {
      pergunta: "O React é __",
      reposta: "uma biblioteca JavaScript para construção de interfaces",
      tapped: false,
    },
    {
      pergunta: "Componentes devem iniciar com",
      reposta: "letra maiúscula",
      tapped: false,
    },
    {
      pergunta: "Podemos colocar __ dentro do JSX",
      respota: "expressões",
      tapped: false,
    },
  ];

  return (
    <div className="tela-dois">
      <div className="logo-cards">
        <img src={logoMobile} alt="" />
        <h1 className="titulo-inicio">ZapRecall</h1>
      </div>
      <div className="caixa-cards">
        {deck.map((card, index) => (
          <Cards
            pergunta={card.pergunta}
            resposta={card.respota}
            index={index}
            isTapped={card.tapped}
          />
        ))}
      </div>
      <div className="caixa-concluidos">
        <Concluidos />
      </div>
    </div>
  );
}
