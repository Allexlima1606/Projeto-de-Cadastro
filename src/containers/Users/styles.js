import styled from 'styled-components';
import background from '../../assets/background.svg'

export const Container = styled.div`
      background: url("${background}");
      background-size:cover;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      
      height: 100%;
      min-height: 100vh;
   `;

export const Image = styled.img`
   margin: 30px;
   `;


