import React from "react";
import dynamic from "dva/dynamic";
import { Route } from "dva/router";

const AuthLayout = ({ app,routes }) => {
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
