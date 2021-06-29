import { CartWrapper, CartImageWrapper } from "./Cart.styled";
import Counter from "./Counter/Counter";
import cartImg from "./Cart.png";

function Cart() {
  return (
    <CartWrapper>
      <CartImageWrapper src={cartImg} alt="cart" />
      <Counter />
    </CartWrapper>
  );
}

export default Cart;
