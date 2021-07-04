import React from "react";
import placeholder from "./placeholder.svg";
import "./AlbumItem.css";

const AlbumItem = ({ album }) => {
    const removeLetterE = (title) => {
        return title.replace(/e/gi, '');
    }

    return (
        <li className="album-item">
            <img src={album.url}></img>
            <h3 data-testid="title">{removeLetterE(album.title)}</h3>
        </li>
    )
};

export default AlbumItem;
