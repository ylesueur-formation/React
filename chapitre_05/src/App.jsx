import React from 'react';
// ne pas oublier d'installer axios avec npm install axios
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PI: null
        }
    }

    // nom imposé par Reactjs
    componentDidMount = () => {
        const URL = "https://api.pi.delivery/v1/pi?start=0&numberOfDigits=30";
        axios(URL).then((resultat) => {
            console.log("This: ", this);
            let content =  resultat.data.content;
            let PI = content[0] + "," + content.substring(1);
            this.setState({
                PI
            })
        })
    }

    render() {
        return (
        <>
            { (this.state.PI) ? <h2>{this.state.PI}</h2> : <h2>Aucune valeur diponible</h2>}
        </>
        )
    }
}