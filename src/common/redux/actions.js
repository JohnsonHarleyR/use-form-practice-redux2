import { URL_SET_ALL_PARAM } from "./types";

export function parseURL(url = window.location.pathname) {
  const [
    // eslint-disable-next-line no-unused-vars
    _,
    name,
  ] = url.split('/');
  return {
    type: URL_SET_ALL_PARAM,
    payload: {
      name: name,
    },
  };
}