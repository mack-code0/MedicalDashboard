import LightTheme from './assets/LightTheme';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import DashboardLayout from './layouts/DashboardLayout';
import DarkTheme from './assets/DarkTheme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
    background-size: cover;
    height: fit-content;
  }
`;

function App() {

  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <BackgroundStyle>
        <DashboardLayout />
      </BackgroundStyle>
    </ThemeProvider>
  )
}

const BackgroundStyle = styled.div`
  background: ${props => props.theme.colors.background};
`

export default App
