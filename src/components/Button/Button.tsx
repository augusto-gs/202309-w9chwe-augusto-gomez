interface ButtonProps {
  actionOnClick: () => void;
  type: "submit" | "button";
  text: string;
}

const Button = ({
  actionOnClick,
  type,
  text,
}: ButtonProps): React.ReactElement => (
  <button className="button" onClick={actionOnClick} type={type}>
    {text}
  </button>
);

export default Button;
