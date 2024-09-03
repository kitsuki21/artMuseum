import React from "react";
import { Card } from "../Card";
import { ContentContainerCard, ContentContainerCardOther } from "./styled";

import { useFavorites } from "src/context/FavoritesProvader";
import { ArtWork } from "src/type";

interface ArtWorksProps {
  sizeContainer: string;
  artWorks: ArtWork[];
}

export const ArtWorks = ({ sizeContainer, artWorks }: ArtWorksProps) => {
  const { getArtWorkInFavorites } = useFavorites();

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
                defaultValue={!!getArtWorkInFavorites(artWork.id)}
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
              defaultValue={!!getArtWorkInFavorites(artWork.id)}
            />
          ))}
        </ContentContainerCardOther>
      )}
    </>
  );
};
