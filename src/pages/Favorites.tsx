import React from "react";
import styled from "styled-components";
import { Typography } from "src/components/Typography";
import bookmarkicon from "src/assets/icon.svg";
import { Card } from "src/components/Card";
import { Layout } from "src/components/Layout";
import { useFavorites } from "src/context/FavoritesProvader";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
  max-width: 1280px;
  gap: 16px;
`;

export const Favorites = () => {
  const { favorites } = useFavorites();
  const aligtItems = favorites?.length === 0 ? "center" : "";

  // localStorage.setItem("artWork", JSON.stringify(favorites));

  // localStorage.getItem(JSON.parse("artWork"));

  return (
    <Layout>
      <Container>
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
                defaultValue={true}
              />
            ))
          )}
        </ContentWrapper>
      </Container>
    </Layout>
  );
};
