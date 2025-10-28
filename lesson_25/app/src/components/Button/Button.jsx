import "./Button.css";

const Button = ({ text, onClick }) => {
  if (!text) {
    return;
  }

  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
