import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header/Header";
import { ArtWorks } from "../components/ArtWorks/ArtWorks";
import { Footer } from "../components/Footer/Footer";
import { Search } from "../components/Search/Search";
import { Title } from "../components/Title/Title";
import PostService from "../API/PostService";
import { CardProps } from "../components/Card/Card.props";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    90deg,
    #343333 38.05%,
    #484848 69.22%,
    #282828 98.98%
  );
  height: 127px;
`;

const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  const [artWorks, setArtWorks] = useState<CardProps[]>([]);
  const [fetchArtWorks, isLoadiangArtWorks, artWorkError] = useFetching(
    async () => {
      const artWorkss = await PostService.getAll();
      setArtWorks(artWorkss);
    }
  );
  useEffect(() => {
    fetchArtWorks();
  }, []);

  return (
    <>
      <Wrapper>
        <Header path="/" />
      </Wrapper>
      <ContentContainer>
        <Title appereance="title">
          {" "}
          Let's Find Some <span>Art</span> Here!
        </Title>
        <Search />
        <Title>
          <span>Topics for you</span>
          Our special gallery
        </Title>
        {artWorkError && <h1>Произошла ошибка ${artWorkError}</h1>}
        {!isLoadiangArtWorks ? (
          <ArtWorks name="Our special" artWorks={artWorks} />
        ) : (
          <Loader />
        )}
        <Title>
          <span>Here some more</span>
          Other works for you
        </Title>
        {artWorkError && <h1>Произошла ошибка${artWorkError}</h1>}
        {!isLoadiangArtWorks ? (
          <ArtWorks artWorks={artWorks} name="Other works" />
        ) : (
          <Loader />
        )}
      </ContentContainer>
      <WrapperFooter>
        <Footer />
      </WrapperFooter>
    </>
  );
};
