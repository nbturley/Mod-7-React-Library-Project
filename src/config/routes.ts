import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean,
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home",
      protected: false,
    },
    {
        path: "",
        component: About,
        name: "About",
        protected: false,
      },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true,
    }
];

export default routes