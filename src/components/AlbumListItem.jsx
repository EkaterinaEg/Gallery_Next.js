import Link from "next/link";
import "./AlbumListItem.scss";

export default function AlbumListItem(props) {
  const { title, url, id } = props;
  return (
    <Link href={`/albums/${id}`}>
      <article style={{ backgroundImage: `url(${url})` }} className="AlbumListItem">
        <h1>{title}</h1>
      </article>
    </Link>
  );
}

// {
//   id: 2,
//   user_id: 1,
//   title: 'Some more travel pictures',
//   is_public: 0,
//   album_id: 2,
//   url: 'https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_6724.jpg',
//   is_cover: 1
// }
