import { useEffect, useState } from 'react';
import IpStyles from '../styles/ip.module.css';

export default function GetIP() {
    const [ip, setIP] = useState(0);

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => {
                setIP(data.ip);
            });
    }, []);

    return (
        <div className={IpStyles['text']}>
            Hello, <span className={IpStyles['ip']}>{ip}</span>
        </div>
    );
}
