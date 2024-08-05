import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "src/pages/Home";
import { Favorites } from "src/pages/Favorites";
import { DetailDescription } from "src/pages/DetailDescription";
import { APIProps } from "./Type/API";

export const FavoritesContext = createContext<
  [
    favorites: APIProps[],
    setFavorites: React.Dispatch<React.SetStateAction<APIProps[]>>
    // isAddedWork: boolean,
    // setIsAddedWork: React.Dispatch<React.SetStateAction<boolean>>
  ]
>([[], () => {}]);

function App() {
  const [favorites, setFavorites] = useState<APIProps[]>([]);

  return (
    <FavoritesContext.Provider value={[favorites, setFavorites]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/artwork/:id" element={<DetailDescription />} />
        </Routes>
      </BrowserRouter>
    </FavoritesContext.Provider>
  );
}

export default App;
