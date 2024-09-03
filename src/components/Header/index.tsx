import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "src/assets/museum_logo.svg";
import bookmark from "src/assets/bookmark.svg";
import home from "src/assets/home.svg";

const Wrapper = styled.header`
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
  gap: 40px;
`;

const TopBar = styled.div`
  max-width: 1280px;
  width: 100%;
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

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Header = () => {
  const path = useLocation();

  return (
    <Wrapper>
      <TopBar>
        <img src={logo} alt="logo" />
        {path.pathname === "/" ? (
          <Link to="/favorites">
            <img src={bookmark} alt="bookmark" />
            Your favorite
          </Link>
        ) : (
          <InnerWrapper>
            <Link to="/">
              <img src={home} alt="home" />
              Home
            </Link>
            <Link to="/favorites">
              <img src={bookmark} alt="bookmark" />
              Your favorite
            </Link>
          </InnerWrapper>
        )}
      </TopBar>
    </Wrapper>
  );
};
