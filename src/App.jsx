import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <img
        src="/image/musashi.webp"
        alt="photo of miyamoto musashi"
        width={150}
        height={150}
      />
      <div className="advice-card">
        <div className="display"></div>
        <button>Get Advice</button>
      </div>
    </div>
  );
}

export default App;
