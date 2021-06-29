import { LogoWrapper, LogoImgWrapper } from "./Logo.styled";
import logoDark from "./LogoDark.png";
import logoLight from "./LogoLight.png";

function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImgWrapper
        src={props.variant === "light" ? logoLight : logoDark}
        alt="logo"
      />
    </LogoWrapper>
  );
}

export default Logo;
