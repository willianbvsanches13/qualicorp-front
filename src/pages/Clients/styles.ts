import styled from 'styled-components';
import { azulEscuro, brancoFumaca } from '~/colors';

export const Container = styled.div`
  
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${brancoFumaca};
  color: ${azulEscuro};
  font-size: 25px;
  font-weight: 400;
`;

export const Loading = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  background: ${`${azulEscuro}60`};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;