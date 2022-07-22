import { HomeThunks } from "./redux";
import { useDispatch } from "react-redux";

const Home = () => {

  const dispatch = useDispatch();

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