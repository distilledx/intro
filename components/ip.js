import { useEffect, useState } from 'react';
import IpStyles from '../styles/ip.module.css';

function ipError() {
    setIP('Blockers');
}

export default function GetIP() {
    const [ip, setIP] = useState(0);

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => setIP(data.ip))
            .catch(() => setIP('Blockers'));
    }, []);

    return (
        <div className={IpStyles['text']} onError={ipError}>
            Hello, <span className={IpStyles['ip']}>{ip}</span>
        </div>
    );
}
