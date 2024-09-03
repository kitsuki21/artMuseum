import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  WrraperContent,
} from "./styled";
import { Layout } from "src/components/Layout";
import { MyBytton } from "src/components/MyBytton";
import bookmark from "src/assets/bookmark.svg";
import addBookmark from "src/assets/addedbookmark.svg";
import { useFetching } from "src/hooks/useFetching";
import PostService from "src/API/PostService";
import { useFavorites } from "src/context/FavoritesProvader";
import { ArtWork } from "src/type";
import { Sceleton } from "src/components/Sceleton";
import defaultPhoto from "src/assets/defaultFoto.png";

export const DetailDescription = () => {
  const params = useParams();
  const [artWork, setArtWork] = useState<ArtWork>();
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const responsive = await PostService.getById(params.id ?? "");
    setArtWork(responsive as ArtWork);
  });
  const { addCardFavorites, removeCardFavorites, checkIsAdded } =
    useFavorites();
  useEffect(() => {
    fetchPostById();
  }, [fetchPostById, params.id]);

  if (!artWork || isLoading) {
    return (
      <Layout>
        <Sceleton />
      </Layout>
    );
  }

  const isAdded = checkIsAdded(artWork.id);

  return (
    <Layout>
      <WrraperContent>
        <Content>
          <LeftSide>
            <ArtImage src={artWork.images} alt="" />
            {isAdded ? (
              <MyBytton
                onClick={() => removeCardFavorites(artWork)}
                position={false}
              >
                <BookMark src={addBookmark} alt="bookmark" />
              </MyBytton>
            ) : (
              <MyBytton
                onClick={() => addCardFavorites(artWork)}
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
                <span>Credit line:</span> {artWork.credit_line?.slice(0, 39)}
              </Wrapper>
              <Wrapper>
                <span>Repository: </span>
                {artWork.place_of_origin}
              </Wrapper>
              Public
            </Overview>
          </div>
        </Content>
      </WrraperContent>
    </Layout>
  );
};
