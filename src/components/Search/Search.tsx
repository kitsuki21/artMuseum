import React from "react";
import styled from "styled-components";
import search from "../../assets/search.svg";

const Wrapper = styled.div`
  position: relative;
  & input {
    background-color: rgba(57, 57, 57, 0.05);
    color: rgba(57, 57, 57, 0.5);
    width: 762px;
    padding: 23px;
    border-radius: 16px;
    border: none;
  }
  & img {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export const Search = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Search art, artist, work" />
      <img src={search} alt="search icon" />
    </Wrapper>
  );
};
