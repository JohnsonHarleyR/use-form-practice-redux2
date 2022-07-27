import actions from "./actions"

export const getNewMadLib = () => async (
  dispatch,
  getState,
) => {
  //const state = getState();
  //console.log(`lib initial state: ${JSON.stringify(state)}`);
  dispatch(actions.getMadLib());
  //const newState = getState();
  //console.log(`lib new state: ${JSON.stringify(newState)}`);
}

export default {
  getNewMadLib,
};