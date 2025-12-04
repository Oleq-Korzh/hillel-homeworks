import { useSelector } from "react-redux";
import { Link } from "react-router";
import { ROUTES } from "../helpers/routes";
import PreviewCharactersList from "../components/PreviewCharactersList/PreviewCharactersList";
import Loader from "../components/Loader/Loader";

const MainPage = () => {
  const previewList = useSelector(
    (state) => state.characters.previewCharacters
  );

  return (
    <>
      <Loader />
      <div>
        <div>
          <h2>Персонажи:</h2>
          <PreviewCharactersList list={previewList} />
          <Link to={ROUTES.characters}>Все персонажи</Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
