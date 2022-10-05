import Head from 'next/head';
import MainTitle from '../components/home_main.js';
import Ach from '../components/ach_main.js';
import IP from '../components/ip.js';

export default function Home() {
    return (
        <div>
            <Head></Head>
            <MainTitle />
            <Ach />
        </div>
    );
}
