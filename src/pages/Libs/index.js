import { connect } from "react-redux";
import { getNewMadLib } from "./redux/thunks";

import Libs from "./layout";

const mapStateToProps = ({madLib}) => {
  return {
    title: madLib.title,
    libTextArray: madLib.libTextArray,
    fillTypeArray: madLib.fillTypeArray,
  };
};

const mapDispatchToProps = {
  getNewMadLib,
};

export default connect(mapStateToProps, mapDispatchToProps)(Libs);