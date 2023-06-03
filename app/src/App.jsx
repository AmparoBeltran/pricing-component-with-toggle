import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import MainContainer from "./components/MainContainer"

const theme = {
  colors: {
    linearGradient: 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',

    veryLightGrayishBlue: 'hsl(240, 78%, 98%)',
    lightGrayishBlue: 'hsl(234, 14%, 74%)',
    grayishBlue: 'hsl(233, 13%, 49%)',
    darkGrayishBlue: 'hsl(232, 13%, 33%)',
  },

  desktop: '1440px'
}
function App() {


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App
