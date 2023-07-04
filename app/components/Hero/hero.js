import styles from "./hero.module.css";

export default function Hero() {
    return (
        <>
            <div className={styles.text}>
                <div className={styles.head}>
                    <div className={styles.lineLeftH}>
                        <div className={`${styles.arrow} ${styles.left}`}></div>
                        <div className={styles.lineLeftV}></div>
                    </div>
                    <div className={styles.lineUpV}>
                        <div className={`${styles.arrow} ${styles.down}`}></div>
                        <div className={styles.lineUpH}></div>
                    </div>
                    <p>DISTILLEDX</p>
                </div>
                <p className={styles.sub}>or Tejas Vipin</p>
            </div>
        </>
    );
}
