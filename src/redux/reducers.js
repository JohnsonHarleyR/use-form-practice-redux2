import { combineReducers } from "redux";
import { HomeReducer as home } from "../pages/Home/redux";
import url from '../common/redux/reducers';

const rootReducer = combineReducers({
  url,
  home,
});

export default rootReducer;