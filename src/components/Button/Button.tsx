import ButtonStyled from "./ButtonStyled";

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
  <ButtonStyled className="button" onClick={actionOnClick} type={type}>
    {text}
  </ButtonStyled>
);

export default Button;
