import { Html, Head, Main, NextScript } from "next/document";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shodat",
  description: "Innovating Insigths, Accelerating Growth",
};
export default function Document() {
  return (
    <Html lang="en">
      <title>Shodat</title>
      <link rel="icon" type="image/x-icon" href="/img/favicon.svg" />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
