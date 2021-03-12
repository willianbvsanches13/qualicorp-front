import styled from 'styled-components';
import { azulPadrao, vermelho } from '~/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


export const Content = styled.div`
  width: 100%;
  padding: 20px 20px;
`;

export const ContentActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > svg {
    cursor: pointer;
    color: ${vermelho};
  }

  > svg:first-child {
    margin-right: 10px;
    color: ${azulPadrao};
  }
`;