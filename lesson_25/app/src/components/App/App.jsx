import { useState, useEffect } from "react";
import SmileCard from "../SmileCard/SmileCard";
import Button from "../Button/Button";
import "./App.css";

function App() {
  const [smiles, setSmiles] = useState([]);
  const [winner, setWinner] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/smiles");

      if (!response.ok) {
        throw new Error("Error smiles");
      }

      const data = await response.json();
      setSmiles(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getData();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    console.log(smiles);
  }, [smiles]);

  const handleSmileClick = async (id) => {
    const res = await fetch(`http://localhost:3000/smiles/${id}`, {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Error smiles");
    }

    const data = await res.json();
    setSmiles(data);
  };

  const handleShowResult = () => {
    const winner = smiles.reduce((acc, current) => {
      return acc.votes < current.votes ? current : acc;
    });

    setWinner(winner);
  };

  const renderSmiles = () => {
    return smiles.map((smile) => (
      <SmileCard
        key={smile.id}
        emoji={smile.emoji}
        votes={smile.votes}
        onClick={() => handleSmileClick(smile.id)}
      />
    ));
  };

  return (
    <div className="app-container">
      {smiles.length > 0 && (
        <>
          <div className="app-container__row">{renderSmiles()}</div>
          {<Button text="Show results" onClick={handleShowResult} />}
        </>
      )}
      {winner && (
        <div>
          Победитель: {winner.emoji}. Количество голосов: {winner.votes}
        </div>
      )}
    </div>
  );
}

export default App;
