import styled from "styled-components";
import * as sizes from "../../consts/screenSizes";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;

  padding: 20px 10px;
  @media (min-width: ${sizes.l}px) {
    padding: 25px 40px;
  }
`;
