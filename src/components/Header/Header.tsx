import Navigation from "../Navigation/Navigation";
import { HeaderStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled className="main-header">
      <Navigation />
      <h1 className="main-header__title">Community Social Media</h1>
    </HeaderStyled>
  );
};

export default Header;
