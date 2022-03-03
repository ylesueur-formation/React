import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    sendToParent = () => {
        console.log(this.props.children);
        this.props.onClick(this.props.children);
    }

    render() {
        return (
            <button onClick={this.sendToParent}>{this.props.children}</button>
            // <button onClick={() => { this.props.onClick(this.props.children) }}>{this.props.children}</button>
        )
    }
}