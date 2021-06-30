import { HeaderWrapper } from "./Header.styled";
import Logo from "../logo/Logo";
import Cart from "./Cart/Cart";
import Navigation from "./Navigation/Navigation";
import NavItem from "./Navigation/NavItem";
import DDL from "../common/DDL/DDL";
import DDLItem from "../common/DDL/DDLItem";
import Link from "../common/Link/Link";
import SportDDL from "./SportDDL/SportDDL";

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Cart />
      <Navigation>
        <NavItem>
          <Link href="/#">Расписание</Link>
        </NavItem>
        <NavItem>
          <Link href="/#">Игровые отчеты</Link>
        </NavItem>
        <NavItem>
          <Link href="/#">Статистика</Link>
        </NavItem>
        <NavItem>
          <DDL title="Еще">
            <DDLItem>
              <NavItem>
                <Link href="/#">Статистика</Link>
              </NavItem>
            </DDLItem>
            <DDLItem>
              <NavItem>
                <Link href="/#">Статистика</Link>
              </NavItem>
            </DDLItem>
            <DDLItem>
              <NavItem>
                <Link href="/#">Статистика</Link>
              </NavItem>
            </DDLItem>
          </DDL>
        </NavItem>
      </Navigation>
      {/* <DDL title="Вид спорта" variant="light">
        <DDLItem>Волейбол</DDLItem>
        <DDLItem>Баскетбол</DDLItem>
        <DDLItem>Футбол</DDLItem>
      </DDL> */}
      <SportDDL />
    </HeaderWrapper>
  );
}

export default Header;
