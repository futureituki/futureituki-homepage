import Document, { Head, Html, Main, NextScript } from "next/document";

// class Document extends NextDocument {
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow:ital,wght@1,100&family=Cormorant+Garamond:wght@500&family=Fascinate&family=Joan&family=Lora:ital@1&family=Playfair+Display:ital@1&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
