import { HeaderWrapper } from "./Header.styled";
import Logo from "../logo/Logo";
import Cart from "./Cart/Cart";
import Navigation from "./Navigation/Navigation";
import NavItem from "./Navigation/NavItem";
import DDL from "../common/DDL/DDL";

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Cart />
      <Navigation>
        <NavItem>Расписание</NavItem>
        <NavItem>Игровые отчеты</NavItem>
        <NavItem>Статистика</NavItem>
        <NavItem>Еще</NavItem>
      </Navigation>
      <DDL title="Футбол">kek</DDL>
    </HeaderWrapper>
  );
}

export default Header;
