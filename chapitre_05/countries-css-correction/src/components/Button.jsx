import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.translation = {
            'Brésil': 'Brasil',
            'France': 'France',
            'Croatie': 'Croatia',
        }
        this.countryName = this.translation[this.props.children];
    }

    sendToParent = () => {
        // console.log("Contry Name: ", this.countryName);
        this.props.onCountry(this.countryName);
    }

    render() {
        return (
            <button onClick={this.sendToParent} className="btn btn-info m-3">
                {this.props.children}
            </button>
            // <button onClick={() => { this.props.onCountry(this.props.children) }}>{this.props.children}</button>
        )
    }
}