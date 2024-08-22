import axios from "axios";

export default class PostService {
  static async getAllWorks(page = 1, limit = 3) {
    const responsive = await axios.get(
      "https://api.artic.edu/api/v1/artworks",
      {
        params: { page: page, limit: limit },
      }
    );
    return responsive.data;
  }

  static async getOtherWorks() {
    const responsive = await axios.get(
      "https://api.artic.edu/api/v1/artworks?page=2"
    );

    return responsive.data;
  }

  static async getById(id: string | undefined) {
    const responsive = await axios.get(
      "https://api.artic.edu/api/v1/artworks/" + id
    );

    return responsive.data;
  }
}
