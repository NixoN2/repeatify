import {Switch, Route} from "react-router-dom";
import {getRoutes} from "./utils/routes";
import {useAuthorize} from "./utils/hooks/useAuthorize";
function App() {
  const isAuthorized = useAuthorize();
  const routes = getRoutes(isAuthorized);
  return (
      <Switch>
        {routes.map(route => <Route key={`route-${route.path}`} exact path={route.path} component={route.component} />)}
      </Switch>
  );
}

export default App;
