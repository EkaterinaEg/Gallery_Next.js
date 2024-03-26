import Photolist from "@/components/PhotoList";
import {fetchPhotosFromAlbumId} from "@/actions/albumActions";

export default async function AlbumPage(props) {

  const photos = await fetchPhotosFromAlbumId(props.params.albumId);
  return (
    <div>
      <h1>This is the Album Page</h1>
      {photos && <Photolist photos={photos} />}

    </div>
  );
}