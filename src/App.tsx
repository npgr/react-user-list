import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserDetail from "./pages/UserDetail";
import Header from "./components/Header";
import "semantic-ui-css/semantic.min.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <PrivateRoute exact path={ROUTES.HOME} component={Home} />
        <PrivateRoute path={ROUTES.USER_DETAIL} component={UserDetail} />
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
