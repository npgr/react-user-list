import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import Home from "./pages/Home/Home.component";
import Header from "./components/Header/Header.component";
import "./App.css";

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
