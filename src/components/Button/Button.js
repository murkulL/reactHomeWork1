const Button = (props) => {
  return (
    <button onClick={props.click} className="button">
      {props.text}
    </button>
  );
};

export default Button;
