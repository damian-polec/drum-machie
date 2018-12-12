import React from 'react';

const audio = (props) => {
  return <audio className='clip' id={props.id} src={props.audioSrc} onClick={props.click} />
}

export default audio;