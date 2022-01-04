import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  margin: auto;
`;

export default Container;
