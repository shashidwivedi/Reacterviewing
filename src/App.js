import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import AlbumList from "./album/AlbumList";
import "./App.css";

const App = () => {
    const baseURL = "https://jsonplaceholder.typicode.com";

    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/photos`)
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.error("Error while fetching: ", error));
    }, []);

    return (
        <div className="albums-app">
            <h1>React Interview Challenge</h1>
            <AlbumList albums={albums} />
        </div>
    );
};

export default hot(module)(App);
