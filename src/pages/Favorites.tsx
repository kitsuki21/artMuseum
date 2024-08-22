import React from "react";
import styled from "styled-components";
import { Typography } from "src/components/Typography";
import bookmarkicon from "src/assets/icon.svg";
import { Card } from "src/components/Card";
import { Layout } from "src/components/Layout";
import { useFavorites } from "src/context/FavoritesProvider";
import { Link } from "react-router-dom";

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(241, 121, 0, 1);
`;

const ContentWrapper = styled.div<{ $center: string }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${(props) => props.$center || ""};
  width: 1280px;
`;

export const Favorites = () => {
  const { favorites } = useFavorites();
  const aligtItems = favorites?.length === 0 ? "center" : "";

  return (
    <Layout>
      <Typography type="xxl">
        Here are your
        <Span>
          <img src={bookmarkicon} alt="" />
          Favorites
        </Span>
      </Typography>
      <Typography>
        <span>Saved by you</span>Your favorites list
      </Typography>
      <ContentWrapper $center={aligtItems}>
        {favorites?.length === 0 ? (
          <p>
            Your list is empty <Link to="/">add works to favorites</Link>{" "}
          </p>
        ) : (
          favorites?.map((artWork) => (
            <Card
              key={artWork.id}
              size=""
              artWork={artWork}
            />
          ))
        )}
      </ContentWrapper>
    </Layout>
  );
};
