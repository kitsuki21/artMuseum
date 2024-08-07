import styled from "styled-components";

export const ContentContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
`;

export const ContentContainerCardOther = styled.div`
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
`;

export const WrapperButton = styled.button<{ $buttonColor: string }>`
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  background: ${(props) => props.$buttonColor || "rgba(241, 121, 0, 1)"};
  color: ${(props) => props.$buttonColor || "rgba(255, 255, 255, 1)"};
`;
