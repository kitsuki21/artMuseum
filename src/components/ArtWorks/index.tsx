import React from "react";
import { Card } from "../Card";
import { ContentContainerCard, ContentContainerCardOther } from "./styled";
import { APIProps } from "src/Type/API";

interface ArtWorksProps {
  sizeContainer: string;
  artWorks: APIProps[];
  pagesArray?: number[];
}

export const ArtWorks = ({
  sizeContainer,
  artWorks,
  pagesArray,
}: ArtWorksProps) => {
  console.log(pagesArray, "pages");

  return (
    <>
      {sizeContainer === "full" ? (
        <ContentContainerCard>
          {artWorks.map<React.JSX.Element>((artWork: APIProps) => (
            <Card
              key={artWork.id}
              {...artWork}
              images={`https://www.artic.edu/iiif/2/${artWork.image_id}/full/843,/0/default.jpg`}
              size="fullSize"
            />
          ))}
        </ContentContainerCard>
      ) : (
        <ContentContainerCardOther>
          {artWorks.map((artWork: React.JSX.IntrinsicAttributes & APIProps) => (
            <Card
              key={artWork.id}
              {...artWork}
              images={`https://www.artic.edu/iiif/2/${artWork.image_id}/full/843,/0/default.jpg`}
            />
          ))}
        </ContentContainerCardOther>
      )}
    </>
  );
};
