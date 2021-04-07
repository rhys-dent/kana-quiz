import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";

const Style = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 20vh;
  width: 20vh;
  clip-path: polygon(100% 100%, 100% 0%, 0% 100%);
  transition: height 0.125s ease-in, width 0.125s ease-in;
  :hover {
    height: 50vh;
    width: 50vh;
  }
  .inner-corner {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 10vh;
    width: 10vh;
    font-size: 2.75vh;
    font-weight: bold;
    text-align: right;
    margin-right: 1vh;
    a {
      display: inline-block;
      color: ${(props) => props.theme.green};
      text-decoration: none;
      text-shadow: 0 0 2px black;
    }
  }
  .menu-list {
    text-align: center;
    position: absolute;
    right: 10vh;
    bottom: 10vh;
    font-size: 3vh;
    a {
      position: relative;
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.red};
      margin: 1vh;
      :hover {
        color: ${({ theme }) => theme.blue};
        text-shadow: 1px 1px 1px ${({ theme }) => theme.red};
        box-shadow: 1px 1px 4px ${({ theme }) => theme.red};
      }
      :active {
        box-shadow: -1px -1px 4px ${({ theme }) => theme.red};
        top: 2px;
      }
    }
  }
`;

export default function () {
  const context = useContext(Context);
  return (
    <Style className="blue-background">
      <div className="menu-list">
        <Link to="/select">Select</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/results">Results</Link>
      </div>
      <Switch>
        <div className="inner-corner">
          <Route path="/select">
            <Link to="/quiz" onClick={() => context.beginQuiz()}>
              Begin Quiz
            </Link>
          </Route>
          <Route path="/quiz">
            <Link to="/results" onClick={() => context.endQuiz()}>
              End Quiz
            </Link>
          </Route>
          <Route path="/results">
            <Link to="/select">New Quiz</Link>
          </Route>
        </div>
      </Switch>
    </Style>
  );
}
