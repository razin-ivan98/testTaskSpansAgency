import { NavItemWrapper } from "./NavItem.styled.js";

function NavItem(props) {
  return <NavItemWrapper>{props.children}</NavItemWrapper>;
}

export default NavItem;
