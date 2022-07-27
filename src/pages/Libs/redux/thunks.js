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
  dispatch(actions.setAnswerValue(newArray));
}

export default {
  getNewMadLib,
  setUserAnswers,
};