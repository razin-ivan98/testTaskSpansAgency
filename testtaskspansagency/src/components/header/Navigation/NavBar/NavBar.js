import { NavBarWrapper } from "./NavBar.styled";

function NavBar(props) {
  const { checked, children } = props;

  return <NavBarWrapper checked={checked}>{children}</NavBarWrapper>;
}

export default NavBar;
