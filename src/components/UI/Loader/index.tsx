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

const Wrapper = styled.div`
  width: 1280px;
  height: 514px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = () => {
  return (
    <Wrapper>
      <Rotate></Rotate>
    </Wrapper>
  );
};
