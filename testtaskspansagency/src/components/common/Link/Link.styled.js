import styled from "styled-components";

const dark = "#222222";
const light = "white";

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: ${(props) => (props.variant === "light" ? light : dark)};
`;
