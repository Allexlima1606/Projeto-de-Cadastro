import styled from "styled-components";

export const ContainerItens = styled.div`
      background: linear-gradient(
         157.44deg,
         rgb(255, 255, 255, 0.6) 0.84%,
         rgb(255, 255, 255, 0.6) 0.85%,
         rgb(255, 255, 255, 0.15) 100%
      );

      border-radius: 61px 61px 0px 0px;

      padding: 50px 36px;

      display: flex;
      flex-direction: column;

      height: 100vh;

      ${props => props.isBlur && ` 
         backdrop-filter: blur(45px);
         min-height: calc(100vh -170px);
      `}
   `;