import "./styles/App.css";
import advices from "./data/advices.js";
import { useState } from "react";
function App() {
  let randomNumber = Math.floor(Math.random() * advices.length);
  const [id, setID] = useState(randomNumber);
  const [count, setCount] = useState(0);

  function countAdvices() {
    setCount((c) => c + 1);
  }

  function getAdvice() {
    setID(randomNumber);
    countAdvices();
  }

  return (
    <div className="wrapper">
      <img
        src="/image/musashi.webp"
        alt="photo of miyamoto musashi"
        width={150}
        height={150}
      />
      <div className="advice-card">
        <div className="display">
          {advices.find((advice) => advice.id === id)?.advice}
        </div>
        <p>
          {count >= 100
            ? "You have read all the advices."
            : `You have read ${count} advice${count === 1 ? "" : "s"}.`}
        </p>

        <button onClick={getAdvice}>Get Advice</button>
      </div>
    </div>
  );
}

export default App;
