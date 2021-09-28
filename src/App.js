import {Switch, Route} from "react-router-dom";
import {getRoutes} from "./utils/routes";
import "./App.scss";
function App() {
  const isAuthorized = false;
  const routes = getRoutes(isAuthorized);
  return (
    <Switch>
      {routes.map(route => <Route path={route.path} component={route.component} />)}
    </Switch>
  );
}

export default App;
