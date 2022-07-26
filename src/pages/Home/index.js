import { HomeThunks } from "./redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNewLibResult } from "../Libs/resources/fakeApi/lib-api-return-logic";

const Home = () => {

  const dispatch = useDispatch();

  // test
  useEffect(() => {
    getNewLibResult();
  })

  const handleMakeAwesome = () => {
    dispatch(HomeThunks.helpMakeAwesome());
  }

  console.log('home component');

  return (
    <div>
      Here is the home page, whoo!
      <br></br>
      <button onClick={handleMakeAwesome}>Make Awesome</button>
    </div>
  );
}

export default Home;