import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWithChildren from './RouteWithChildren';

function Router({ routes }) {
  return(
    <Switch>
      { routes.map(route =>
        <RouteWithChildren
          key = { route.path }
          { ...route }
        />
      )}
    </Switch>
  );
}

export default Router;
