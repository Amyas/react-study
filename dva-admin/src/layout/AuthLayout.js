import React from "react";
import dynamic from "dva/dynamic";
import { Route } from "dva/router";

const AuthLayout = ({ app }) => {
  const routes = [
    {
      path: "/auth/signIn",
      models: () => [import("../models/signIn")],
      component: () => import("../routes/Auth/SignIn")
    },
    {
      path: "/auth/signUp",
      models: () => [import("../models/signUp")],
      component: () => import("../routes/Auth/SignUp")
    }
  ];

  return (
    <div>
      <h1>Auth</h1>
      {routes.map(({ path, ...dynamics }) => {
        return (
          <Route
            exact
            key={path}
            path={path}
            component={dynamic({
              app,
              ...dynamics
            })}
          />
        );
      })}
    </div>
  );
};
export default AuthLayout;
