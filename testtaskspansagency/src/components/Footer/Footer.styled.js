import styled from "styled-components";

import * as sizes from "../../consts/screenSizes";

export const FooterWrapper = styled.footer`
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #222222;
  padding: 20px;
  color: white;

  @media (min-width: ${sizes.l}px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 40px 1fr 1px 1fr;
    padding: 40px 40px 0 40px;
  }
`;

export const ContactsWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: ${sizes.l}px) {
    grid-column-start: 1;
    grid-row-start: 4;
    margin: 0;
  }
`;

export const ContactsItemWrapper = styled.div`
  & + & {
    margin-top: 10px;
  }
  text-align: left;
`;

export const ContactsTitleWrapper = styled.div`
  display: none;
  color: #acaff3;
  grid-row-start: 3;
  text-align: left;
  @media (min-width: ${sizes.l}px) {
    display: block;
  }
`;

export const LogoWrapper = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  @media (min-width: ${sizes.l}px) {
    text-align: left;
  }
`;

export const BreakLine = styled.div`
  display: none;

  height: 1px;
  background-color: #d6d7f9;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  @media (min-width: ${sizes.l}px) {
    display: block;
  }
`;
