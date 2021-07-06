import './App.css';
import Reservation from './pages/Reservation';
import Details from './pages/Details';
import Confirmation from './pages/Review';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core'

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#223c50",
      dark: "#14222d",
      light: "#3a5f7b"
    },
    secondary: {
      main: "#d6d6d6"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Reservation />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/confirmation">
              <Confirmation />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
