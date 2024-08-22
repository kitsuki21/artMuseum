import React from "react";
import { Card } from "../Card";
import { ContentContainerCard, ContentContainerCardOther } from "./styled";
import { APIProps } from "src/type/api";
import { useFavorites } from "src/context/FavoritesProvader";

interface ArtWorksProps {
  sizeContainer: string;
  artWorks: APIProps[];
}

export const ArtWorks = ({ sizeContainer, artWorks }: ArtWorksProps) => {
  const [_, __, getArtWorkInFavorites] = useFavorites();

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
                defaultValue={!!getArtWorkInFavorites(artWork.id)}
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
              defaultValue={!!getArtWorkInFavorites(artWork.id)}
            />
          ))}
        </ContentContainerCardOther>
      )}
    </>
  );
};
