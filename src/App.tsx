import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import { getToken } from "./utils/token";
import { selectInitialized } from "./store/auth/auth.selectors";
import { setToken } from "./store/auth/auth.actions";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserDetail from "./pages/UserDetail";
import Header from "./components/Header";
import "semantic-ui-css/semantic.min.css";

const App: React.FC = () => {
  const initialized = useSelector(selectInitialized);
  const dispatch = useDispatch();
  useEffect(() => {
    const { token = null, user = null } = getToken();
    dispatch(setToken(token, user));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      {initialized && (
        <Switch>
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <PrivateRoute exact path={ROUTES.HOME} component={Home} />
          <PrivateRoute path={ROUTES.USER_DETAIL} component={UserDetail} />
          <Redirect to={ROUTES.HOME} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
