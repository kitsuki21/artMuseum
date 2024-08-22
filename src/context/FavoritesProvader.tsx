import React, { createContext, useContext, useState } from "react";
import { APIProps } from "src/type/api";

const FavoritesContext = createContext<
  [
    favorites: APIProps[] | undefined,
    setFavorites: React.Dispatch<React.SetStateAction<APIProps[] | undefined>>,
    getArtWorkInFavorites: (id: number) => APIProps | null | undefined
  ]
>([[], () => {}, () => null]);

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoriteProvader = ({ children }: any) => {
  const [favorites, setFavorites] = useState<APIProps[] | undefined>([]);
  const getArtWorkInFavorites = (id: number) =>
    favorites && (favorites.find((artWork) => artWork.id === id) ?? null);
  return (
    <FavoritesContext.Provider
      value={[favorites, setFavorites, getArtWorkInFavorites]}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
