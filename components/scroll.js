import { useEffect, useState } from 'react';
import scrollStyle from '../styles/scroll.module.css';

export default function ScrollCount() {
    const [scroll, setScroll] = useState(0);
    const [height, setHeight] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        setHeight(document.documentElement.scrollTop - document.documentElement.clientHeight);
        const listener = window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
            setScrollHeight((scroll / height) * 100);
            console.log(`Height: ${height}, Scroll: ${scroll}, ScrollHeight: ${scrollHeight}`);
        });

        return () => window.removeEventListener('scroll', listener);
    }, []);

    return (
        <div className={scrollStyle['scroll']}>
            <p>{scrollHeight}%</p>
        </div>
    );
}
