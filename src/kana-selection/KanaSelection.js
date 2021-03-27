import { Switch, Route, Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { hira, kata, sortKana } from "../data";
import KanaGrid from "./KanaGrid";

const Style = styled.div`
  font-size: 2vw;
  .group-select {
    text-align: center;
    a {
      display: inline-block;
      background-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.red};
      text-decoration: none;
      padding: 0.5vw;
      border-radius: 0.25vw;
    }
  }
`;

export default function () {
  return (
    <Style className="">
      <nav className="group-select">
        <Switch>
          <Route path="/select/kata">
            <Link to="/select/hira" className="hiragana">
              Hiragana
            </Link>
          </Route>
          <Route path="/select/hira">
            <Link to="/select/kata" className="katakana">
              Katakana
            </Link>
          </Route>
          <Route exact path="/select">
            <Redirect to="/select/hira" />
          </Route>
        </Switch>
      </nav>
      <Switch>
        <Route path="/select/hira">
          <KanaGrid title="Hiragana" sortedKana={sortKana(hira)} />
        </Route>
        <Route path="/select/kata">
          <KanaGrid title="Katakana" sortedKana={sortKana(kata)} />
        </Route>
      </Switch>
    </Style>
  );
}
