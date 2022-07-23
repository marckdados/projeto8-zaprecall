import "./style.css";
import { useState } from "react";
import icone from "../../images/Vector.svg";
export default function Cards({ card }) {
  const [isTapped, setIsTapped] = useState(card.tapped);

  function tapCard() {
    card.tapped = !isTapped;
    setIsTapped(card.tapped);
  }

  return (
    <div className="flashcard">on</div>
    //<span>Pergunta {index + 1}</span>
    //<ion-icon name="play-outline" onClick={() => {}}></ion-icon>
  );
}
