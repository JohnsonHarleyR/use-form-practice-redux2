import Home from "./pages/Home";

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/:name',
    component: Home,
  },
];

export default routes;