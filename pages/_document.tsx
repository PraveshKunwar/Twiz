import Document, { Html, Head, Main, NextScript } from "next/document";

class Twiz extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Twiz. Quizzes, with a twist." />
          <meta name="author" content="Pravesh Kunwar" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Twiz;
