import { useState } from "react";
import { useCountdown } from "usehooks-ts";

export default function Timer() {
  const [intervalValue] = useState<number>(1000);
  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 60,
    intervalMs: intervalValue,
  });

  return (
    <div className="timer">
      <button className="timer-button" type="button" onClick={startCountdown}>
        start
      </button>
      <p>{count}</p>
      <button className="timer-button" type="button" onClick={resetCountdown}>
        reset
      </button>
    </div>
  );
}
