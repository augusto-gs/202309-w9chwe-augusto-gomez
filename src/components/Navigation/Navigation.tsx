import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => (
  <NavigationStyled className="navigation-bar">
    <NavLink title="Home" className="navigation-bar__home" to={"/home"}>
      Home
    </NavLink>
    <NavLink to={"/add-user"}></NavLink>
  </NavigationStyled>
);

export default Navigation;
