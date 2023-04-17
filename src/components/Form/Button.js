//import MuiButton from "@mui/material/Button";
//import MuiButton from "@mui/material/Button";

import styled from "styled-components";

export default function Button({ variant = "contained", children, ...props }) {
  return (
    <StyledMuiButton variant={variant} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled.button`
  height: 40px;
  width: 300px;
  border-radius: 100px;
  border: 1px solid #e33b56;
  background-color: #e33b56;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 8px;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
  }
`;
