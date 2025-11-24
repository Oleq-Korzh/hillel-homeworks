import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  countDownAsync,
  countReset,
  countUpAsync,
} from "./store/features/counter/counterActions";
import { toggleTheme } from "./store/features/theme/themeActions";

function App() {
  const { count, waiting: isWaiting } = useSelector((state) => state.counter);
  const { theme } = useSelector((state) => state.theme);
  const dispatсh = useDispatch();

  return (
    <div className={`app ${theme}`}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>Текущая тема {theme}</div>
      <div className="card">
        <h1 className="count">{count}</h1>
        <div className="buttons">
          <button
            onClick={() => {
              if (!isWaiting) {
                dispatсh(countUpAsync(2000));
                dispatсh(toggleTheme());
              }
            }}
          >
            Count up
          </button>
          <button
            onClick={() => {
              if (!isWaiting) {
                dispatсh(countDownAsync(1000));
              }
            }}
          >
            Count down
          </button>
          <button
            onClick={() => {
              if (!isWaiting) {
                dispatсh(countReset());
              }
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
