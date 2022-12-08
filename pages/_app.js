import GlobalStyles from "../styles/GlobalStyles";
import {useLocalStorage} from "../helpers/hook";
import Header from "../components/Header";

export default function MyApp({Component, pageProps}) {
  const [asanas, setAsanas] = useLocalStorage(
    "id",
    "name",
    "sanskrit",
    "sanskrit2",
    "image",
    "benefits"
  );
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} asanas={asanas} setAsanas={setAsanas} />
    </>
  );
}
