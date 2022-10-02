import { useEffect, useState } from 'react';
import home_head from '../styles/home_head.module.css';
import IP from './ip.js';
import Blobs from './blobs.js';

export default function MainTitle() {
    const [textSize, setTextSize] = useState(0);

    useEffect(() => {
        if (window.outerWidth / 100 < 5) {
            setTextSize(window.outerWidth / 100);
        } else {
            setTextSize(window.outerWidth / 175);
        }

        const listener = window.addEventListener('resize', () => {
            if (window.outerWidth / 100 < 5) {
                setTextSize(window.outerWidth / 100);
            } else {
                setTextSize(window.outerWidth / 175);
            }
        });

        return () => window.removeEventListener('resize', listener);
    }, []);

    return (
        <div className={home_head['top']}>
            <IP />
            <div className={home_head['main']}>
                <h6 className={home_head['github']} style={{ fontSize: `${textSize}rem` }}>
                    distilled<span style={{ color: '#F4F4F9' }}>X</span>
                </h6>
                <h6 className={home_head['name']} style={{ fontSize: `${textSize / 6}rem` }}>
                    By Tejas Vipin
                </h6>
            </div>
            <Blobs />
        </div>
    );
}
