import {Switch, Route} from "react-router-dom";
import {getRoutes} from "./utils/routes";
import {useSelector} from "react-redux";
import {useState,createContext} from "react";
export const routesContext = createContext();
function App() {
  const {user} = useSelector(state=>state.user);
  const [routes,setRoutes] = useState(getRoutes(!!user?.auth0Id));
  const routesSetter = (bValue) => setRoutes(getRoutes(bValue));
  return (
      <routesContext.Provider value={[routesSetter]}>
        <Switch>
          {routes?.length > 0 && routes.map(route => <Route key={`route-${route.path}`} exact path={route.path} component={route.component} />)}
        </Switch>
      </routesContext.Provider>
  );
}

export default App;
