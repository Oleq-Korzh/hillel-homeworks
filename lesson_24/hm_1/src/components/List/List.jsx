import "./List.css";
import ListItem from "./ListItem";

const List = ({ data = [] }) => {
  if (!data.length) {
    return <span>Лист пустой!!!</span>;
  }

  const renderList = data.map((el) => {
    return (
      <ListItem key={el.id} text={`Имя: ${el?.name}, возраст: ${el?.age}`} />
    );
  });

  return <ul>{!!renderList.length && renderList}</ul>;
};

export default List;
