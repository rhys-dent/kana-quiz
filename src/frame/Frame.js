import styled from "styled-components";
import LogoCorner from "./LogoCorner";
import MenuCorner from "./MenuCorner";

const Style = styled.div`
  position: relative;
  height: 100vh;
  .frame-inner {
    position: absolute;
    top: 10vh;
    left: 10vh;
    height: 80vh;
    width: calc(100vw - 20vh);
    overflow-y: scroll;
    scrollbar-width: none;
    border: 2px solid ${(props) => props.theme.blue};
    box-shadow: 0 0 8px black;
  }
`;

export default function ({ children }) {
  return (
    <Style className="red-background">
      <LogoCorner />
      <div className="frame-inner">{children}</div>
      <MenuCorner />
    </Style>
  );
}
