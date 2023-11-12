import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => (
  <NavigationStyled className="navigation-bar">
    <NavLink
      aria-label="Home link"
      title="Home"
      className="navigation-bar__home"
      to={"/home"}
    >
      Home
    </NavLink>
    <NavLink
      aria-label="Add user link"
      to={"/add-user"}
      className="navigation-bar__add-user"
    >
      Add user
    </NavLink>
  </NavigationStyled>
);

export default Navigation;
