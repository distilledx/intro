import styles from "./hero.module.css";

export default function Hero() {
    return (
        <>
            <div className={styles.text}>
                <div className={styles.head}>
                    <p>DISTILLEDX</p>
                </div>
                <p className={styles.sub}>or Tejas Vipin</p>
                <div className={styles.lineUpV}>
                    <div className={`${styles.arrow} ${styles.down}`}></div>
                    <div className={styles.lineUpH}></div>
                </div>
            </div>
        </>
    );
}
