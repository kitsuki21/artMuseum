import axios from "axios";

export default class PostService {
  static async getAll(limit = 3, page = 1) {
    // const responsive = await fetch("https://api.artic.edu/api/v1/artworks/");
    // const result = await responsive.json();
    // return result.data;
    const responsive = await axios.get(
      "https://api.artic.edu/api/v1/artworks",
      {
        params: { limit: limit, page: page },
      }
    );
    return responsive.data;
  }

  static async getOtherWorks() {
    const responsive = await axios.get("https://api.artic.edu/api/v1/artworks");

    return responsive.data;
  }

  static async getById(id: string | undefined) {
    const responsive = await axios.get(
      "https://api.artic.edu/api/v1/artworks/" + id
    );

    return responsive.data;
  }

  static async getPagination() {
    const responsive = await axios.get("https://api.artic.edu/api/v1/artworks");

    return responsive;
  }
}
