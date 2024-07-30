import React from "react";
import styled from "styled-components";

const Headline = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  color: rgba(57, 57, 57, 1);
  margin: 0;
  width: 684px;
`;

export const Title = ({ children }) => {
  return <Headline>{children}</Headline>;
};
