import TYPES from "./types";

const initialState = {
  title: '',
  libTextArray: [],
  fillTypeArray: [],
  userAnswerArray: [],
  textResultArray: [],
}

const madLibReducer = (state = initialState, action) => {
  //console.log('mad lib reducer');
  switch (action.type) {
    case TYPES.GET_MAD_LIB:
      //console.log(`retrieved lib`);
      return {
        ...state,
        title: action.title,
        libTextArray: action.libTextArray,
        fillTypeArray: action.fillTypeArray,
        userAnswerArray: action.userAnswerArray,
      };
    case TYPES.SET_ANSWER_VALUES:
      return {
        ...state,
        userAnswerArray: action.userAnswerArray,
      }
    case TYPES.SET_MAD_LIB_RESULT:
      return {
        ...state,
        textResultArray: action.textResultArray,
      }
    default:
      return state;
  }
}

export default madLibReducer;