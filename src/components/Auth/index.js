import styled from "styled-components";

import Container from "../Container";

export const StyledContainer = styled(Container)`
  background-color: #24263c;
  color: white;
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 10px;
`;

export const Label = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  opacity: 0.5;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
