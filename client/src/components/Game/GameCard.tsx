import type { Card } from "../Pages/Game-Page/GameLogic";

interface GameCardProps {
  index: number;
  char: Card;
  isFlipped: boolean;
  onCardClick: (index: number) => void;
}

export default function GameCard({
  index,
  char,
  isFlipped,
  onCardClick,
}: GameCardProps) {
  return (
    <figure className="gameCards" key={`${char.order}-${index}`}>
      <img
        src={`${import.meta.env.VITE_API_URL}${char.image}`}
        alt={char.name}
        onClick={() => onCardClick(index)}
        onKeyUp={() => onCardClick(index)}
      />
      {isFlipped ? (
        <img
          className="background-card-flipped"
          src="/logo-smash.png"
          alt="Dos de l'image omg"
        />
      ) : null}
    </figure>
  );
}
