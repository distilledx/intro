import Head from 'next/head';
import MainTitle from '../components/home_main.js';

export default function Home() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" />
            </Head>
            <MainTitle />
        </div>
    );
}
