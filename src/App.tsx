import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "src/pages/Home";
import { Favorites } from "src/pages/Favorites";
import { DetailDescription } from "src/pages/DetailDescription";

import { FavoriteProvader } from "./context/FavoritesProvader";

function App() {
  return (
    <FavoriteProvader>
      <HashRouter basename="/artMuseum">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/artwork/:id" element={<DetailDescription />} />
        </Routes>
      </HashRouter>
    </FavoriteProvader>
  );
}

export default App;
