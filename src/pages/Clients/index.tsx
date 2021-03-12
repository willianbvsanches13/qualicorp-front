import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from './containers/Form';
import Listar from './containers/Listar';
// import { Container } from './styles';

const Clients: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/new" component={Form} />
        <Route path="/list" component={Listar} />
        <Route path="/edit/:id" component={() => <Form edit />} />
        <Route path="/" component={Form} />
      </Switch>
    </>
  );
}

export default Clients;