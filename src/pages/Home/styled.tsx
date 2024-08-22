import styled, { css } from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PageContainer = styled.div`
  margin: 16px 0 40px;
  position: relative;
`;

export const PageButton = styled.button<{ type: "active" | "" }>`
  width: 30px;
  height: 30px;
  border: none;
  background: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #e97f14;
    color: white;
  }
  ${({ type }) => {
    switch (type) {
      case "active":
        return css`
          background: rgba(241, 121, 0, 1);
          color: white;
        `;
    }
  }}
`;
