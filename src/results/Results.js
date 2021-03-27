import { useContext, useRef } from "react";
import styled from "styled-components";
import Context from "../Context";

const Style = styled.div`
  text-align: center;
  width: min-content;
  margin: 0 auto;
  table {
    box-shadow: 0 0 2px black;
    margin: 4vw;
    .headings {
      font-size: 1.5rem;
      color: ${(props) => props.theme.red};
      text-shadow: 2px 2px 6px ${(props) => props.theme.blue};
      th {
        border: 2px solid ${(props) => props.theme.blue};
        padding: 0.5rem;
      }
    }
    .result {
      font-size: 1.25rem;
      td {
        font-size: 2vw;
        border: 2px solid ${(props) => props.theme.blue};
        color: ${(props) => props.theme.orange};
      }
    }
  }
  .score {
    color: ${(props) => props.theme.green};
    background-color: ${(props) => props.theme.blue};
    text-shadow: 0 0 2px black;
    width: min-content;
    margin: 0 auto;
    margin-top: 4vw;
    padding: 1vh;
    border: 2px solid ${(props) => props.theme.green};
    box-shadow: 0 0 2px black;
  }
`;

export default function () {
  const context = useContext(Context);
  var numCorrect = 0;
  context
    .getResults()
    .forEach((result) => (result.correct ? numCorrect++ : null));

  return (
    <Style>
      <div className="score">
        Score {numCorrect}/{context.getResults().length}
      </div>
      <table>
        <thead className="headings">
          <th>Kana</th>
          <th>Guess</th>
          <th>Correct</th>
        </thead>
        {context.getResults().map((result) => (
          <tr className="result">
            <td className="kana">{result.kana}</td>
            <td>{result.guess}</td>
            <td>{result.correct ? "yes" : "no"}</td>
          </tr>
        ))}
      </table>
    </Style>
  );
}
