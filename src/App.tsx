import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import Header from "./components/Header";
import "semantic-ui-css/semantic.min.css";

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.USER_DETAIL} component={UserDetail} />
    </Switch>
  </BrowserRouter>
);

export default App;
