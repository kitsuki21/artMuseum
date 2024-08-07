import React, { useContext } from "react";
import styled from "styled-components";
import { Title } from "src/components/Title";
import bookmarkicon from "src/assets/icon.svg";
import { Card } from "src/components/Card";
import { Layout } from "src/components/Layout";
import { useFavorites } from "src/context/FavoritesProvader";

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(241, 121, 0, 1);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1280px;
`;

export const Favorites = () => {
  const [favorites] = useFavorites();
  console.log(favorites.length);

  return (
    <Layout>
      <Title appereance="title">
        Here are your{" "}
        <Span>
          {" "}
          <img src={bookmarkicon} alt="" />
          Favorites
        </Span>
      </Title>
      <Title>
        {" "}
        <span>Saved by you</span>Your favorites list
      </Title>
      <ContentWrapper>
        {favorites.map((artWork) => (
          <Card
            size=""
            images={`https://www.artic.edu/iiif/2/${artWork.image_id}/full/843,/0/default.jpg`}
            {...artWork}
          />
        ))}
      </ContentWrapper>
    </Layout>
  );
};
