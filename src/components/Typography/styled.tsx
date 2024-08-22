import { css, styled } from "styled-components";

export const Headline = styled.h1<{ type: "xxl" | "xl" }>`
  ${({ type }) => {
    switch (type) {
      case "xxl":
        return css`
          font-size: 64px;
          font-weight: 700;
          line-height: 80px;
          text-align: center;
          margin: 80px 0;
          width: 684px;
          & span {
            color: rgba(241, 121, 0, 1);
          }
        `;
      case "xl":
        return css`
          font-size: 32px;
          font-weight: 400;
          line-height: 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          margin: 120px 0 40px 0;
          & span {
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            color: rgba(224, 164, 73, 1);
          }
        `;
    }
  }}
`;

export const Banner = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 120px 0 40px 0;
  & span {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: rgba(224, 164, 73, 1);
  }
`;
