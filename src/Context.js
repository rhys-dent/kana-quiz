import { createContext, useRef } from "react";
import { keyify, answerKey } from "./data";
import theme from "./theme";
const Context = createContext();
export function Provider({ children }) {
  const ref = useRef({ list: [], guesses: [] });
  function addKana(kana) {
    ref.current.list.push(kana);
  }
  function removeKana(kana) {
    ref.current.list = ref.current.list.filter((listItem) => listItem !== kana);
  }
  function hasKana(kana) {
    return ref.current.list.includes(kana);
  }
  function toggleKana(kana) {
    if (hasKana(kana)) removeKana(kana);
    else addKana(kana);
    console.log(ref.current.list);
  }
  function nextKana() {
    if (ref.current.guesses.length < ref.current.list.length)
      return ref.current.list[ref.current.guesses.length];
  }
  function addGuess(guess) {
    ref.current.guesses.push({ kana: nextKana(), guess });
  }
  function getResults() {
    const guesses = ref.current.guesses;
    console.log(guesses);
    return guesses.map((guess) => {
      return { ...guess, correct: guess.guess === answerKey[guess.kana] };
    });
  }
  function beginQuiz() {
    ref.current.guesses = [];
  }
  function endQuiz() {
    ref.current.list = [];
  }
  function newQuiz() {
    ref.current.guesses = [];
  }
  return (
    <Context.Provider
      value={{
        beginQuiz,
        toggleKana,
        nextKana,
        addGuess,
        getResults,
        endQuiz,
        newQuiz,
        theme,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default Context;
