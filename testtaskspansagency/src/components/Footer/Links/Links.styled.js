import styled from "styled-components";

import * as sizes from "../../../consts/screenSizes";

export const LinksWrapper = styled.section`
  display: none;

  @media (min-width: ${sizes.l}px) {
    display: flex;
    flex-direction: row;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
  }
`;
export const LinksColumnWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const LinksItemHeadWrapper = styled.div`
  color: #acaff3;
  text-align: left;
  margin-bottom: 20px;
`;
export const LinksItemWrapper = styled.div`
  text-align: left;
  & + & {
    margin-top: 10px;
  }
`;
