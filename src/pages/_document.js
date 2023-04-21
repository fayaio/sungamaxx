import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Castoro+Titling&family=Cormorant+Garamond:wght@300;400;500;600;700&family=EB+Garamond:wght@400;500;600;700;800&family=Karla:wght@200;300;400;500;600&family=Lato:wght@100;400;700&family=Lobster&family=Playfair+Display:wght@400;500;600;700;800&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
