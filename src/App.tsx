import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "src/pages/Home";
import { Favorites } from "src/pages/Favorites";
import { DetailDescription } from "src/pages/DetailDescription";

import { FavoriteProvider } from "./context/FavoritesProvider";

function App() {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/artwork/:id" element={<DetailDescription />} />
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  );
}

export default App;
