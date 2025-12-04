import { BrowserRouter } from "react-router";
import Content from "../Content/Content";
import Header from "../Header/Header";
import "./App.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuthAsync } from "../../store/features/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
