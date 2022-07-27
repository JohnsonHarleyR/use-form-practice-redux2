import { combineReducers } from "redux";
import { HomeReducer as home } from "../pages/Home/redux";
import { MadLibReducer as madLib } from "../pages/Libs/redux";
import url from '../common/redux/reducers';

const rootReducer = combineReducers({
  url,
  home,
  madLib,
});

export default rootReducer;