import React from 'react';
import GoogleMapReact from "google-map-react"; // le fameux moduleconst API_KEY = "AIzaSyC6PMpJn8imbEwWa9zGu8dgKCpPPnPk8Ss";

const API_KEY = "AIzaSyC6PMpJn8imbEwWa9zGu8dgKCpPPnPk8Ss";

export class LocationPin extends React.Component {
    render() {
        return (
        <div style={{fontSize: "2rem"}}>
            <span class="material-icons">
                location_on
            </span>
            Konexio    
        </div>
        )
    }
}
export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(`latitude : ${position.coords.latitude} / longitude : ${position.coords.longitude}`);
          }, (error) => {
            console.error(error);
          });
    }
    render() {
        return (
        <div style={{width: "800px", height: "600px"}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: API_KEY}}
                defaultCenter={{lat: 48.8531706, lng: 2.4028778}}
                defaultZoom={15}
            >
                <LocationPin lat={48.8531706} lng={2.4028778} er />
            </GoogleMapReact>
        </div>
        )
    }
}