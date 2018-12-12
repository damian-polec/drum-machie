import React, { Component } from 'react';
import { connect } from 'react-redux';

import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import * as DrumActions from '../../store/actions/drumActions';

class drumMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        {
          name: 'Heater-1',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
          keyCode: 81,
          keyTrigger: 'Q'
        },
        {
          name: 'Heater-2',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
          keyCode: 87,
          keyTrigger: 'W',
        },
        {
          name: 'Heater-3',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
          keyCode: 69,
          keyTrigger: 'E',
        },
        {
          name: 'Heater-4',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
          keyCode: 65,
          keyTrigger: 'A',
        },
        {
          name: 'Clap',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
          keyCode: 83,
          keyTrigger: 'S',
        },
        {
          name: 'Open-HH',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
          keyCode: 68,
          keyTrigger: 'D',
        },
        {
          name: 'Kick-and-Hat',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
          keyCode: 90,
          keyTrigger: 'Z',
        },
        {
          name: 'Kick',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
          keyCode: 88,
          keyTrigger: 'X',
        },
        {
          name: 'Closed-HH',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
          keyCode: 67,
          keyTrigger: 'C',
        }
      ]
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.props.onKeyDownHandler);
  }

  /*
  onClickHandler = (e) => {
    const displayText = e.target.getAttribute('id');
    const audio = document.querySelector(`#${e.target.textContent}`);
    audio.currentTime = 0;
    audio.play();
    this.setState({padButtonName: displayText});         
  }
  */

  /*
  onKeyDownHandler = (e) => {
    const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if(audio) {
      const displayText = document.querySelector(`button[data-key="${keyCode}"]`).getAttribute('id');
      audio.currentTime = 0;
      audio.play();
      this.setState({padButtonName: displayText});
    }
    console.log(audio);
              
  } 
  */


  render(){
    const buttons = this.state.buttons.map(button => {
      return (
        <DrumPad 
          key={button.name}
          dataClass='drum-pad'
          id={button.name}
          audioUrl={button.audio}
          buttonName={button.keyTrigger}
          dataKey={button.keyCode}
          onClick={this.props.onClickHandler}>{button.keyTrigger}</DrumPad>)
    })
    return (
      <div id='drum-machine'>
        <Display text={this.props.padButtonName}/>
        {buttons}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    padButtonName: state.padButtonName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHandler: (event) => dispatch(DrumActions.clickHandlerAction(event)),
    onKeyDownHandler: (event) => dispatch(DrumActions.keyDownAction(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(drumMachine);