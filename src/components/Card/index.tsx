import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bookmark from "src/assets/bookmark.svg";
import addBookMark from "src/assets/addedbookmark.svg";
import {
  WrapperCard,
  ArtImage,
  WrapperDescription,
  Description,
  Title,
  ArtistTitle,
  Public,
  Wrapper,
} from "./styled";
import { MyBytton } from "../MyBytton";
import { useFavorites } from "src/context/FavoritesProvader";
import { ArtWork } from "src/type";
import defaultPhoto from "src/assets/defaultFoto.png";

export interface CardProps {
  size?: string;
  defaultValue?: boolean | null;
  artWork: ArtWork;
}

export const Card = ({ defaultValue = false, size, artWork }: CardProps) => {
  const navigate = useNavigate();
  const { addCardFavorites, removeCardFavorites, checkIsAdded } =
    useFavorites();

  const handleCardClick = () => {
    navigate(`/artwork/${artWork.id}`);
  };

  const isAdded = checkIsAdded(artWork.id);

  return (
    <Wrapper>
      <WrapperCard
        type={size ? "fullSize" : "miniSize"}
        onClick={handleCardClick}
      >
        <ArtImage src={artWork.images} alt="" />
        <WrapperDescription>
          <Description>
            <Title>{artWork.title?.slice(0, 19)}</Title>
            <ArtistTitle>{artWork.artist_title?.slice(0, 19)}</ArtistTitle>
            <Public>Public</Public>
          </Description>
        </WrapperDescription>
      </WrapperCard>
      {isAdded ? (
        <MyBytton onClick={() => removeCardFavorites(artWork)} position={true}>
          <img src={addBookMark} alt="addbookmark" />
        </MyBytton>
      ) : (
        <MyBytton onClick={() => addCardFavorites(artWork)} position={true}>
          <img src={bookmark} alt="bookmark" />
        </MyBytton>
      )}
    </Wrapper>
  );
};
