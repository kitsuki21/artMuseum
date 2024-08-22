import styled from "styled-components";

export const Button = styled.button<{ $position?: string }>`
  position: absolute;
  right: ${(props) => props.$position || "44px"};
  bottom: 35px;
  top: ${(props) => props.$position || ""};
  width: 59px;
  height: 59px;
  border-radius: 100%;
  border: none;
  background: rgba(249, 249, 249, 1);
  &:hover {
    background: rgba(251, 215, 178, 0.3);
  }
  & img {
    width: 24px;
    height: 24px;
  }
`;
