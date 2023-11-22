import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  align-items: center;
  justify-content: space-between;
  background-color:#3D3D3D;
  padding: 15px 50px 15px 50px;

  .header {
    &__brand {
      display:flex;
      color:white;
      font-family: system-ui;
      font-size: xx-large;
      font-weight: 100;
    }
    
    &__nav {
      display:flex;
      flex-direction:row;
      text-align:center;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      color:white;
      font-family: system-ui;
      font-size: x-large;
      font-weight: 100;
      gap:10px;
    }
    &__nav a:-webkit-any-link {
      text-decoration: none;
      color: white;
      cursor: pointer;
    }
  }
`;
