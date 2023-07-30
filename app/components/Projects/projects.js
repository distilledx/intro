import styles from "./projects.module.css";
import Image from "next/image";
import lscreen from "../../../public/left-screen.png";
import rscreen from "../../../public/right-screen.png";

import p1L from "../../../public/projects/1-L.png";
import p1R from "../../../public/projects/1-R.png";

export default function Projects() {
    return (
        <>
            <div className={styles.fullContainer}>
                <div className={styles.mainContainer}>
                    <div className={styles.pinkL}></div>
                    <div className={styles.blueR}></div>
                </div>
                <div className={styles.right}>
                    <Image src={rscreen} alt="" priority={true} />
                    <Image
                        src={p1R}
                        alt=""
                        className={`${styles.pictures} ${styles.right}`}
                        priority={true}
                    />
                </div>
                <div className={styles.left}>
                    <Image src={lscreen} alt="" priority={true} />
                    <Image
                        src={p1L}
                        alt=""
                        className={`${styles.pictures} ${styles.left}`}
                        priority={true}
                    />
                </div>
            </div>
        </>
    );
}
