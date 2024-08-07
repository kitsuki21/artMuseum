import React, { Dispatch, SetStateAction, useMemo } from "react";
import { Card, CardProps } from "../Card";
import {
  ContentContainerCard,
  ContentContainerCardOther,
  WrapperButton,
} from "./styled";
import { APIProps } from "src/Type/API";
import { useFetching } from "src/hooks/useFetching";
import PostService from "src/API/PostService";

interface ArtWorksProps {
  sizeContainer: string;
  artWorks: APIProps[];
}

export const ArtWorks = ({
  sizeContainer,
  artWorks,
}: // pagesArray,
ArtWorksProps) => {
  return (
    <>
      {sizeContainer === "full" ? (
        <>
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
        </>
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
