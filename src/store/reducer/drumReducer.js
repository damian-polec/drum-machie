import * as actionTypes from '../actions/actionTypes';

const initialState = {
    padButtonName: ''
}

const drumReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CLICK_ACTION:
            action.payload.audio.currentTime = 0;
            action.payload.audio.play();
            return {
                ...state,
                padButtonName: action.payload.displayText
            }
        case actionTypes.KEY_DOWN_ACTION:
            const audio = document.querySelector(`audio[data-key="${action.payload}"]`);
            if(audio) {
                audio.currentTime = 0;
                audio.play();
                return {
                    ...state,
                    padButtonName: document.querySelector(`button[data-key="${action.payload}"]`).getAttribute('id')
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default drumReducer;