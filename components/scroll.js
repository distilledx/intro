import { useEffect, useState } from 'react';
import scrollStyle from '../styles/scroll.module.css';

export default function ScrollCount() {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const listener = window.addEventListener('scroll', () => {
            setScrollHeight(Math.floor((window.scrollY / window.scrollMaxY) * 100));
        });

        return () => window.removeEventListener('scroll', listener);
    }, []);

    return (
        <div className={scrollStyle['scroll']}>
            <p>{scrollHeight}%</p>
        </div>
    );
}
