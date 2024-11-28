import { useCallback, useEffect, useState } from "react";
import { getRandomCards } from "../../logic";
import GameCard from "./GameCard";
import "./Game.css";
import { useCountdown } from "usehooks-ts";

export type Card = {
  image: string;
  name: string;
  order: string;
};

export default function MemoryGame({ cards }: { cards: Card[] }) {
  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 60,
    intervalMs: 1000,
  });
  const DIFFICULTY = 18;
  const [randomCards, setRandomCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<
    { index: number; card: Card }[]
  >([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth,
  );
  const [gameTime, setGameTime] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  const initializeGame = useCallback(() => {
    const initialCards = getRandomCards(cards, DIFFICULTY);
    setRandomCards(initialCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setGameTime(null);
    setStartTime(null);
  }, [cards]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardClick = (index: number) => {
    if (matchedCards.includes(index)) return;
    const isCardAlreadyFlipped = flippedCards.some(
      (card) => card.index === index,
    );
    if (isCardAlreadyFlipped) return;
    if (flippedCards.length >= 2) return;

    if (count === 60) {
      startCountdown();
      setStartTime(Date.now());
    }

    const newFlippedCard = { index, card: randomCards[index] };
    const newFlippedCards = [...flippedCards, newFlippedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setTimeout(() => {
        const [firstCard, secondCard] = newFlippedCards;
        if (firstCard.card.order === secondCard.card.order) {
          setMatchedCards((time) => [
            ...time,
            firstCard.index,
            secondCard.index,
          ]);
        }
        setFlippedCards([]);
      }, 1000);
    }
  };

  const isGameComplete = matchedCards.length === randomCards.length;

  useEffect(() => {
    if (isGameComplete && startTime) {
      resetCountdown();
      const endTime = Date.now();
      const timeTaken = Math.floor((endTime - startTime) / 1000);
      setGameTime(timeTaken);
    }
  }, [isGameComplete, startTime, resetCountdown]);

  useEffect(() => {
    if (count <= 0) {
      alert("Temps écoulé ! Essayez à nouveau !");
      setFlippedCards([]);
      setMatchedCards([]);
      const initialCards = getRandomCards(cards, DIFFICULTY);
      setRandomCards(initialCards);
      resetCountdown();
    }
  }, [count, cards, resetCountdown]);

  return (
    <>
      {isPortrait && (
        <div className="landscape-required">
          <p>Veuillez activer le mode paysage pour jouer.</p>
        </div>
      )}
      {!isPortrait && (
        <main className="gridcardGame">
          <p className="timer">Timer : {count}</p>
          {randomCards.length > 0 ? (
            randomCards.map((char, index) => (
              <GameCard
                key={`${char.order}-${index}`}
                index={index}
                char={char}
                isFlipped={flippedCards.some((card) => card.index === index)}
                isMatched={matchedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            ))
          ) : (
            <p>No cards available</p>
          )}
          {isGameComplete && gameTime !== null && (
            <div className="game-complete">
              <p>Félicitations ! Vous avez terminé en {gameTime} secondes !</p>
              <button
                className="restart"
                type="button"
                onClick={initializeGame}
              >
                Rejouer !
              </button>
            </div>
          )}
        </main>
      )}
    </>
  );
}
