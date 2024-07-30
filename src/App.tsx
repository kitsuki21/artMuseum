import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";
import { CardProps } from "./components/Card/Card.props";
import styled from "styled-components";
import { Card } from "./components/Card/Card";

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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & span {
    color: rgba(241, 121, 0, 1);
  }
`;

const ContentContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
`;

function App() {
  const [artWorks, setArtWorks] = useState<CardProps[]>([]);

  const getArtWorks = async () => {
    const responsive = await fetch(
      "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,artist_title,date_display,image_id,main_reference_number,?page=1&limit=3"
    );
    const result = await responsive.json();
    setArtWorks(result.data);
    console.log(result, "result");
  };

  useEffect(() => {
    getArtWorks();
  }, []);

  return (
    <div className="App">
      <Wrapper>
        <Header />
      </Wrapper>
      <ContentContainer>
        <Title>
          {" "}
          Let's Find Some <span>Art</span> Here!
        </Title>
        <ContentContainerCard>
          {artWorks.map((artWork) => (
            <Card
              key={artWork.id}
              {...artWork}
              images={`https://www.artic.edu/iiif/2/${artWork.image_id}/full/843,/0/default.jpg`}
            />
          ))}
        </ContentContainerCard>
      </ContentContainer>
    </div>
  );
}

export default App;
