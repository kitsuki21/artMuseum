import styled from "styled-components";

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

export const LeftSide = styled.div`
  position: relative;
  background-image: url("/src/asets/defaultPhoto/png");
  background-size: 500px 500px;
`;

export const ArtImage = styled.img`
  width: 497px;
  height: 570px;
  object-fit: cover;
  -webkit-box-shadow: 9px 9px 11px -6px rgba(34, 60, 80, 0.47);
  -moz-box-shadow: 9px 9px 11px -6px rgba(34, 60, 80, 0.47);
  box-shadow: 9px 9px 11px -6px rgba(34, 60, 80, 0.47);
`;

export const BookMark = styled.img`
  width: 24px;
  height: 24px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & span {
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    margin: 32px 0 16px 0;
    color: rgba(224, 164, 73, 1);
  }
`;

export const NameAuthor = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  margin: 0;
`;
export const DateDisplay = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  margin: 0;
`;

export const Overview = styled.div`
  height: 19px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 172px 0 0 0;
  & span {
    color: rgba(224, 164, 73, 1);
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  margin: 0 0 32px 0;
`;

export const Wrapper = styled.div`
  height: 19px;
  display: flex;
  gap: 16px;
  & span {
    color: rgba(224, 164, 73, 1);
  }
`;
