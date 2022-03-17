import React from 'react';
import axios from 'axios';
import { Card } from '../components/Card';

const API_KEY = "f41e0eae90e54f52c3395e4a7271f9ac";

export class PopularBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentBattle: 0
        }
    }
    
    componentDidMount() {
        const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
        axios(URL).then( (reponse) => {
            const data = reponse.data;
            const movies = data.results
            this.setState({
                movies: movies
            })
        })
    }

    onFavoriteHandler(movieID) {
        console.log(movieID);
        // const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites === null) {
            favorites = [];
        }
        console.log("Favorites: ", favorites);
        const isInFavorite = favorites.includes(movieID);
        console.log("isInFavorite: ", isInFavorite);
        if (isInFavorite === false) {
            favorites.push(movieID);
        }
        
        localStorage.setItem("favorites", favorites);
    }

    render() {
        return (
        <>
            <h1>PopularBattle</h1>
            <div style={{display: "flex", justifyContent: "space-around"}}>
            {
                // Slice: permet de prendre une tranche du tableaux.
                this.state.movies.slice(this.state.currentBattle, this.state.currentBattle+2)
                .map(
                    movie => <Card
                        onFavorite={this.onFavoriteHandler}
                        id={movie.id}
                        title={movie.title}
                        descritpion={movie.overview}
                        year={movie.release}
                        image={movie.poster_path}/>
                    )
            }
            </div>
        </>
        )
    }
}