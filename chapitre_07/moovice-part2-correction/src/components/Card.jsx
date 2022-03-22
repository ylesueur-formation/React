import React from 'react';

const URL_IMG = "https://image.tmdb.org/t/p/w300/";

export class Card extends React.Component {
    onClickHandler = () => {
        if (this.props.onFavorite) {
            this.props.onFavorite(this.props.id)
        }
    }
    render() {
        return (
        <div className="card" onClick={this.onClickHandler}>
            <img style={{width: "280px"}} src={URL_IMG + this.props.image}/>
            <h2>{this.props.title}</h2>
            <p>{this.props.year}</p>
            <p>{this.props.descritpion}</p>
        </div>
        )
    }
}