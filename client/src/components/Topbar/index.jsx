import styled from "styled-components";

import { Container } from "../_shared";
import AccountButton from "./AccountButton";

const TopBar = () => {
  return (
    <TopBarContainer>
      <Container direction="row" justify="space-between">
        <div />
        <AccountButton />
      </Container>
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div`
  padding: 8px 0px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ddd;
`;

export default TopBar;
