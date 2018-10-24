import React, { Component } from 'react';

import DrumMachine from './Components/DrumMachine/DrumMachine';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        {id: 'Q'},
        {id: 'W'},
        {id: 'E'},
        {id: 'A'},
        {id: 'S'},
        {id: 'D'},
        {id: 'Z'},
        {id: 'X'},
        {id: 'C'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <DrumMachine buttons={this.state.buttons} />
      </div>
    );
  }
}

export default App;
