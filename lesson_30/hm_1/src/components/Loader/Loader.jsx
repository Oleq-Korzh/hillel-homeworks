import { useSelector } from "react-redux";
import "./Loader.scss";

const Loader = () => {
  const { isLoading } = useSelector((state) => state.loader);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loader__placeholder">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
