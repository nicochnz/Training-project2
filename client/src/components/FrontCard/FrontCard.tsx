import "./FrontCard.css";
import "../Description/description.css";
import { useState } from "react";

interface ImageCard {
  image: string;
  name: string;
  order: number;
}

interface FrontCardProps {
  initialCards: ImageCard[];
}

export default function FrontCard({ initialCards }: FrontCardProps) {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleFlip = (cardId: number) => {
    setFlippedCards((prevFlipped) => {
      return prevFlipped.includes(cardId)
        ? prevFlipped.filter((id) => id !== cardId)
        : [...prevFlipped, cardId];
    });
  };

  return (
    <main className="gridcard">
      {initialCards.length > 0 ? (
        initialCards.map((char) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <figure
            onClick={() => handleFlip(char.order)}
            className={`card ${flippedCards.includes(char.order) ? "flipped" : ""}`}
            key={char.order}
          >
            {flippedCards.includes(char.order) ? (
              <>
                <img
                  src={`${import.meta.env.VITE_API_URL}${char.image}`}
                  alt={char.name}
                />
                <figcaption>{char.name}</figcaption>
              </>
            ) : (
              <>
                <figure className="card-back">Back</figure>
              </>
            )}
          </figure>
        ))
      ) : (
        <p>No cards available</p>
      )}
    </main>
  );
}
