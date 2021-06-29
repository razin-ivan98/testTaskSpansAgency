import {
  SocialsWrapper,
  SocialsItemWrapper,
  SocialsItemImgWrapper,
} from "./Socials.styled";

import facebook from "./facebook.png";
import tg from "./tg.png";
import vk from "./vk.png";
import youTube from "./youTube.png";
import inst from "./inst.png";
import whatsApp from "./whatsApp.png";

const Socials = () => {
  return (
    <SocialsWrapper>
      <SocialsItemWrapper href="/#">
        <SocialsItemImgWrapper src={vk} alt="vk" />
      </SocialsItemWrapper>
      <SocialsItemWrapper href="/#">
        <SocialsItemImgWrapper src={facebook} alt="facebook" />
      </SocialsItemWrapper>
      <SocialsItemWrapper href="/#">
        <SocialsItemImgWrapper src={inst} alt="inst" />
      </SocialsItemWrapper>
      <SocialsItemWrapper href="/#">
        <SocialsItemImgWrapper src={youTube} alt="youTube" />
      </SocialsItemWrapper>
      <SocialsItemWrapper href="/#">
        <SocialsItemImgWrapper src={whatsApp} alt="whatsApp" />
      </SocialsItemWrapper>
      <SocialsItemWrapper href="/#">
        <SocialsItemImgWrapper src={tg} alt="tg" />
      </SocialsItemWrapper>
    </SocialsWrapper>
  );
};

export default Socials;
