import styled from "styled-components";

export const CardList = styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
gap:30px;
justify-content:center;
align-items:center;
padding:30px;
`;


export const Card = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  background-color:#FFFFFF;
  padding:30px;
  border-radius:20px;
  width: 300px;
  

  .card {
    &__imagediv {
      height: 210px;
      width: 160px;
      align-items:center;
      display:flex;
      justify-content:center; 
    }

    &__image {
      width: 150px;
      height: 150px;
      border-radius:15px;
    }

    &__label {
      margin: 0;
      color:white;
      font-family: system-ui;
      font-size: large;
      font-weight: 100;
    }
    
    &__text {
      margin: 0;
      color:white;
      font-family: system-ui;
      font-size: large;
      font-weight: 100;
    }
  }
`;
