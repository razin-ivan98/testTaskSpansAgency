import styled from "styled-components";
import * as sizes from "../../consts/screenSizes";
import * as colors from "../../consts/colors";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #faf9f9;

  padding: 0 10px;
  height: 60px;

  border-bottom: 2px solid ${colors.darkGray};

  color: #222222;
  @media (min-width: ${sizes.l}px) {
    padding: 0 40px;
    height: 80px;
  }
`;
