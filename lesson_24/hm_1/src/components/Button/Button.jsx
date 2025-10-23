import "./Button.css";

const Button = ({ text, type = "button", onClick }) => {
  if (!text) {
    return null;
  }

  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
