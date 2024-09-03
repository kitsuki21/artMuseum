import React, { ReactNode } from "react";
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
`;

const MagnifierIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`;

interface InputProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  children: ReactNode;
}

export const Search = ({
  searchQuery,
  setSearchQuery,
  children,
}: InputProps) => {
  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Search art, artist, work"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <MagnifierIcon src={search} alt="search icon" />
      {children}
    </Wrapper>
  );
};
