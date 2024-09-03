import { ArtWorksResponseData } from "./api";

export interface ArtWork {
  id: ArtWorksResponseData["id"];
  title: ArtWorksResponseData["title"];
  artist_title: ArtWorksResponseData["artist_title"];
  artist_display: ArtWorksResponseData["artist_display"];
  date_display: ArtWorksResponseData["date_display"];
  main_reference_number: ArtWorksResponseData["main_reference_number"];
  image_id: ArtWorksResponseData["image_id"];
  place_of_origin: ArtWorksResponseData["place_of_origin"];
  dimensions: ArtWorksResponseData["dimensions"];
  credit_line: ArtWorksResponseData["credit_line"];
  date_end: ArtWorksResponseData["date_end"];
  images: string;
}
