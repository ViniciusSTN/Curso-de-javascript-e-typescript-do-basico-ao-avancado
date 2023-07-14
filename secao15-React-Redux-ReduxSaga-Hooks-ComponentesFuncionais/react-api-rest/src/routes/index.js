import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

// exact permite que apenas o endereço exato renderize a página, ou seja, se tiver / ele renderiza, se tiver /a não renderiza mais
// Switch -> permite que apenas uma rota seja chamada por vez
