import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Clients from './Clients';
import { Container, Content } from './styles';

const pages: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Switch>
          <Route path="/" component={Clients} />
        </Switch>
      </Content>
    </Container>
  );
}

export default pages;