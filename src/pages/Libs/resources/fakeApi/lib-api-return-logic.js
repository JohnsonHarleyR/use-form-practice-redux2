import MadLibDataModel from "../../models/MadLibDataModel";
import AllLibs from "./constants/all-libs";
import { StringType } from "./constants/lib-enums";
import { capitalizeFirstLetters } from '../../../../common/helpers/grammar-helper';

//#region Retrieve new lib from fake API

export const getRandomMadLib = () => {
  let lib = selectRandomLib();
  let arrays = createDataModelArrays(lib.text);
  let userAnswerArray = createEmptyUserAnswerArray(arrays.fillTypeArray);
  let result = {...arrays, title: lib.title, userAnswerArray: userAnswerArray};
  return result;
}

// export const getNewLibResult = () => {
//   let lib = selectRandomLib();
//   let model = populateModLibDataModel(lib);
//   return model;
// }



//#endregion


//#region Select lib methods

const selectRandomLib = () => {
  let max = AllLibs.length;
  let index = Math.floor(Math.random() * max);
  return AllLibs[index];
}

//#endregion


//#region Populate model methods

// const populateModLibDataModel = ({title, text}) => {
//   let arrays = createDataModelArrays(text);
  
//   let model = new MadLibDataModel(title, arrays.libTextArray, arrays.fillTypeArray);
//   return model;
// }


//#endregion

//#region Logic

const createEmptyUserAnswerArray = (fillTypeArray) => {
  let userAnswerArray = [];
  fillTypeArray.forEach(f => {
    userAnswerArray.push({
      id: f.id,
      label: f.text,
      value: null,
    });
  });
  return userAnswerArray;
}

const createDataModelArrays = (text) => {
  // get indexes of all separators
  let indexes = findAllSeparatorIndexes(text);
  let libTextArray = [];
  let fillTypeArray = [];

  // loop through index count, change text as it goes.
  let startIndex = 0;
  let count = 1;
  for (let i = 0; i < indexes.length; i++) {
    let startCharacter = startIndex !== text.length - 1
      ? text.substring(startIndex, startIndex + 1)
      : text.substring(startIndex);
    let type = startCharacter !== "|"
      ? StringType.TEXT
      : StringType.FILL;

    let endIndex = type === StringType.TEXT // if text, don't include separator. If fill, do - for now.
      ? indexes[i]
      : indexes[i] + 1 !== undefined
        ? indexes[i] + 1
        : null;

    let toAdd = endIndex !== null
      ? text.substring(startIndex, endIndex)
      : text.substring(startIndex);
    if (type === StringType.FILL) {
      toAdd = toAdd.substring(1, toAdd.length - 1); // take away separators
    }

    if (type === StringType.TEXT) {
      libTextArray.push({
        id: count,
        text: toAdd,
      });
      count++;
    } else {
      fillTypeArray.push({
        id: count,
        text: capitalizeFirstLetters(toAdd),
      });
      count++;
    }

    startIndex = endIndex;

  }

  if (startIndex < text.length) {
    libTextArray.push({
      id: count,
      text: text.substring(startIndex),
    });
  }

  return {libTextArray, fillTypeArray};
}

const findAllSeparatorIndexes = (text) => {
  let indexes = [];
  for (let i = 0; i < text.length; i++) {
    let character = i !== text.length - 1
      ? text.substring(i, i + 1)
      : text.substring(i);
    if (character === "|") {
      indexes.push(i);
    }
  }
  return indexes;
}

//#endregion