import type { Card } from "./GameLogic";

interface GameCardProps {
  index: number;
  char: Card;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export default function GameCard({
  index,
  char,
  isFlipped,
  isMatched,
  onClick,
}: GameCardProps) {
  return (
    <figure
      className={`gameCards ${isMatched ? "matched" : ""} ${
        isFlipped ? "flipped" : ""
      }`}
      key={`${char.order}-${index}`}
    >
      {isFlipped || isMatched ? (
        <img
          src={`${import.meta.env.VITE_API_URL}${char.image}`}
          alt={char.name}
        />
      ) : (
        <img
          onClick={onClick}
          onKeyUp={onClick}
          className="background-card-flipped"
          src="public\smash-color.png"
          alt="Dos de l'image omg"
        />
      )}
    </figure>
  );
}
