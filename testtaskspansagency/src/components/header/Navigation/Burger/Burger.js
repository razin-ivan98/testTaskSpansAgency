import { BurgerWrapper, SpanWrapper } from "./Burger.styled";

function Burger(props) {
  const { checked, clickHandle } = props;

  return (
    <BurgerWrapper onClick={clickHandle}>
      <SpanWrapper checked={checked} />
    </BurgerWrapper>
  );
}

export default Burger;
