import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  h1 {
    color: ${({ theme }) => theme.colors.grayishBlue};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 3em;
    }
  }
`;
