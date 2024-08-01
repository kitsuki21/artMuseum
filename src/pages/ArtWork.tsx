import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header/Header";

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

export const ArtWork = () => {
  const params = useParams();
  const [artWork, setArtWork] = useState("");
  useEffect(() => {
    getById(params.id);
  }, [params.id]);

  const getById = async (id: string) => {
    const responsive = await fetch(
      "https://api.artic.edu/api/v1/artworks/" + id
    );
    const result = await responsive.json();
    setArtWork(result.data);
  };

  console.log(artWork, "artWork");

  return (
    <>
      <Wrapper>
        <Header path="artwork" />
      </Wrapper>
    </>
  );
};
