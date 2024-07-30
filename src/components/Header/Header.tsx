import React from "react";
import styled from "styled-components";

const TopBar = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  & a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 1);
  }
`;

export const Header = () => {
  return (
    <TopBar>
      <img src="images/museum_logo.svg" alt="logo" />
      <a href="/">
        <img src="images/bookmark.svg" alt="bookmark" />
        Your favorite
      </a>
    </TopBar>
  );
};
