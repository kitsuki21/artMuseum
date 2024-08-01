import React from "react";
import { Card } from "../Card/Card";
import styled from "styled-components";
import { CardProps } from "../Card/Card.props";

const ContentContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  overflow: hidden;
  width: 1280px;
`;

const ContentContainerCardOther = styled.div`
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
`;

export const ArtWorks = ({ name, artWorks }) => {
  return (
    <>
      {name === "Our special" ? (
        <ContentContainerCard>
          {artWorks.map(
            (artWork: React.JSX.IntrinsicAttributes & CardProps) => (
              <Card
                key={artWork.id}
                {...artWork}
                images={`https://www.artic.edu/iiif/2/${artWork.image_id}/full/843,/0/default.jpg`}
                rubrik="our special"
              />
            )
          )}
        </ContentContainerCard>
      ) : (
        <ContentContainerCardOther>
          {artWorks.map(
            (artWork: React.JSX.IntrinsicAttributes & CardProps) => (
              <Card
                key={artWork.id}
                {...artWork}
                images={`https://www.artic.edu/iiif/2/${artWork.image_id}/full/843,/0/default.jpg`}
              />
            )
          )}
        </ContentContainerCardOther>
      )}
    </>
  );
};
