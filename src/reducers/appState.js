import * as ButtonActionTypes from '../actionTypes/button';

const initialState = {
  startArray: [
			'a',
		  'b',
		  'c',
		  'd',
		  'e',
		  'f',
			'g',
		  'h',
		  'i',
		  'j',
		  'k',
		  'l'
		],
  iterationCount: 0
};

export default function AppState(state=initialState, action) {
	switch(action.type) {
		case ButtonActionTypes.LOAD_MORE:
			return {
        ...state,
      	iterationCount: state.iterationCount + 1,
      };
			
		default:
			return state;
	}
}