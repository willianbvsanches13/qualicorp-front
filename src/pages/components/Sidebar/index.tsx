import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Container, Item, Logo, MenuButton } from './styles';

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container open={open}>
      <MenuButton onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
      <Logo>Clientes</Logo>
      <Item to="/new" onClick={() => setOpen(false)} >Cadastrar</Item>
      <Item to="/list" onClick={() => setOpen(false)} >Listar</Item>
    </Container>
  );
}

export default Sidebar;