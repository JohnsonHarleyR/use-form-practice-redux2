import {
  URL_SET_ALL_PARAM,
} from './types';

const [
  // eslint-disable-next-line no-unused-vars
  _,
  name,
] = window.location.pathname.split('/');

export const initialState = {
  name: name,
};

export default function urlReducer(state = initialState, { type, payload }) {
  console.log('url reducer');
  switch (type) {
    case URL_SET_ALL_PARAM:
      console.log(`URL_SET_ALL_PARAM`);
      return {
        ...state,
        name: payload,
      };
    default:
      console.log(`url reducer - default`);
      return state;
  }
}