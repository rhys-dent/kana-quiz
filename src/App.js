import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Frame from "./frame/Frame";
import KanaSelection from "./kana-selection/KanaSelection";
import Quiz from "./quiz/Quiz";
import Results from "./results/Results";
import theme from "./theme";

const Style = styled.article``;

function App() {
  return (
    <Style>
      <ThemeProvider theme={theme}>
        <Router>
          <Frame>
            <Switch>
              <Route exact path="/">
                <Redirect to="/select" />
              </Route>
              <Route path="/select" component={KanaSelection} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/results" component={Results} />
            </Switch>
          </Frame>
        </Router>
      </ThemeProvider>
    </Style>
  );
}

export default App;
