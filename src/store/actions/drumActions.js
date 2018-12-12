import * as actionTypes from './actionTypes';

export const clickHandlerAction = (event) => {
    return {
        type: actionTypes.CLICK_ACTION,
        payload: {
            displayText: event.target.getAttribute('id'),
            audio: document.querySelector(`#${event.target.textContent}`)
        }
    }
}

export const keyDownAction = (event) => {
    return {
        type: actionTypes.KEY_DOWN_ACTION,
        payload: event.keyCode
    }
}