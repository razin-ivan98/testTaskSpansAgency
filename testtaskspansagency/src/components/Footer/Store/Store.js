import {
  StoreWrapper,
  StoreItemWrapper,
  StoreItemImgWrapper,
} from "./Store.styled";

import googlePlay from "./googleplay.png";
import appStore from "./appstore.png";

const Store = () => {
  return (
    <StoreWrapper>
      <StoreItemWrapper href="/#">
        <StoreItemImgWrapper src={googlePlay} alt="googlePlay" />
      </StoreItemWrapper>
      <StoreItemWrapper href="/#">
        <StoreItemImgWrapper src={appStore} alt="appStore" />
      </StoreItemWrapper>
    </StoreWrapper>
  );
};

export default Store;
