import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Main from '~/pages';

// function Error404() {
//   return <h1>404</h1>;
// }

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={Main} />

          {/* <Route component={Error404} /> */}
        </Switch>
    </BrowserRouter>
  );
}
