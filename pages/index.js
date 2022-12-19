import AsanaCard from "../components/AsanaCard";
import asanas from "./db.json";
import {useState, useEffect} from "react";
import Navigation from "../components/Navbar/Navigation";

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
      {asana && <AsanaCard asana={asana} />}
      <Navigation />
    </>
  );
}
