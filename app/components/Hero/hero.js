import styles from "./hero.module.css";

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.triangle}>
                <p className={styles.menuText}>Menu</p>
            </div>
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
            <div className={styles.scroll}>
                <div className={styles.circle} style={{ opacity: 0.15 }}></div>
                <div className={styles.circle} style={{ opacity: 0.45 }}></div>
                <div className={styles.circle} style={{ opacity: 0.75 }}></div>
                <p className={styles.scrollText}>SCROLL</p>
            </div>
        </div>
    );
}
