import styled, { keyframes } from "styled-components";

export const WrraperContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 120px 0 40px 0;
  gap: 80px;
`;

const load = keyframes`
     0%, 100%{
        background-position: right;
    }
  50%{
      background-position: left;
  }
  `;

export const BlockLeft = styled.div`
  width: 497px;
  height: 520px;
  border-radius: 5px;
  background: linear-gradient(to right, #f1f0f0, #c1c0c0, #f1f0f0);
  background-position: left;
  background-size: 200%;
  animation: ${load} 2s ease-out 0s infinite normal;
`;

export const BlockRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BlockTitle = styled.div`
  width: 350px;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 16px;
  background: linear-gradient(to right, #f1f0f0, #c1c0c0, #f1f0f0);
  background-position: left;
  background-size: 200%;
  animation: ${load} 2s ease-out 0s infinite normal;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 172px 0 0 0;
`;

export const BlockOverview = styled(BlockTitle)``;

export const Block = styled(BlockTitle)`
  height: 20px;
`;
