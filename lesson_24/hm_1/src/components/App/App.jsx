import { useState } from "react";
import Button from "../Button/Button";
import "./App.css";
import Counter from "../Counter/Counter";
import data from "../../../data.json";
import List from "../List/List";

function App() {
  const [counter, setCounter] = useState(0);

  const handleUpCounter = () => {
    setCounter(counter + 1);
  };

  const handleDownCounter = () => {
    if (counter === 0) {
      return;
    }

    setCounter(counter - 1);
  };

  return (
    <div className="container">
      <div>Жмите кнопки!!!</div>
      <div className="buttons">
        <Button text="Тыц" />
        <Button text="Туц" />
        <Button text="Счетчик больше" onClick={handleUpCounter} />
        <Button text="Счетчик меньше" onClick={handleDownCounter} />
      </div>
      <div className="wrapper">
        <Counter counter={counter} />
      </div>
      <div className="wrapper">
        <List data={data} />
      </div>
    </div>
  );
}

export default App;
