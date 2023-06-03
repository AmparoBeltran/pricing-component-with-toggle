import styled from "styled-components";

export const CardsContainerStyled = styled.section`
  padding: 0 2em;
  width: 100vw;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 87vw;
  }
`;
