import { useContext, useEffect, useRef, useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import Context from "../Context";

const Style = styled.main`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  .quiz-article {
    width: 50vh;
    text-align: center;
    box-shadow: 0 0 6px black;
    border: 2px solid ${(props) => props.theme.blue};
    .current-kana {
      width: 50vh;
      height: 50vh;
      line-height: 50vh;
      font-size: 16vw;
      text-shadow: 4px 4px 0px ${(props) => props.theme.blue};
      color: ${(props) => props.theme.green};
    }
  }
  form {
    .guess-input {
      width: 75%;
      background-color: ${(props) => props.theme.blue};
      padding: 1vw;
      text-align: center;
      border: 2px solid black;
    }
    .guess-button {
      display: inline-block;
      width: 25%;
      padding: 1vw;
      background-color: ${(props) => props.theme.green};
    }
  }
`;

export default function () {
  const context = useContext(Context);
  const guessInputRef = useRef();
  const [currentkana, setCurrentKana] = useState(context.nextKana());
  function onSubmitHandler(e) {
    e.preventDefault();
    context.addGuess(guessInputRef.current.value);
    guessInputRef.current.value = "";
    guessInputRef.current.focus();
    setCurrentKana(context.nextKana());
  }
  function quizDone() {
    context.endQuiz();
    return <Redirect to="/results" />;
  }
  return (
    <Style>
      {currentkana ? (
        <article className="quiz-article">
          <div className="current-kana">{currentkana}</div>
          <form onSubmit={onSubmitHandler}>
            <input ref={guessInputRef} type="text" className="guess-input" />
            <input type="submit" className="guess-button" />
          </form>
        </article>
      ) : (
        quizDone()
      )}
    </Style>
  );
}
