export default class PostService {
  static async getAll() {
    const responsive = await fetch("https://api.artic.edu/api/v1/artworks");
    const result = await responsive.json();
    return result.data;
  }
}
