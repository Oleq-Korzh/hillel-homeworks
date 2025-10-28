import { useState, useEffect } from "react";
import SmileCard from "../SmileCard/SmileCard";
import Button from "../Button/Button";
import { fetchWithError, filterWinner } from "../../utils/helpers";
import { breakpoints } from "../../utils/breakpoints";
import "./App.css";

function App() {
  const [smiles, setSmiles] = useState([]);
  const [winner, setWinner] = useState(null);

  const getData = async (signal) => {
    try {
      const data = await fetchWithError(breakpoints.smiles, { signal });

      setSmiles(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getData(signal);

    return () => controller.abort();
  }, []);

  const handleSmileClick = async (id) => {
    try {
      const data = await fetchWithError(`${breakpoints.smiles}/${id}`, {
        method: "POST",
      });

      setSmiles(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowResult = () => {
    const winner = filterWinner(smiles);

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
