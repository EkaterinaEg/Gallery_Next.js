
import {fetchAlbumsbyUserId} from "@/actions/albumActions";
import AlbumList from '@/components/AlbumList';

export default async function AlbumsPage(props) {
  let albums;
  try {
    albums = await fetchAlbumsbyUserId();

  } catch (err) {
    console.log(err);
    albums = [];
  }
  console.log(albums);

  return (
    <div>
      <h1>This is the AlbumsPage</h1>

      <AlbumList albums={albums} />

    </div>
  );

};
