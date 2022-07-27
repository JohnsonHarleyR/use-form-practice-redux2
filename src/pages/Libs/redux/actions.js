import { getRandomMadLib } from "../resources/fakeApi/lib-api-return-logic";
import TYPES from "./types";

// Get Mad Lib

const getMadLib = () => {
  let madLib = getRandomMadLib();
  return {
    type: TYPES.GET_MAD_LIB,
    title: madLib.title,
    libTextArray: madLib.libTextArray,
    fillTypeArray: madLib.fillTypeArray,
    userAnswerArray: madLib.userAnswerArray,
  };
}

const setAnswerValues = (userAnswerArray) => {
  return {
    type: TYPES.SET_ANSWER_VALUES,
    userAnswerArray: userAnswerArray,
  }
}

export default {
  getMadLib,
  setAnswerValue: setAnswerValues,
};