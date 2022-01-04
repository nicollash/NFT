import styled from "styled-components";

const Label = styled.span`
  z-index: 1;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: ${(props) => (props.size ? props.size : 14)}px;
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  text-align: ${(props) => (props.align ? props.align : "left")};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : "none"};
`;

export default Label;
