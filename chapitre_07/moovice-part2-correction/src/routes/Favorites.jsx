import axios from 'axios';
import React from 'react';
import { Card } from '../components/Card';

const API_KEY = "f41e0eae90e54f52c3395e4a7271f9ac";

export class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            favIDs: this.getStorage()
        }
    }

    getStorage = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")); 
        if (favorites === null) {
            return [];
        }
        return favorites;

    }

    getMovie = async (ID) => {
        const URL = `http://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}`
        const reponse = await axios(URL);
        console.log(reponse);
        const movie = reponse.data;
        const movies = [...this.state.movies];
        movies.push(movie);
        console.log(movies);
        this.setState({movies});
    }

    componentDidMount = () => {
        const favIDs = this.state.favIDs;
        for (const ID of favIDs) {
            this.getMovie(ID);
        }
    }

    render() {
        return (
        <>
            <h1>Favorites</h1>
            {
                this.state.movies.map(movie =>  <Card
                    key={movie.id}
                    onFavorite={null}
                    id={movie.id}
                    title={movie.title}
                    descritpion={movie.overview}
                    year={movie.release}
                    image={movie.poster_path}/>
                )
            }
        </>
        )
    }
}