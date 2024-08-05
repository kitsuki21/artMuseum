import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
      transform: rotate(0deg) scale(1);
    }
    to {
      transform: rotate(360deg) scale(1.4);
    }
  `;

const Rotate = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dashed rgba(224, 164, 73, 1);
  animation: ${rotate} 2s linear infinite;
`;

export const Loader = () => {
  return <Rotate></Rotate>;
};
