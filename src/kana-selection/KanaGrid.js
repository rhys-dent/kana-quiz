import { useContext } from "react";
import styled from "styled-components";
import Context from "../Context";
import { lastVowels } from "../data";

const Style = styled.div`
  text-align: center;
  .grid-title {
    color: ${(props) => props.theme.orange};
    font-size: 4vw;
    text-shadow: 0 0 4px ${(props) => props.theme.blue};
    margin-bottom: 2vw;
  }
  .key-kana-set {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    font-size: 2.5vw;

    .key {
      color: ${(props) => props.theme.orange};
      width: 7.5vw;
      text-shadow: 0 0 4px ${(props) => props.theme.blue};
    }
    .kana-set {
      --size: 5vw;
      display: flex;
      justify-content: center;
      align-items: center;

      .kana-tile {
        box-sizing: border-box;
        width: var(--size);
        height: var(--size);
        margin: 1vw;
        color: ${(props) => props.theme.blue};
        text-shadow: 0 1px 2px black;
        border-radius: 0.25vw;
        cursor: pointer;
        .kana {
          line-height: var(--size);

          ::selection {
            color: none;
            background: none;
          }
        }
      }
    }

    .selected-tile {
      border: 0.125vw solid ${(props) => props.theme.blue};
    }
    .selected-kana {
      color: ${(props) => props.theme.blue};
      text-shadow: 0 0 1px black;
    }
  }
`;

export default function ({ title, sortedKana }) {
  const context = useContext(Context);
  function onClickHandler(e) {
    const clickedKana = e.target.innerHTML;
    context.toggleKana(clickedKana);
    e.target.parentNode.classList.toggle("selected-tile");
    e.target.classList.toggle("selected-kana");
    console.log(e.target.parentNode);
  }
  return (
    <Style>
      <h1 className="grid-title">{title}</h1>
      {Object.keys(sortedKana).map((key) => {
        return (
          <div className="key-kana-set">
            <div className="key">{(key !== "-" ? key : "n").toUpperCase()}</div>
            <div className="kana-set">
              {key !== "-" ? (
                lastVowels.map((vowel) => {
                  let kana = sortedKana[key][vowel];
                  kana = kana ? kana : null;
                  return (
                    <div className="kana-tile">
                      <div className="kana" onClick={onClickHandler}>
                        {kana}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="kana-tile" onClick={onClickHandler}>
                  <div className="kana">{sortedKana[key]["n"]}</div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </Style>
  );
}
