import { Button, Card, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import { API } from './global';

const MovieDetails = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [value, setValue] = useState(0)

    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const getMovie = () => {
        fetch(`${API}/imdbmovies/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((mv) => setMovie(mv));
    };
    useEffect(() => getMovie(), []);


    return (
        <div className='Detail-container'>

            <div>
                <div className='Movie-specs'>
                    <h3 className='Movie-name'>{movie.name} </h3>
                    <p className='Movie-rating'>⭐{movie.rating}</p>
                </div>
                <div className='movie-media-container'>
                    <img className='movie-detail-poster' src={movie.poster} alt={movie.name} />
                    <Carousel className='carousel'>
                        <Carousel.Item>
                            <iframe width="800" height="450" src={movie.trailer}
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Carousel.Item>
                        <Carousel.Item>
                            <iframe width="800" height="450" src={movie.video}
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='MovieDetail-container'>

                    <div className='movie-genre'>
                        <p className='movie-genre-list'>{movie?.genre?.[0]}</p>
                        <p className='movie-genre-list'>{movie?.genre?.[1]}</p>
                        <p className='movie-genre-list'>{movie?.genre?.[2]}</p>
                    </div>

                    <p className='movie-summary'>{movie.summary}</p>
                    <p className='movie-director'>Director <p className='movie-crew-name'>  {movie.director}</p></p>
                    <p className='movie-director'>writter <p className='movie-crew-name'>  {movie.writter}</p></p>
                    <div className='actor-card-list'>
                        <Card className='actor-details-card' onClick={() => setShow(!show)}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={movie.actor1image}
                                alt={movie?.actor?.[0]}
                            />
                            <p className='card-actor-name'>{movie?.actor?.[0]}</p>
                            {show ? <Typography>
                                <div className='actor-skills'>
                                    <p className='skill-list'>Roles</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[0]}</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[1]}</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[2]}</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[3]}</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[4]}</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[5]}</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[6]}</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[7]}</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[8]}</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[9]}</p>
                                    <p className='skill-listitem'>{movie?.actor1rolls?.[10]}</p>
                                </div>
                                <div className='actor-skills'>
                                    <p className='skill-list'>Skills</p>
                                    <p className='skill-listitem'>{movie?.actor1skills?.[0]}</p>
                                    <p className='skill-listitem'>{movie?.actor1skills?.[1]}</p>
                                    <p className='skill-listitem'>{movie?.actor1skills?.[2]}</p>
                                    <p className='skill-listitem'>{movie?.actor1skills?.[3]}</p>
                                    <p className='skill-listitem'>{movie?.actor1skills?.[4]}</p>
                                    <p className='skill-listitem'>{movie?.actor1skills?.[5]}</p>
                                </div>
                            </Typography> : null}

                        </Card>
                        <Card className='actor-details-card' onClick={() => setShow1(!show1)}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={movie.actor2image}
                                alt={movie?.actor?.[1]}
                            />
                            <p className='card-actor-name'>{movie?.actor?.[1]}</p>
                            {show1 ? <Typography>
                                <div className='actor-skills'>
                                    <p className='skill-list'>Roles</p>
                                    <p className='skill-listitem'>{movie?.actor2rolls?.[0]}</p>
                                    <p className='skill-listitem'>{movie?.actor2rolls?.[2]}</p>
                                    <p className='skill-listitem'>{movie?.actor2rolls?.[1]}</p>
                                    <p className='skill-listitem'>{movie?.actor2rolls?.[3]}</p>
                                    <p className='skill-listitem'>{movie?.actor2rolls?.[4]}</p>
                                    <p className='skill-listitem'>{movie?.actor2rolls?.[5]}</p>
                                </div>
                                <div className='actor-skills'>
                                    <p className='skill-list'>Skills</p>
                                    <p className='skill-listitem'>{movie?.actor2skills?.[0]}</p>
                                    <p className='skill-listitem'>{movie?.actor2skills?.[1]}</p>
                                    <p className='skill-listitem'>{movie?.actor2skills?.[2]}</p>
                                    <p className='skill-listitem'>{movie?.actor2skills?.[3]}</p>
                                    <p className='skill-listitem'>{movie?.actor2skills?.[4]}</p>
                                    <p className='skill-listitem'>{movie?.actor2skills?.[5]}</p>
                                </div>
                            </Typography> : null}

                        </Card>
                        <Card className='actor-details-card' onClick={() => setShow2(!show2)}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={movie.actor3image}
                                alt={movie?.actor?.[2]}
                            />
                            <p className='card-actor-name'>{movie?.actor?.[2]}</p>
                            {show2 ? <Typography>
                                <div className='actor-skills'>
                                    <p className='skill-list'>Roles</p>
                                    <p className='skill-listitem'>{movie?.actor3rolls?.[0]}</p>
                                    <p className='skill-listitem'>{movie?.actor3rolls?.[1]}</p>
                                    <p className='skill-listitem'>{movie?.actor3rolls?.[2]}</p>
                                    <p className='skill-listitem'>{movie?.actor3rolls?.[3]}</p>
                                    <p className='skill-listitem'>{movie?.actor3rolls?.[4]}</p>
                                    <p className='skill-listitem'>{movie?.actor3rolls?.[5]}</p>
                                </div>
                                <div className='actor-skills'>
                                    <p className='skill-list'>Skills</p>
                                    <p className='skill-listitem'>{movie?.actor3skills?.[0]}</p>
                                    <p className='skill-listitem'>{movie?.actor3skills?.[1]}</p>
                                    <p className='skill-listitem'>{movie?.actor3skills?.[2]}</p>
                                    <p className='skill-listitem'>{movie?.actor3skills?.[3]}</p>
                                    <p className='skill-listitem'>{movie?.actor3skills?.[4]}</p>
                                    <p className='skill-listitem'>{movie?.actor3skills?.[5]}</p>
                                </div>
                            </Typography> : null}

                        </Card>

                    </div>

                    <div className='review-container'>
                        <p className='review-head'>Reviews</p>
                        <div>
                            <p>What is your rating for this movie?</p>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);

                                }}

                            />
                        </div>
                        <p className='reviews-text'>{movie?.review?.[0]}</p>
                        <p className='reviews-text'>{movie?.review?.[1]}</p>
                        <p className='reviews-text'>{movie?.review?.[2]}</p>
                    </div>
                    <Button onClick={() => navigate(-1)} variant="contained">Back</Button>
                </div>
            </div>


        </div>
    )
}

export default MovieDetails