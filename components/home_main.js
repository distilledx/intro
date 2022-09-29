import { useEffect, useState } from 'react';
import home_head from '../styles/home_head.module.css';
import circles from '../styles/circles.module.css';

export default function MainTitle() {
    const [textSize, setTextSize] = useState(0);
    const [bigCircleSize, setBigCircleSize] = useState(0);

    useEffect(() => {
        if (window.outerWidth / 100 < 5) {
            setTextSize(window.outerWidth / 100);
            setBigCircleSize(60);
        } else {
            setTextSize(window.outerWidth / 175);
            setBigCircleSize(30);
        }

        const listener = window.addEventListener('resize', () => {
            if (window.outerWidth / 100 < 5) {
                setTextSize(window.outerWidth / 100);
                setBigCircleSize(60);
            } else {
                setTextSize(window.outerWidth / 175);
                setBigCircleSize(30);
            }
        });

        return () => window.removeEventListener('resize', listener);
    }, []);

    return (
        <>
            <div className={home_head['main']}>
                <h6 className={home_head['main-head']} style={{ fontSize: `${textSize}rem` }}>
                    distilled<span style={{ color: '#F4F4F9' }}>X</span>
                </h6>
                <h6 className={home_head['main-foot']} style={{ fontSize: `${textSize / 6}rem` }}>
                    <span style={{ color: '#A5B6C0' }}>-By Tejas Vipin</span>
                </h6>
            </div>
            <span className={circles['big']} style={{ height: `${bigCircleSize}vw`, width: `${bigCircleSize}vw` }}></span>
        </>
    );
}
