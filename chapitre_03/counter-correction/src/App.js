import React from 'react';
import './App.css';
import {Counter} from './components/Counter';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        }
        // this.decrementCount = this.decrementCount.bind(this);
    }

    decrementCount = () => {
      this.setState({
        count: this.state.count - 1
      });
    }

    incrementCount = () => {
      let oldCount = this.state.count;
      this.setState({
        count: oldCount + 1
      });
    }
    
    render() {
      return (
        // <>: React.Fragment. On peut aussi mettre une div si on veut
        <>
          <h1>Counter</h1>
          <Counter count={this.state.count} decrementCount={this.decrementCount} incrementer={this.incrementCount}/>
        </>
      );
    }
}
