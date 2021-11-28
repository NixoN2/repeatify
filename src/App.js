import {Switch, Route} from "react-router-dom";
import {getRoutes} from "./utils/routes";
import {useSelector} from "react-redux";
import {useLogin} from "./components/LoginForm/hooks/useLogin";
function App() {
  const {isAuthorized,user} = useSelector(state=>state.user);
  const handler = useLogin();
  user.email !== "" && user.id === 0 && handler(user.email);
  const routes = getRoutes(isAuthorized);
  return (
      <Switch>
        {routes.map(route => <Route key={`route-${route.path}`} exact path={route.path} component={route.component} />)}
      </Switch>
  );
}

export default App;
