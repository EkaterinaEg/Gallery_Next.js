"use server";

const { cookies } = require("next/headers");
import client from "./db";

const albums = [
  {
    id: 1,
    user_id: 1,
    title: "Some travel pictures!",
    is_public: 1,
    cover_id: 2,
    album_id: 1,
    url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_1126.jpg",
  },
  {
    id: 2,
    user_id: 1,
    title: "Some more travel pictures!",
    is_public: 0,
    cover_id: 38,
    album_id: 2,
    url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_6268.jpg",
  },
];

export const fetchAlbumsbyUserId = async () => {
  const userId = Number(cookies().get("userId")?.value);

  if (!userId) {
    return [];
  }
  const sql =
    "SELECT * FROM albums JOIN photos ON photos.id = albums.cover_id WHERE albums.user_id = ?";
  const args = [userId];

  const albums = await client.execute({ sql, args });
  // return albums.filter((album) => album.user_id === userId);
  return albums.rows;
};

export const fetchPhotosFromAlbumId = async (albumId) => {
  const userId = Number(cookies().get("userId")?.value);

  if (!userId) {
    return [];
  }

  const sql =
    "SELECT * FROM photos WHERE photos.album_id = ? AND photos.user_id = ?";

  const args = [albumId, userId];
  const albums = await client.execute({ sql, args });
  return albums.rows;
};
