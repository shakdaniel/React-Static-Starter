import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.span`
  display: inline-block;
  animation: ${rotate} 5s linear infinite;
`;

export default Rotate;
