import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 :root {
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }
    
  
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

  body {
    display: grid;
    place-content: center;
    padding-block: 3em;
    min-height: 100vh;
    width: 100vw;
    position: relative;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.colors.veryLightGrayishBlue};
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: url('/images/bg-top.svg');
        background-repeat: no-repeat;
        background-size:70%;
        background-position: top right;
        z-index: -1;
        @media (min-width: ${({ theme }) => theme.desktop}) {
      background-size: 26%;
    }
    }

    &::after{
        display: none;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            display: block;
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            background-image: url('/images/bg-bottom.svg');
            background-repeat: no-repeat;
            background-position: bottom left;
            z-index: -1;
        }
      
    }


}
`;

export default GlobalStyles;
