import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  color: white;
  opacity: 0.4;
  &:hover {
    text-decoration: underline;
  }
`;
