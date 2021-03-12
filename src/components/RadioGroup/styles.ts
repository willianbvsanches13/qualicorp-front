import styled from 'styled-components';
import { azulPadrao, cinzaClaro } from '~/colors';


export const Container = styled.div`
  height: 46px;
  width: 100%;
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 20px;
  border: 1px solid ${cinzaClaro};
  border-radius: 8px;
`;

export const Input =  styled.input`
  height: 20px;
  width: 20px;
  padding-left: 10px;
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

export const ContentRadio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
