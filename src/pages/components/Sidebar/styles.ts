import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { azulPadrao, azulEscuro, brancoFumaca } from '~/colors';

interface ContainerProps {
  open?: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 200px;
  background: ${azulPadrao};
  transition: .5s;

  @media only screen and (max-width: 425px) {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;

    width: ${({ open }) => open ? '200px' : '0px'};

    > a {
      display: ${({ open }) => open ? 'flex' : 'none'};
    }
  }
`;

Container.defaultProps = {
  open: false,
};

export const Item = styled(Link)`
  width: 100%;
  height: 60px;
  color: ${brancoFumaca};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;

  font-size: 20px;

  :hover {
    background: ${azulEscuro};
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 100px;
  color: ${brancoFumaca};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 2.81px;

  font-size: 30px;
  font-weight: 300;
`;

export const MenuButton = styled.button`
  display: none;
  @media only screen and (max-width: 425px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    left: 100%;
    z-index: 1;

    width: 60px;
    height: 60px;
    background: ${azulPadrao};
    border: none;
    color: ${brancoFumaca};
    font-size: 30px;
  }
`;