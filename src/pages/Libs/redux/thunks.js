import actions from "./actions"

export const getNewMadLib = () => async (
  dispatch,
) => {
  dispatch(actions.getMadLib());
}

export const setUserAnswers = (data) => async (
  dispatch,
  getState,
) => {
  const state = getState();
  let array = state.madLib.userAnswerArray;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push({
      id: array[i].id,
      label: array[i].label,
      value: data[`${array[i].id}`],
    });
  }
  dispatch(actions.setAnswerValues(newArray));
}

export const renderLibResult = () => async (
  dispatch,
  getState,
) => {
  const state = getState();
  let libTextArray = state.madLib.libTextArray;
  let userAnswers = state.madLib.userAnswerArray;

  // put texts and answer texts in order - make into array
  let combinedLength = libTextArray.length + userAnswers.length;

  let newArray = Array(combinedLength).fill({});

  // go through both arrays and populate new array accordingly
  libTextArray.forEach(a => {
    newArray[a.id - 1] = {
      text: a.text,
      class: 'lib-text',
    };
  });

  userAnswers.forEach(a => {
    newArray[a.id - 1] = {
      text: a.value,
      class: 'answer-text',
    };
  });

  dispatch(actions.setMadLibResult(newArray));
}

export default {
  getNewMadLib,
  setUserAnswers,
};