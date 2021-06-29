import styled from "styled-components";

export const DDLBodyWrapper = styled.div`
  display: ${(props) => (props.dropped ? "block" : "none")};
  position: absolute;

  background-color: red;
`;
