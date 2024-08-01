import React from "react";
import { Header } from "../components/Header/Header";
import styled from "styled-components";
import { Title } from "../components/Title/Title";
import bookmarkicon from "../assets/icon.svg";
import { Footer } from "../components/Footer/Footer";

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

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(241, 121, 0, 1);
`;

export const Favorites = () => {
  return (
    <Wrapper>
      <Header path="/favorites" />
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
      <Footer />
    </Wrapper>
  );
};
