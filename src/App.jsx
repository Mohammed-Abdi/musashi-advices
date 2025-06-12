import "./App.css";
import { useEffect, useState } from "react";
import Message from "./Message.jsx";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <>
      <div className="advice-box">
        <span className="advice">{advice}</span>
        <Message count={count} />
        <button className="advice-btn" onClick={getAdvice}>
          Get Advice
        </button>
      </div>
    </>
  );
}

export default App;
