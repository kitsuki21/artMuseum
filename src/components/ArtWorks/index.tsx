import React from "react";
import { Card } from "../Card";
import { ContentContainerCard, ContentContainerCardOther } from "./styled";
import { ArtWork } from "src/types";

interface ArtWorksProps {
  sizeContainer: string;
  artWorks: ArtWork[];
}

export const ArtWorks = ({ sizeContainer, artWorks }: ArtWorksProps) => {
  return (
    <>
      {sizeContainer === "full" ? (
        <>
          <ContentContainerCard>
            {artWorks.map<React.JSX.Element>((artWork: ArtWork) => (
              <Card
                key={artWork.id}
                artWork={artWork}
                size="fullSize"
              />
            ))}
          </ContentContainerCard>
        </>
      ) : (
        <ContentContainerCardOther>
          {artWorks.map((artWork: React.JSX.IntrinsicAttributes & ArtWork) => (
            <Card
              key={artWork.id}
              artWork={artWork}
            />
          ))}
        </ContentContainerCardOther>
      )}
    </>
  );
};
