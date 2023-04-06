import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from './global';

const Movielist = () => {

    const navigate = useNavigate();
    const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`${API}/imdbmovies`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  }, [])
  console.log(movieList)

    return (
        <div>
            <div className='movie-list'>
                {movieList.map((movie) => (
                    <Card className='movie-card' key={movie.id}>
                       <img className='movie-poster' src={movie.poster} alt={movie.name} onClick={()=> navigate(`/moviedetails/${movie.id}`)} />
                        <div className='movie-card-name'>
                            <p className='movie-name'>{movie.name} ({movie.releaseyear})</p>
                            <p>⭐{movie.rating}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Movielist