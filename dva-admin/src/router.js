import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import dynamic from "dva/dynamic";

import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth" render={props => <AuthLayout app={app} />} />
        <Route path="/app" render={props => <AppLayout app={app} />} />
        <Redirect to="/app" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
