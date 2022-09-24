import mainstyles from '../styles/mainstyles.module.css';

export default function MainTitle() {
    return (
        <h6 className={mainstyles['main-head']}>
            distilled<span className={mainstyles['main-head-x']}>X</span>
        </h6>
    );
}
