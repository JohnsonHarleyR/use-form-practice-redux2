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
      <h2>Title: {title}</h2>
    </div>
  );

}

export default Libs;