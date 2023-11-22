import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  height:100%;
  
  .app {
    &__header {
        flex: 0 0 auto;
        background: red;
    }

    &__routes {
        flex: 1 1 auto;
        overflow-y: auto;
        position:relative;
        background: lightgray;
    }

    &__footer {
        flex: 0 0 auto;
        background: red;
    }
  }
`;