import React from "react";
import { CardProps } from "./Card.props";
import styled from "styled-components";

const WrapperCard = styled.div`
  position: relative;
`;

const ArtImage = styled.img`
  width: 387px;
  height: 444px;
`;

const WrapperDescription = styled.div`
  width: 334px;
  height: 132px;
  position: absolute;
  left: 27px;
  bottom: 10px;
  display: flex;
  align-items: center;
  background: white;
  justify-content: space-between;
  & button {
    width: 59px;
    height: 59px;
    border-radius: 100%;
    border: none;
    margin-right: 25px;
    background: rgba(249, 249, 249, 1);
  }
  & button:hover {
    background: rgba(251, 215, 178, 0.3);
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 15px 0px 25px;
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: 500;
  line-height: 26px;
  color: rgba(57, 57, 57, 1);
  margin: 0;
`;

const ArtistTitle = styled(Title)`
  color: rgba(224, 164, 73, 1);
  font-size: 16px;
  font-weight: 400;
`;

const Public = styled(Title)`
  font-weight: 700;
  font-size: 16px;
  padding-top: 20px;
`;

export const Card = ({ images, ...props }: CardProps) => {
  console.log(images, "images");

  return (
    <WrapperCard>
      <ArtImage src={images} alt="img" />
      <WrapperDescription>
        <Description>
          <Title>{props.title.slice(0, 21)}</Title>
          <ArtistTitle>{props.artist_title}</ArtistTitle>
          <Public>Public</Public>
        </Description>
        <button>
          <img src="images\bookmark.svg" alt="bookmark" />
        </button>
      </WrapperDescription>
    </WrapperCard>
  );
};
