import React, { createContext, useContext, useState } from "react";
import { ArtWork } from "src/types";

const FavoritesContext = createContext<{
  favorites: ArtWork[];
  addCardFavorites: (value: ArtWork) => void;
  removeCardFavorites: (value: ArtWork) => void;
  getArtWorkInFavorites: (id: number) => ArtWork | null | undefined;
  checkIsAdded: (id: number) => boolean;
}>({
  favorites: [],
  addCardFavorites: () => {},
  removeCardFavorites: () => {},
  getArtWorkInFavorites: () => null,
  checkIsAdded: () => false,
});

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoriteProvader = ({ children }: any) => {
  const getItem = localStorage.getItem("artWork");
  const obj = getItem ? JSON.parse(getItem) : [];

  const [favorites, setFavorites] = useState<ArtWork[]>(obj);
  // function getItem<T>(key: string): T | null {
  //   const item = localStorage.getItem(key);
  //   return item ? JSON.parse(item) as T : null;
  // }

  const getArtWorkInFavorites = (id: number) =>
    favorites && (favorites.find((artWork) => artWork.id === id) ?? null);

  const addCardFavorites = (artWork: ArtWork) => {
    setFavorites((prev) => [...prev, artWork]);
  };

  const removeCardFavorites = (artWork: ArtWork) => {
    setFavorites(favorites.filter(({ id }) => artWork.id !== id));
  };

  localStorage.setItem("artWork", JSON.stringify(favorites));

  const checkIsAdded = (id: number) =>
    !!favorites.filter((artWork) => artWork.id === id).length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addCardFavorites,
        removeCardFavorites,
        getArtWorkInFavorites,
        checkIsAdded,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
