import {createContext, useState} from "react";
import {Switch, Route} from "react-router-dom";
import {getRoutes} from "./utils/routes";
import "./App.scss";

export const AuthContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const toggleAuth = () => setIsAuth(!isAuth)
  const routes = getRoutes(isAuth);
  return (
    <AuthContext.Provider value={toggleAuth}>
      <Switch>
        {routes.map(route => <Route key={`route-${route.path}`} exact path={route.path} component={route.component} />)}
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
