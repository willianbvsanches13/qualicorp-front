import styled from 'styled-components';
import { azulPadrao, brancoFumaca } from '~/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


export const Content = styled.form`
  width: 100%;
  padding: 0px 20px;

  > button {
    background: ${azulPadrao};
    color: ${brancoFumaca};
    font-size: 16px;
    font-weight: 500;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
  }
`;

export const ContentLine = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  
  > div {
    width: 50%;
    margin-left: 20px;
  }
  
  > div:first-child {
    margin-left: 0px;
  }
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 0px;
    
    > div {
      width: 100%;
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`;
