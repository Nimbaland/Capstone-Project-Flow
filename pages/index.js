import styled from "styled-components";

export default function Home() {
  return <StyledMainPage>Test</StyledMainPage>;
}

const StyledMainPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: linear-gradient(
    45deg,
    rgba(0, 113, 188, 1) 25%,
    rgba(63, 143, 213, 1) 35%,
    rgba(53, 87, 117, 1) 90%
  );
`;
