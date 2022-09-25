import { useEffect, useState } from 'react';
import mainstyles from '../styles/mainstyles.module.css';

export default function MainTitle() {
    const [winSize, setWinSize] = useState(0);

    useEffect(() => {
        window.outerWidth / 100 < 5 ? setWinSize(window.outerWidth / 100) : setWinSize(window.outerWidth / 175);

        const listener = window.addEventListener('resize', () => {
            window.outerWidth / 100 < 5 ? setWinSize(window.outerWidth / 100) : setWinSize(window.outerWidth / 175);
        });

        return () => window.removeEventListener('resize', listener);
    }, []);

    return (
        <div className={mainstyles['main']}>
            <h6 className={mainstyles['main-head']} style={{ fontSize: `${winSize}rem` }}>
                distilled<span style={{ color: '#F4F4F9' }}>X</span>
            </h6>
            <h6 className={mainstyles['main-foot']} style={{ fontSize: `${winSize / 7}rem` }}>
                <span style={{ color: '#586F7C' }}>By</span> <span style={{ color: '#B8DBD9' }}>Tejas</span> <span style={{ color: '#F4F4F9' }}>Vipin</span>
            </h6>
        </div>
    );
}
