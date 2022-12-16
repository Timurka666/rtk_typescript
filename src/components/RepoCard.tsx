import React, { useState } from "react";
import { IRepo } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

export default function RepoCard({repo}: {repo: IRepo}) {

    const {addFavourite, removeFavourite} = useActions();
    const {favourites} = useAppSelector(state => state.github);
    const [isFav, setFav] = useState(favourites.includes(repo.html_url));

    const addToFavs = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addFavourite(repo.html_url);
        setFav(true);
    };
    const removeFavs = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        removeFavourite(repo.html_url);
        setFav(false);
    };

    return (
        <div className="repo-card border py-3 px-2 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <a href={repo.html_url} target="_blank">
                <h2 className="font-bold text-lh">{repo.full_name}</h2>
                <p className="text-small description">
                    Forks: <span className="font-bold">{repo.forks}</span>
                    Watchers: <span className="font-bold">{repo.watchers}</span>
                    {repo.description && <span>Description: {repo.description}</span>}
                </p>
            </a>
            {isFav ? <button
                className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
                onClick={removeFavs}
            >Remove from favs</button> : 
            <button
            className="py-2 px-4 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all"
            onClick={addToFavs}
            >Add to favs</button>}

        </div>
    );
}