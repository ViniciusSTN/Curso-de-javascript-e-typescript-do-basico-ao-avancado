import React from 'react';
import { Switch, Route } from 'react-router-dom';

// /cjs/react-router-dom.min

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      {/* exact permite que apenas o endereço exato renderize a página, ou seja, se tiver / ele renderiza, se tiver /a não renderiza mais */}
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}

// switch -> permite que apenas uma rota seja chamada por vez
