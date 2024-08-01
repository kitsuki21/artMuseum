import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { ArtWork } from "./pages/ArtWork";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/artwork/:id" element={<ArtWork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
