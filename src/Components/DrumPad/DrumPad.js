import React from 'react';


const drumPad = (props) => {
    return (
    <button 
      className={props.dataClass} 
      id={props.id}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      data-key={props.dataKey}>
        <audio 
          className='clip'
          id={props.buttonName} 
          src={props.audioUrl}
          data-key={props.dataKey} />
        {props.children}
      </button>)
}

export default drumPad;