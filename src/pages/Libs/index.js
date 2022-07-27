import { connect } from "react-redux";
import { getNewMadLib, setUserAnswers, renderLibResult } from "./redux/thunks";

import Libs from "./layout";

const mapStateToProps = ({madLib}) => {
  return {
    title: madLib.title,
    fillTypeArray: madLib.fillTypeArray,
    libResultArray: madLib.textResultArray,
  };
};

const mapDispatchToProps = {
  getNewMadLib,
  setUserAnswers,
  renderLibResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(Libs);