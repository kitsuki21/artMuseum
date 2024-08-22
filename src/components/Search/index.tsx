import React from "react";
import styled from "styled-components";
import search from "src/assets/search.svg";

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

interface InputProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const Search = ({ searchQuery, setSearchQuery }: InputProps) => {
  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Search art, artist, work"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <img src={search} alt="search icon" />
    </Wrapper>
  );
};
