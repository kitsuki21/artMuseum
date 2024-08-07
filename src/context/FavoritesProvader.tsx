import React, { createContext, useContext, useState } from "react";
import { APIProps } from "src/Type/API";

const FavoritesContext = createContext<
  [
    favorites: APIProps[],
    setFavorites: React.Dispatch<React.SetStateAction<APIProps[]>>
    // isAddedWork: boolean,
    // setIsAddedWork: React.Dispatch<React.SetStateAction<boolean>>
  ]
>([[], () => {}]);

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoriteProvader = ({ children }: any) => {
  const [favorites, setFavorites] = useState<APIProps[]>([]);
  const [isAddedWork, setIsAddedWork] = useState<boolean>(false);

  return (
    <FavoritesContext.Provider value={[favorites, setFavorites]}>
      {children}
    </FavoritesContext.Provider>
  );
};
