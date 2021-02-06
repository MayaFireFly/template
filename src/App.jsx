import React, { useEffect } from 'react';
import Router from './route/Router';

import { configRoutes } from './route/config';
import { getFont } from './utils/getFont.js';


const App = () => {

  useEffect(() => {
    document.body.style.fontFamily = getFont();
  }, []);

  return(    
    <Router routes = {configRoutes} />
  );
};

export default App;