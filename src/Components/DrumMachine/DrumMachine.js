import React, { Component } from 'react';

import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';

class drumMachine extends Component {
  render(){
    const buttons = this.props.buttons.map(button => {
      return <DrumPad key={button.id}>{button.id}</DrumPad>
    })
    return (
      <div id='drum-machine'>
        <Display />
        {buttons}
      </div>
    );
  }
}

export default drumMachine;