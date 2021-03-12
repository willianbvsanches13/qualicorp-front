import styled from 'styled-components';
import { azulPadrao, cinzaClaro } from '~/colors';


export const Container = styled.div`
  height: 46px;
  width: 100%;
  position: relative;
  margin-top: 20px;
`;

export const Input =  styled.input`
  height: 46px;
  width: 100%;
  padding-left: 10px;
  border-radius: 8px;
  border: 1px solid ${cinzaClaro};
  transition: 0.2s;
  
  :focus {
    border: 1px solid ${azulPadrao};    
  }
`;

export const Label = styled.span`
  position: absolute;
  top: -20px;
  left: 10px;
  font-size: 12px;
`;
