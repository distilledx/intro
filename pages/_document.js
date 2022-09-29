// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
