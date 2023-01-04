import GlobalStyles from "../styles/GlobalStyles";
import {useLocalStorage} from "../helpers/hook";
import asanasData from "./db.json";
import {useState} from "react";

export default function MyApp({Component, pageProps}) {
  const [asanas, setAsanas] = useLocalStorage("Asanas", asanasData);
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        asanas={asanas}
        setAsanas={setAsanas}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}
