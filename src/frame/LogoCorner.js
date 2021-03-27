import styled from "styled-components";

const Style = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20vh;
  width: 20vh;
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  text-align: center;
  font-size: 3vh;
  color: ${(props) => props.theme.red};
  .logo {
    width: min-content;
    padding: 0.25vw;
    text-shadow: 0 0 2px black;
  }
`;

export default function () {
  return (
    <Style className="blue-background">
      <div className="logo">Kana Quiz</div>
    </Style>
  );
}
