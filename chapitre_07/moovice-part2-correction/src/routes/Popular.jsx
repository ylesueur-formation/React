import axios from 'axios';
import React from 'react';
import { Card } from '../components/Card';

const API_KEY = "f41e0eae90e54f52c3395e4a7271f9ac";

export class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    // Le nom est imposé. 
    componentDidMount() {
        const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
        axios(URL).then( (reponse) => {
            const data = reponse.data;
            const movies = data.results
            // console.log(movies);
            this.setState({
                movies: movies
            })
        })
    }

    render() {
        return (
        <>
            <h1>Popular</h1>
            {
                this.state.movies.map(movie => {
                    return <Card key={movie.id} title={movie.title} image={movie.poster_path} descritpion={movie.overview} year={movie.release_date}/>
                })
            }
        </>
        )
    }
}