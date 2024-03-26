"use client";

import { setAlbumTitle } from "@/actions/albumActions";
import { useState } from "react";
import "./AlbumForm.scss";

export default function AlbumForm(props) {
  const { title: originalTitle, albumId } = props;

  const [title, setTitle] = useState(originalTitle);

  const handleSubmit = (event) => {
    event.preventDefault();

    setAlbumTitle(albumId, title);
  };

  const handleChange = (event) => setTitle(event.target.value);
  return (
    <form onSubmit={handleSubmit} className="AlbumForm">
      <input type="text" name="title" value={title} onChange={handleChange} />
      <button>Save</button>
    </form>
  );
}
