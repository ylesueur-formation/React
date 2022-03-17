import React from 'react';
import { useParams } from 'react-router-dom';

function withRouter(Component) {
    return (props) => { return <Component params={useParams()} {...props} />}
}

class Produit extends React.Component {
    constructor(props) {
        super(props);
        console.log("Params: ", this.props.params);
        this.state = {
            arr: [
                ["a", "b"],
                ["c", "d"]
            ]
        }
    }

    test = () => {
        const a = "a";
        const arr = [...this.state.arr];
        arr[1][0] = "y";
        this.setState({arr})
    }
    render() {
        return (
        <>
            <p>Produit: {this.props.params.produitId}</p>
            <button onClick={this.test}>Test</button>
            {this.state.arr.map(e => <p>{e}</p>)}
        </>
        )
    }
}

export default withRouter(Produit)