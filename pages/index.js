import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../lotties/indexloadinganimation.json";
import Link from "next/link";
import Header from "../components/Header/Header";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <StyledContainer>
        <WelcomeText>Welcome to your</WelcomeText>
        <Header />
      </StyledContainer>
      <Lottie options={defaultOptions} height={300} width={300} />
      <LinkAsanaCard href="/asanacarddashboard">Submit</LinkAsanaCard>
    </>
  );
}

const StyledContainer = styled.div`
  background-color: var(--white-color);
  border-radius: 10px;
  box-shadow: var(--primary-boxshadow);
  text-align: center;
  z-index: 10;
  @media (min-width: 376px) {
    margin-top: 2rem;
    padding: 1rem;
  } ;
`;

const WelcomeText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #fff;
  @media (min-width: 376px) {
    font-size: 1.7rem;
  }
`;

const LinkAsanaCard = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border: 1px solid rgba(255, 255, 255, 0.49);
  margin: 15% auto;
`;
