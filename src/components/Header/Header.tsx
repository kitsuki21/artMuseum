import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/museum_logo.svg";
import bookmark from "../../assets/bookmark.svg";
import home from "../../assets/home.svg";

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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Header = ({ path }) => {
  return (
    <TopBar>
      <img src={logo} alt="logo" />
      {path === "/" ? (
        <Link to="/favorites">
          <img src={bookmark} alt="bookmark" />
          Your favorite
        </Link>
      ) : (
        <Wrapper>
          <Link to="/">
            <img src={home} alt="home" />
            Home
          </Link>
          <Link to="/favorites">
            <img src={bookmark} alt="bookmark" />
            Your favorite
          </Link>
        </Wrapper>
      )}
    </TopBar>
  );
};
