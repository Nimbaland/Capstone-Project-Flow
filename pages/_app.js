import GlobalStyles from "../styles/GlobalStyles";
import {useLocalStorage} from "../helpers/hook";
import Header from "../components/Header/Header";
import asanasData from "./db.json";
import Navigation from "../components/Navbar/Navigation";

export default function MyApp({Component, pageProps}) {
  const [asanas, setAsanas] = useLocalStorage("Asanas", asanasData);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} asanas={asanas} setAsanas={setAsanas} />
      <Navigation />
    </>
  );
}
