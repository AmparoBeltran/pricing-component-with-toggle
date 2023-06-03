import styled from "styled-components";

export const CardsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.8em;
  border: none;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
    padding-inline: 15em;
    height: 50vh;
    align-items: center;
    margin-top: 30px;
  }
  :nth-child(2) {
    background-color: ${({ theme }) => theme.colors.linearGradient};
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em 2em;
    gap: 1em;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 18px 65px -22px rgba(147, 144, 235, 0.37);
    color: ${({ theme }) => theme.colors.grayishBlue};

    @media (min-width: ${({ theme }) => theme.desktop}) {
      gap: 2em;
      justify-content: center;
      width: 20vw;

      .title {
        font-size: 1.5em;
      }
    }

    :nth-child(2) {
      background: ${({ theme }) => theme.colors.linearGradient};
      color: ${({ theme }) => theme.colors.veryLightGrayishBlue};
      h1,
      small {
        color: ${({ theme }) => theme.colors.veryLightGrayishBlue};
      }
      a {
        background-color: transparent;
        border: 1px solid white;
      }

      @media (min-width: ${({ theme }) => theme.desktop}) {
        height: 105%;
      }
    }
    h1 {
      display: flex;
      gap: 0.1em;
      align-items: center;
      font-size: 3em;
      color: ${({ theme }) => theme.colors.darkGrayishBlue};
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 4.5em;
      }
    }
    small {
      font-size: 0.8em;
      color: ${({ theme }) => theme.colors.darkGrayishBlue};
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      span {
        border-top: 1px solid hsl(234.37deg 5.77% 81.15%);
        border-bottom: 1px solid hsl(234.37deg 5.77% 81.15%);
        padding-block: 1em;
        text-align: center;
        width: 100%;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          font-size: 1.2em;
        }
      }
      span:first-child {
        border-bottom: none;
      }
      span:last-child {
        border-top: none;
      }
    }

    a {
      padding: 0.8em 2em;
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      background: ${({ theme }) => theme.colors.linearGradient};
      border-radius: 5px;
      border: 1px solid transparent;
      width: 100%;
      text-align: center;
      margin-top: 20px;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.2em;
      }

      :hover {
        color: ${({ theme }) => theme.colors.grayishBlue};
        background: linear-gradient(white, white) padding-box,
          ${({ theme }) => theme.colors.linearGradient} border-box;
      }
    }
  }
`;
