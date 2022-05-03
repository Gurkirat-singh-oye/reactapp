import {useEffect, useState} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

//1fff0837

const Api_url = 'https://www.omdbapi.com?apikey=1fff0837'

/*const filmuno = {
    "Title": "Superbad",
    "Year": "2007",
    "imdbID": "tt0829482",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_SX300.jpg"
}*/

const App = () => {

    const [movies, setmovies] = useState([])

    const [searchT, setsearchT] = useState([])

    const srchfilm = async (tite) => {
        const res = await fetch(`${Api_url}&s=${tite}`)
        const data = await res.json() //data.Search

        setmovies(data.Search)
    }

    useEffect(() => {
        const tmp = (srchfilm('Superbad'))
        console.log(tmp[-1])
    }, [])

    return (
        <div className="App">
            <h1>FilmFeud</h1>

            <div className="search">
                <
                    input placeholder="This is where the fun begins" 
                    value={searchT} 
                    onChange={(e) => setsearchT(e.target.value)}
                />
                <img src={SearchIcon} alt="search" onClick={() => srchfilm(searchT)}/>
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((filmuno) => (
                                <MovieCard filmuno={filmuno}/>
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>PM CARES FUND</h2>
                        </div>
                    )
            }

            

        </div>
    )
}

export default App;