import styled, { css } from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ContainerSearchArtWorks = styled.div`
  left: 50%;
  transform: translateX(-50%);

  position: absolute;
  top: -60;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 600px;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
`;

export const XlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PageContainer = styled.div`
  margin: 16px 0 40px;
  position: relative;
  display: flex;
`;

export const WrraperPage = styled.div`
  width: 120px;
  height: 30px;
  overflow: hidden;
  display: flex;
`;

export const PageButton = styled.button<{
  type: "active" | "";
  $transform?: string;
}>`
  width: 30px;
  height: 30px;
  border: none;
  background: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition-timing-function: ease;
  transition-duration: 500ms;
  transform: ${(props) => props.$transform || ""};
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Page = styled.p`
  margin: 0;
  padding: 0 4px;
`;

export const XxlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PrevButton = styled.button`
  border: none;
  background: none;
  width: 30px;
  height: 30px;
  padding: 0;
  &:hover {
    background: #eceaea;
    border-radius: 5px;
  }
`;

export const NextButton = styled(PrevButton)``;
