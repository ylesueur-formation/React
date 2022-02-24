import React from "react";

export class Box extends React.Component {
    render() {
        let stepRange = 1;
        if (this.props.icon === "directions_walk") {
            stepRange = 1_000;
        }
        let conditionnalField = <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={this.props.onChange} step={stepRange}/>;
        // let conditionnalField = <input type="range" {...this.props} />;
        if (this.props.icon === "local_drink") {
            conditionnalField = '';
        }
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{fontSize: "100px", color: this.props.color}}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                { conditionnalField }
            </div>
        );
    }
}

