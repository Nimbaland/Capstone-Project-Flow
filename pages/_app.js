import GlobalStyles from "../styles/GlobalStyles";
import {useLocalStorage} from "../helpers/hook";
import Header from "../components/Header/Header";
import asanasData from "./db.json";
import Navigation from "../components/Navbar/Navigation";
import {useState} from "react";

export default function MyApp({Component, pageProps}) {
  const [asanas, setAsanas] = useLocalStorage("Asanas", asanasData);
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component
        {...pageProps}
        asanas={asanas}
        setAsanas={setAsanas}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <Navigation />
    </>
  );
}
