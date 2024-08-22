import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIProps } from "src/type/api";
import {
  ArtImage,
  BookMark,
  Content,
  DateDisplay,
  Description,
  LeftSide,
  NameAuthor,
  Overview,
  Title,
  Wrapper,
} from "./styled";
import { Layout } from "src/components/Layout";
import { MyBytton } from "src/components/MyBytton";
import bookmark from "src/assets/bookmark.svg";
import addBookmark from "src/assets/addedbookmark.svg";
import { useFetching } from "src/hooks/useFetching";
import PostService from "src/API/PostService";
import { useFavorites } from "src/context/FavoritesProvader";
import { Loader } from "src/components/UI/Loader";

export const DetailDescription = () => {
  const params = useParams();
  const [artWork, setArtWork] = useState<APIProps>();
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const responsive = await PostService.getById(params.id);
    setArtWork(responsive.data as APIProps);
  });
  const [favorites, setFavorites, getArtWorkInFavorites] = useFavorites();
  useEffect(() => {
    fetchPostById();
  }, [fetchPostById, params.id]);

  const image = `https://www.artic.edu/iiif/2/${
    artWork && artWork.image_id
  }/full/843,/0/default.jpg`;

  const addedCardFavorites = (id: number) => {
    const newArtWork: APIProps | undefined = artWork && {
      id: artWork.id,
      title: artWork.title,
      artist_title: artWork.artist_title,
      artist_display: artWork.artist_display,
      date_display: artWork.artist_display,
      main_reference_number: artWork.main_reference_number,
      image_id: artWork.image_id,
      place_of_origin: artWork.place_of_origin,
      images: image,
    };

    if (artWork && artWork.id === id) {
      favorites && setFavorites(newArtWork && [...favorites, newArtWork]);
    }
  };

  const removeCardFavorites = (id: number) => {
    favorites && setFavorites(favorites.filter((artWork) => artWork.id !== id));
  };

  const isAdded = artWork ? getArtWorkInFavorites(artWork.id) : false;

  return (
    <Layout>
      {!isLoading ? (
        <>
          {artWork && (
            <Content>
              <LeftSide>
                <ArtImage src={image} alt="" />
                {isAdded ? (
                  <MyBytton
                    onClick={() => removeCardFavorites(artWork.id)}
                    position={false}
                  >
                    <BookMark src={addBookmark} alt="bookmark" />
                  </MyBytton>
                ) : (
                  <MyBytton
                    onClick={() => addedCardFavorites(artWork.id)}
                    position={false}
                  >
                    <BookMark src={bookmark} alt="bookmark" />
                  </MyBytton>
                )}
              </LeftSide>
              <div>
                <Description>
                  <NameAuthor>{artWork.title}</NameAuthor>
                  <span>{artWork.artist_title}</span>
                  <DateDisplay>{artWork.date_display}</DateDisplay>
                </Description>
                <Overview>
                  <Title>Overview</Title>
                  <Wrapper>
                    <span>Artist nacionality:</span>
                    {artWork.place_of_origin}
                  </Wrapper>
                  <Wrapper>
                    <span>Dimensions: Sheet:</span>
                    {artWork.dimensions?.slice(0, 39)}
                  </Wrapper>
                  <Wrapper>
                    <span>Credit line:</span>{" "}
                    {artWork.credit_line?.slice(0, 39)}
                  </Wrapper>
                  <Wrapper>
                    <span>Repository: </span>
                    {artWork.place_of_origin}
                  </Wrapper>
                  Public
                </Overview>
              </div>
            </Content>
          )}
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};
