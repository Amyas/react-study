import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import dynamic from "dva/dynamic";

import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";

const routes = {
  auth:[
    {
      path: "/auth/signIn",
      models: () => [import("./models/signIn")],
      component: () => import("./routes/Auth/SignIn")
    },
    {
      path: "/auth/signUp",
      models: () => [import("./models/signUp")],
      component: () => import("./routes/Auth/SignUp")
    }
  ],
  app:[
    {
      path: "/app",
      models: () => [import("./models/app")],
      component: () => import("./routes/App")
    },
    {
      path: "/app/users",
      models: () => [import("./models/users/index")],
      component: () => import("./routes/App/Users")
    },
    {
      path: "/app/users/:id",
      models: () => [import("./models/users/detail")],
      component: () => import("./routes/App/Users/Detail")
    }
  ]
};

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth" render={props => <AuthLayout app={app} routes={routes.auth} />} />
        <Route path="/app" render={props => <AppLayout app={app} routes={routes.app} />} />
        <Redirect to="/app" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
