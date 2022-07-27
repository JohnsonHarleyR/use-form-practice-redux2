import React, { useEffect } from 'react';

const Libs = ({
  title,
  libTextArray,
  fillTypeArray,
  getNewMadLib,
}) => {

  useEffect(() => {
    getNewMadLib();
  }, []);

  return(
    <div>
      Show up?
      {/* {lib.title}; */}
    </div>
  );

}

export default Libs;