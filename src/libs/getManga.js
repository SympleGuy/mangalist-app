import axios from "axios";

export const getRandomManga = async () => {
  try {
    const res = await axios.get("https://api.jikan.moe/v4/random/manga");
    return res.data; //OBJECT
  } catch (error) {
    console.log(error);
  }
};

export const getMangaByTitle = async (title) => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/manga/${title}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMangaCovers = async (mangaId) => {
  try {
    const res = await axios.get(`https://api.mangadex.org/cover?`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
