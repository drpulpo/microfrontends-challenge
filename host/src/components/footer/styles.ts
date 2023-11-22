import styled from "styled-components";

export const StyledFooter = styled.footer`
  height:50px;
  display: flex;
  justify-content:center;
  align-items:center;
  background-color:#3D3D3D;

  .footer {
    &__text {
      margin: 0;
      color:white;
      font-family: system-ui;
      font-size: large;
      font-weight: 100;
    }
  }
`;
