import './App.css';
import { ThemeProvider } from 'styled-components';
import CardContainer from './components/CardContainer';
import Footer from "./components/Footer";
import Container from './components/Container';
function App() {
  const theme = {
    PaleBlue: "hsl(225, 100%, 94%)",
    BrightBlue: "hsl(245, 75%, 52%)",
    VeryPaleBlue: "hsl(225, 100%, 98%)",
    DesaturatedBlue: "hsl(224, 23%, 55%)",
    DarkBlue: "hsl(223, 47%, 23%)"
  };
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container>
          <div>
            <CardContainer />
            <Footer
              challengeUrl="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
              repoUrl="https://github.com/BatoolHasan/order-summary-component.git"
            />
          </div>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
