import { NavItemWrapper } from "./NavItem.styled.js";

function NavItem(props) {
  return (
    <NavItemWrapper>
      <a href="/#">{props.children}</a>
    </NavItemWrapper>
  );
}

export default NavItem;
