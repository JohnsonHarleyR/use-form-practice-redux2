import actions from "./actions"

export const getNewMadLib = () => async (
  dispatch,
) => {
  dispatch(actions.getMadLib());
}

export const setUserAnswer = (id, value) => async (
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
      value: array[i].id === id
        ? value
        : array[i].value,
    });
  }
  dispatch(actions.setAnswerValue(newArray));
}

export default {
  getNewMadLib,
  setUserAnswer,
};