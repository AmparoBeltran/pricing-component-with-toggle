import styled from "styled-components";

export const ToggleStyled = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    gap: 2em;
  }

  span {
    color: ${({ theme }) => theme.colors.lightGrayishBlue};
    font-size: 1.2em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1.4em;
    }
  }
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 21px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 60px;
      height: 34px;
    }
  }
  .toggle-switch input[type="checkbox"] {
    display: none;
  }
  .toggle-switch .switch {
    position: absolute;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.linearGradient};
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  }
  .toggle-switch .switch::before {
    position: absolute;
    content: "";
    left: 3px;
    top: 3px;
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.veryLightGrayishBlue};
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: translateX(19px);
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 28px;
      height: 28px;
      transform: translateX(26px);
    }
  }
  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transform: translateX(0);
    background-color: ${({ theme }) => theme.colors.veryLightGrayishBlue};
  }
  .toggle-switch input[type="checkbox"]:checked + .switch {
    background: ${({ theme }) => theme.colors.linearGradient};
  }
`;
