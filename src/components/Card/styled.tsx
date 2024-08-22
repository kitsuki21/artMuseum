import styled, { css } from "styled-components";

export const WrapperCard = styled.div<{ type: "fullSize" | "miniSize" }>`
  ${({ type }) => {
    switch (type) {
      case "fullSize":
        return css`
          position: relative;
          height: 514px;
          width: 387px;
          ${WrapperDescription} {
            height: 132px;
            position: absolute;
            left: 27px;
            bottom: 10px;
          }
          ${Description} {
            width: 219px;
            padding: 17px 8px 17px 14px;
          }
        `;
      case "miniSize":
        return css`
          width: 416px;
          height: 130px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          ${ArtImage} {
            width: 80px;
            height: 80px;
          }
        `;
    }
  }}
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const ArtImage = styled.img`
  width: 387px;
  height: 444px;
  object-fit: cover;
`;

export const WrapperDescription = styled.div`
  width: 334px;
  display: flex;
  align-items: center;
  background: white;
  justify-content: space-between;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 219px;
`;

export const Title = styled.p`
  font-size: 17px;
  font-weight: 500;
  line-height: 26px;
  color: rgba(57, 57, 57, 1);
  margin: 0;
`;

export const ArtistTitle = styled.p`
  color: rgba(224, 164, 73, 1);
  font-size: 17px;
  font-weight: 400;
  margin: 0;
`;

export const Public = styled.p`
  font-weight: 700;
  font-size: 16px;
  padding-top: 8px;
  color: rgba(57, 57, 57, 1);
  margin: 0;
`;
