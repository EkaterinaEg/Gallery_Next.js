import Link from "next/link";
import "./Header.scss";

export default async function Header(props) {
  const { user } = props;

  return (
    <header className="UserHeader">
      <div>
        <h1>
          <Link href="/">Galronel</Link>
        </h1>
        <h2>A photo sharing project</h2>
        <nav>
          <li>
            <Link href="/photos">Photos</Link>
          </li>
          <li>
            <Link href="/albums">Albums</Link>
          </li>
          <li>
            <Link href="/albums/new">New</Link>
          </li>
          {user && <li>{user.username}</li>}
        </nav>
      </div>
    </header>
  );
}
