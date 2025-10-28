import "./SmileCard.css";

const SmileCard = ({ emoji, votes, onClick }) => {
  return (
    <div className="smile-card" onClick={onClick}>
      <span className="smile-card__emoji">{emoji}</span>
      <span className="smile-card__votes">{votes}</span>
    </div>
  );
};

export default SmileCard;
