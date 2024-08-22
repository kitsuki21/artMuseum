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
import { APIProps } from "src/type/api";
import { MyBytton } from "../MyBytton";
import { useFavorites } from "src/context/FavoritesProvader";

export interface CardProps {
  id: number;
  title: string;
  artist_display: string;
  artist_title: string;
  date_display: string;
  main_reference_number: string;
  image_id: string;
  images: string;
  size?: string;
  defaultValue?: boolean | null;
}

export const Card = ({
  defaultValue = false,
  size,
  images,
  ...props
}: CardProps) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useFavorites();
  const [isAddedWork, setIsAddedWork] = useState<boolean>(
    defaultValue ?? false
  );

  const handleCardClick = () => {
    navigate(`/artwork/${props.id}`);
  };

  const addedCardFavorites = (id: number) => {
    const newArtWork: APIProps = {
      id: props.id,
      title: props.title,
      artist_title: props.artist_title,
      artist_display: props.artist_display,
      date_display: props.artist_display,
      main_reference_number: props.main_reference_number,
      image_id: props.image_id,
      images,
    };

    if (props.id === id) {
      favorites && setFavorites([...favorites, newArtWork]);
      setIsAddedWork(true);
    }
  };

  const removeCardFavorites = (id: number) => {
    favorites && setFavorites(favorites.filter((artWork) => artWork.id !== id));
    setIsAddedWork(false);
  };

  return (
    <Wrapper>
      <WrapperCard
        type={size ? "fullSize" : "miniSize"}
        onClick={handleCardClick}
      >
        <ArtImage src={images} alt="img" />
        <WrapperDescription>
          <Description>
            <Title>{props.title?.slice(0, 19)}</Title>
            <ArtistTitle>{props.artist_title?.slice(0, 19)}</ArtistTitle>
            <Public>Public</Public>
          </Description>
        </WrapperDescription>
      </WrapperCard>
      {isAddedWork ? (
        <MyBytton onClick={() => removeCardFavorites(props.id)} position={true}>
          <img src={addBookMark} alt="addbookmark" />
        </MyBytton>
      ) : (
        <MyBytton onClick={() => addedCardFavorites(props.id)} position={true}>
          <img src={bookmark} alt="bookmark" />
        </MyBytton>
      )}
    </Wrapper>
  );
};
