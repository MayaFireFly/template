import React from 'react';
import { Switch, Route } from 'react-router-dom';


function Router({ routes}) {
  return(
    <Switch>
      { routes.map(route =>
        <Route
          key = {route.path}
          { ...route }
        />
      )}
    </Switch>
  );
}

export default Router;
