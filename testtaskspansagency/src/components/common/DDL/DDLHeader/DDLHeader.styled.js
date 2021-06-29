import styled from "styled-components";

export const DDLHeaderWpapper = styled.div`
  /* position: relative; */
  padding: 5px;
`;

export const DDLArrowWrapper = styled.span`
  position: relative;
  display: inline-block;
  /* background-color: #acaff3; */
  width: 20px;
  height: 20px;

  margin-left: 10px;

  &::before {
    content: "";
    position: absolute;
    display: block;
    background-color: #acaff3;
    width: 9px;
    height: 1px;
    top: 14px;

    transform: rotate(${(props) => (props.dropped ? "-45deg" : "45deg")});
    transition: linear transform 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    background-color: #acaff3;
    width: 9px;
    height: 1px;
    top: 14px;
    left: 6px;

    transform: rotate(${(props) => (props.dropped ? "45deg" : "-45deg")});
    transition: linear transform 0.3s;
  }
`;
