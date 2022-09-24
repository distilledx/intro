import Head from 'next/head';
import MainTitle from '../components/home_main.js';

export default function Home() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
            </Head>
            <MainTitle />
        </div>
    );
}
