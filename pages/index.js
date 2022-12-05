import AsanaCard from "../components/AsanaCard";
import asanas from "./db.json";
import {useState, useEffect} from "react";
import styled from "styled-components";
import flowLogo from "../public/Images/0_YogaFlow_Logo.svg";
import Image from "next/image";

export default function Home() {
  const [asana, setAsana] = useState(null);
  useEffect(() => {
    function getRandomAsana(array) {
      const randomIndex = Math.floor(Math.random() * asanas.length);
      const randomAsana = array[randomIndex];
      return randomAsana;
    }
    setAsana(getRandomAsana(asanas));
  }, []);

  return (
    <>
      <Background />
      <header style={{display: "grid", placeContent: "center"}}>
        <YogaFlowLogo
          src={flowLogo}
          width="120"
          height="120"
          alt={"0_YogaFlowLogo"}
        />
      </header>
      {asana && <AsanaCard asana={asana} />}
    </>
  );
}
const Background = styled.main`
  background: rgb(0, 113, 188);
  background: linear-gradient(
    45deg,
    rgba(0, 113, 188, 1) 25%,
    rgba(63, 143, 213, 1) 35%,
    rgba(53, 87, 117, 1) 90%
  );
  z-index: -1;
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const YogaFlowLogo = styled(Image)`
  display: grid;
  place-content: center;
`;
