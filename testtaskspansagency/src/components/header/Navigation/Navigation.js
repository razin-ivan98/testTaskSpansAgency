import { useState } from "react";

import { NavigationWrapper } from "./Navigation.styled";
import Burger from "./Burger/Burger";
import NavBar from "./NavBar/NavBar";

function Navigation(props) {
  const [checked, changeChecked] = useState(false);

  const clickHandle = () => {
    changeChecked(!checked);
  };

  return (
    <NavigationWrapper>
      <Burger checked={checked} clickHandle={clickHandle} />
      <NavBar checked={checked}>{props.children}</NavBar>
    </NavigationWrapper>
  );
}

export default Navigation;
