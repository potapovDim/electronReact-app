import {ADD_TEXT, REMOVE_TEXT, SET_NEW_TEXT} from '../constans.jsx'

export const addText = ({text}) => ({
  text, type: ADD_TEXT
})
export const setNewText = ({text}) => ({
  text, type: SET_NEW_TEXT
})
export const removeText = () => ({
  type: REMOVE_TEXT
})

const initialState = {
  text: ''
}


export default (state = initialState , action) => {
    switch(action.type){
      case ADD_TEXT:
        return {...state, text: state.text+ '\n'+ action.text}
      case SET_NEW_TEXT: 
        return {...state, text: action.text}
      case REMOVE_TEXT:
        return {...state, text: ''}
      default:
        return state  
    }
}