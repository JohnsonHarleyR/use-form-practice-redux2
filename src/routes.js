import Home from "./pages/Home";
import Libs from "./pages/Libs/layout";

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/libs/',
    component: Libs,
    exact: true
  },
];

export default routes;