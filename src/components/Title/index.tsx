import React from "react";
import styled from "styled-components";
import { TitleProps } from "./Title.props";

const Headline = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  color: rgba(57, 57, 57, 1);
  margin: 80px 0;
  width: 684px;
  & span {
    color: rgba(241, 121, 0, 1);
  }
`;

const Banner = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 80px 0 40px 0;
  & span {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: rgba(224, 164, 73, 1);
  }
`;

export const Title = ({ appereance, children }: TitleProps) => {
  return (
    <div>
      {appereance ? (
        <Headline>{children}</Headline>
      ) : (
        <Banner>{children}</Banner>
      )}
    </div>
  );
};
