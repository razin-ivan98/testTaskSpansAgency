import {
  FooterWrapper,
  ContactsWrapper,
  ContactsItemWrapper,
  ContactsTitleWrapper,
  LogoWrapper,
  BreakLine,
} from "./Footer.styled";

import Socials from "./Social/Socials";
import Store from "./Store/Store";
import Copyright from "./Copyright/Copyright";
import Author from "./Author/Author";
import Links from "./Links/Links";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContactsTitleWrapper>Наши контакты</ContactsTitleWrapper>
      <ContactsWrapper>
        <ContactsItemWrapper>go@crossball.ru</ContactsItemWrapper>
        <ContactsItemWrapper>+7 (495) 109-03-09</ContactsItemWrapper>
      </ContactsWrapper>
      <Socials />
      <Store />
      <Links />
      <LogoWrapper>
        <Logo variant="light" />
      </LogoWrapper>
      <BreakLine />
      <Copyright />
      <Author />
    </FooterWrapper>
  );
};

export default Footer;
