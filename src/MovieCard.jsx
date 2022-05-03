import React from "react";

const MovieCard = ({ filmuno }) => {
    return (
        <div className="movie">
            <div>
                <p>{filmuno.Year}</p>
            </div>
            <div>
                <img src={(filmuno).Poster} alt={filmuno.Title}/>
            </div>
            <div>
                <span>{filmuno.Type}</span>
                <h3>{filmuno.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;