import AsanaCard from "../components/AsanaCard";
import asanas from "./db.json";
import {useState, useEffect} from "react";
import Navigation from "../components/Navbar/Navigation";

export default function Home({favorites, setFavorites}) {
  const [asana, setAsana] = useState(null);
  const [reload, setReload] = useState(false);
  function reloader() {
    setReload(!reload);
    console.log("fire");
  }
  useEffect(() => {
    function getRandomAsana(array) {
      const randomIndex = Math.floor(Math.random() * asanas.length);
      const randomAsana = array[randomIndex];
      return randomAsana;
    }
    setAsana(getRandomAsana(asanas));
  }, [reload]);

  return (
    <>
      {asana && (
        <AsanaCard
          asana={asana}
          favorites={favorites}
          setFavorites={setFavorites}
          reloader={reloader}
        />
      )}
      <Navigation />
    </>
  );
}
