import { createGlobalStyle } from 'styled-components';
import bodyBg from "./assets/images/bodyBg.png"
import DashboardLayout from './layouts/DashboardLayout';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: url(${bodyBg});
    font-family: 'Raleway';
    background-size: cover;
    height: fit-content;
    /* background-repeat: no-repeat; */
    /* background-attachment: fixed; */
  }
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <DashboardLayout />
    </>
  )
}

export default App
