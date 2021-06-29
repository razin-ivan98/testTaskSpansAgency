import styled from "styled-components";

export const NavItemWrapper = styled.div`
  & + & {
    margin-left: 20px;
  }

  text-decoration: none;
`;
