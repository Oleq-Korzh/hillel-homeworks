import "./PreviewCharactersList.scss";

const PreviewCharactersList = ({ list = [] }) => {
  if (list.length === 0) {
    return <div>На данный момент нет персонажей</div>;
  }

  return (
    <div className="characters-grid">
      {list.map((item) => (
        <div className="character-card" key={item.created}>
          <h3 className="character-name">{item.name}</h3>

          <div className="character-info">
            <p>
              <span>Birth year:</span> {item.birth_year}
            </p>
            <p>
              <span>Eye color:</span> {item.eye_color}
            </p>
            <p>
              <span>Mass:</span> {item.mass} kg
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewCharactersList;
