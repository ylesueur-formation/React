import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { Card } from '../components/Card';

const API_KEY = "f41e0eae90e54f52c3395e4a7271f9ac";

export class Weekly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }


    // Le nom est imposé. 
    componentDidMount() {
        const dateFormat = "YYYY-MM-DD"
        const date = new Date();
        const TODAY = moment(date).format(dateFormat);
        const LAST_WEEK = moment(date).subtract(7, "days").format(dateFormat);

        const URL = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}`
        axios(URL).then( (reponse) => {
            console.log("Reponse: ", reponse);
            const data = reponse.data;
            const movies = data.results
            this.setState({
                movies: movies
            })
        })
    }

    render() {
        return (
        <>
            <h1>Weekly</h1>
            {
                this.state.movies.map(movie => {
                    return <Card key={movie.id} title={movie.title} image={movie.poster_path} descritpion={movie.overview} year={movie.release_date}/>
                })
            }
        </>
        )
    }
}