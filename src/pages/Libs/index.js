import { connect } from "react-redux";
import { getNewMadLib, setUserAnswer } from "./redux/thunks";

import Libs from "./layout";

const mapStateToProps = ({madLib}) => {
  return {
    title: madLib.title,
    libTextArray: madLib.libTextArray,
    fillTypeArray: madLib.fillTypeArray,
    userAnswerArray: madLib.userAnswerArray,
  };
};

const mapDispatchToProps = {
  getNewMadLib,
  setUserAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Libs);