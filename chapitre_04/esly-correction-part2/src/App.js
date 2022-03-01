import React from "react";
import './App.css';
import './styles/global.css'
import { Box } from './components/Box';

const tempMin = 20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
		
		constructor(props) {
				super(props);
        this.state = {
          water: 1.5,
          heart: 120,
          temperature: -10,
          steps: 3000
        }
        // this.onHeartChange = this.onHeartChange.bind(this);
		}

    calculateWater() {
      let water = 1.5;
      if (this.state.temperature > 20) {
        let addTemp = this.state.temperature - 20;
        water += addTemp * 0.02;
      }
      if (this.state.heart > 120) {
        water += (this.state.heart - 120) * 0.0008;
      }
      if (this.state.steps > 10_000) {
        water += (this.state.steps - 10_000) * 0.00_002;
      }

      // let water = 1.5;
      // water = max(0, 25 - 20) => max(0, 5) -> 5 * 0.02;
      // water = max(0, 15 - 20) => max(0, -5) ->  0 * 0.02 = 0
      // water += Math.max(0, this.state.temperature - 20) * 0.02;
      // water += Math.max(0, this.state.steps - 10_000) * 0.0008;
      // water += Math.max(0, this.state.heart - 120) * 0.00_002;

      // this.setState({water: water})
      this.setState({water})
    }

    onHeartChange = (e) => {
      this.setState({
        heart: e.target.value
      });
      this.calculateWater();
    }

    onStepChange = (e) => {
      this.setState({
        steps: e.target.value
      });
      this.calculateWater();
    }

    onTempChange = (e) => {
      this.setState({
        temperature: e.target.value
      });
      this.calculateWater();
    }

		render() {
				return (
		      <div className="container-fluid">
		        <div className="row">
		            {/* Water */}
		            <Box icon="local_drink" value={this.state.water.toFixed(2)} unit="L" color="#3A85FF"/>
		            
		            {/* Steps */}
		            <Box icon="directions_walk" min={stepsMin} max={stepsMax} value={this.state.steps}  onChange={this.onStepChange} unit="steps" color="black" />
		            
		            {/* Heart */}
		            <Box icon="favorite" min={heartMin} max={heartMax} value={this.state.heart} onChange={this.onHeartChange} unit="bpm" color="red" />
		            
		            {/* Temperatur */}
		            <Box icon="wb_sunny" min={tempMin} max={tempMax} value={this.state.temperature} onChange={this.onTempChange}  unit="°C" color="yellow" />
		        </div>
		      </div>
		    );
    }
}
export default App;
