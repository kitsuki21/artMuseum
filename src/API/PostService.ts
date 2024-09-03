import axios from "axios";
import { ArtWork } from "src/type";
import { ArtWorkByIdResponse, ArtWorksResponse } from "src/type/api";
import defaulPhoto from "src/assets/defaultPhoto.png";

const getFiltersArtWork: (data: ArtWorksResponse["data"]) => ArtWork[] = (
  data
) => {
  return data.map((artWork) => {
    const image = `https://www.artic.edu/iiif/2/${artWork.image_id}/full/843,/0/default.jpg`;
    const checkImage =
      artWork.image_id === undefined || null ? defaulPhoto : image;
    return {
      id: artWork.id,
      title: artWork.title,
      artist_title: artWork.artist_title,
      artist_display: artWork.artist_display,
      date_display: artWork.artist_display,
      main_reference_number: artWork.main_reference_number,
      image_id: artWork.image_id,
      place_of_origin: artWork.place_of_origin,
      dimensions: artWork.dimensions,
      credit_line: artWork.credit_line,
      date_end: artWork.date_end,
      images: checkImage,
    };
  });
};

export default class PostService {
  static async getAllWorks(page = 1, limit = 3) {
    const { data } = await axios.get<ArtWorksResponse>(
      "https://api.artic.edu/api/v1/artworks",
      {
        params: { page: page, limit: limit },
      }
    );
    // .catch((err) => console.log(err.data.status));
    return getFiltersArtWork(data.data);
  }

  static async getOtherWorks() {
    const { data } = await axios.get<ArtWorksResponse>(
      "https://api.artic.edu/api/v1/artworks?page=2"
    );

    return getFiltersArtWork(data.data);
  }

  static async getById(id: string) {
    const { data } = await axios.get<ArtWorkByIdResponse>(
      "https://api.artic.edu/api/v1/artworks/" + id
    );

    return getFiltersArtWork([data.data])[0];
  }

  static async getSearchArtWork(searchQuery: string) {
    const { data } = await axios.get<ArtWorksResponse>(
      `https://api.artic.edu/api/v1/artworks/search?q=${searchQuery}`
    );

    return getFiltersArtWork(data.data);
  }
}
