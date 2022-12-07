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
      <Header>
        <YogaFlowLogo
          src={flowLogo}
          width="120"
          height="120"
          alt={"0_YogaFlowLogo"}
        />
      </Header>
      {asana && <AsanaCard asana={asana} />}
    </>
  );
}

const YogaFlowLogo = styled(Image)`
  display: grid;
  place-content: center;
`;

const Header = styled.header`
  display: grid;
  place-content: center;
`;
