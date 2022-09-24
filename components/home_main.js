import mainstyles from '../styles/mainstyles.module.css';

export default function MainTitle() {
    return (
        <h6 className={mainstyles['main-head']}>
            distilled<span style={{ color: 'red' }}>X</span>
        </h6>
    );
}
