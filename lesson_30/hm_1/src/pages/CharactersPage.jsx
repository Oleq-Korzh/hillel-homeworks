import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharactersPage,
  nextPage,
  previewPage,
  resetPage,
} from "../store/features/characters/characterSlice";
import PreviewCharactersList from "../components/PreviewCharactersList/PreviewCharactersList";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router";
import { ROUTES } from "../helpers/routes";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const { nextPageUrl, prevPageUrl, currentCharacters, currentPage } =
    useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharactersPage());
    dispatch(resetPage());
  }, [dispatch]);

  const handleSetPrevPage = () => {
    if (prevPageUrl) {
      dispatch(fetchCharactersPage({ url: prevPageUrl }));
      dispatch(previewPage());
    }
  };

  const handleSetNextPage = () => {
    if (nextPageUrl) {
      dispatch(fetchCharactersPage({ url: nextPageUrl }));
      dispatch(nextPage());
    }
  };

  return (
    <>
      <Loader />
      <div>
        <Link to={ROUTES.home}>Вернуться на главную</Link>
        <h2>Текущая страница: {currentPage}</h2>
        <div>{<PreviewCharactersList list={currentCharacters} />}</div>
        <div>
          <button className="button" onClick={() => handleSetPrevPage()}>
            Prev
          </button>
          <button className="button" onClick={() => handleSetNextPage()}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CharactersPage;
