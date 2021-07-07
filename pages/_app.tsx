import type { AppProps } from "next/app";
import Head from "next/head";
import {
  ChakraProvider,
  theme,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/react";
import Theme from "../components/Theme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Twiz. Quizzes with a twist." />
        <meta name="keywords" content="Twiz" />
        <meta name="author" content="Pravesh Kunwar" />
      </Head>
      <ChakraProvider>
        <CSSReset />
        <Theme />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
