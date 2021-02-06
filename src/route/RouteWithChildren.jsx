import React from 'react';
import { Route } from 'react-router-dom';


function RouteWithChildren({
  component: Component,
  isPrivate,
  extraProps,
  childRoutes,
  ...route
}) {
  return(
    <Route
      { ...route }
      render = {props => {
        return(
          <Component
            { ...props }
            { ...extraProps }
            childRoutes = { childRoutes }
          />
        );
      }}
    />
  );
}

export default RouteWithChildren;
