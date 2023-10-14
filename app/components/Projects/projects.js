"use client";

import styles from "./projects.module.css";
import Image from "next/image";
import ImageCarousel from "./carousel.js";
import { useState, useEffect } from "react";
import StateContext from "../../StateContext.js";

import lscreen from "../../../public/left-screen.png";
import rscreen from "../../../public/right-screen.png";

import p1L from "../../../public/projects/1-L.png";
import p1R from "../../../public/projects/1-R.png";
import p2L from "../../../public/projects/2-L.png";
import p2R from "../../../public/projects/2-R.png";
import p3L from "../../../public/projects/3-L.png";
import p3R from "../../../public/projects/3-R.png";

const imgR = [p1R, p2R, p3R];
const imgL = [p1L, p2L, p3L];

const projectDetails = {
    0: "https://srmmilan.org/",
    1: "https://github.com/distilledx/Framebuffer-rendering",
    2: "https://www.linkedin.com/posts/tejas-vipin-b8788b24b_recently-i-participated-and-won-in-the-quantum-activity-7098741730794999808-Lh0x",
};

export default function Projects() {
    const [nextIndexL, setNextIndexL] = useState(1);
    const [nextIndexR, setNextIndexR] = useState(0);

    return (
        <>
            <div className={styles.fullContainer}>
                <div className={styles.mainContainer}>
                    <div className={styles.pinkL}></div>
                    <div className={styles.blueR}></div>
                </div>
                <div className={styles.right}>
                    <Image src={rscreen} alt="Laptop screen" priority={true} />
                    <StateContext.Provider
                        value={{ nextIndexR, setNextIndexR }}
                    >
                        <ImageCarousel sources={imgR} lr={styles.right} />
                    </StateContext.Provider>
                    <a
                        href={
                            projectDetails[
                                nextIndexR
                                    ? nextIndexR - 1
                                    : Object.keys(projectDetails).length - 1
                            ]
                        }
                    >
                        <div
                            className={`${styles.plus} ${styles.bRight}`}
                        ></div>
                    </a>
                </div>
                <div className={styles.left}>
                    <Image src={lscreen} alt="Laptop screen" priority={true} />
                    <StateContext.Provider
                        value={{ nextIndexL, setNextIndexL }}
                    >
                        <ImageCarousel sources={imgL} lr={styles.left} />
                    </StateContext.Provider>
                    <a
                        href={
                            projectDetails[
                                nextIndexL
                                    ? nextIndexL - 1
                                    : Object.keys(projectDetails).length - 1
                            ]
                        }
                    >
                        <div className={`${styles.plus} ${styles.bLeft}`}></div>
                    </a>
                </div>

                <div className={`${styles.circle} ${styles.cRight}`}>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r="50"
                            transform="rotate(-180 50 50)"
                            fill="#353535"
                        />
                        <path
                            d="M69.4749 52.4749C70.8417 51.108 70.8417 48.892 69.4749 47.5251L47.201 25.2513C45.8342 23.8844 43.6181 23.8844 42.2513 25.2513C40.8844 26.6181 40.8844 28.8342 42.2513 30.201L62.0503 50L42.2513 69.799C40.8844 71.1658 40.8844 73.3819 42.2513 74.7487C43.6181 76.1156 45.8342 76.1156 47.201 74.7487L69.4749 52.4749ZM65 53.5L67 53.5L67 46.5L65 46.5L65 53.5Z"
                            fill="#CED3DC"
                        />
                    </svg>
                </div>

                <div className={`${styles.circle} ${styles.cMiddle}`}>
                    <svg
                        width="70"
                        height="70"
                        viewBox="0 0 125 125"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="62.5" cy="62.5" r="62.5" fill="#353535" />
                        <path
                            d="M103.768 64.7678C104.744 63.7915 104.744 62.2085 103.768 61.2322L87.8579 45.3223C86.8816 44.346 85.2986 44.346 84.3223 45.3223C83.346 46.2986 83.346 47.8816 84.3223 48.8579L98.4645 63L84.3223 77.1421C83.346 78.1184 83.346 79.7014 84.3223 80.6777C85.2986 81.654 86.8816 81.654 87.8579 80.6777L103.768 64.7678ZM100 65.5H102V60.5H100V65.5Z"
                            fill="#CED3DC"
                        />
                        <path
                            d="M22.2322 61.2322C21.2559 62.2085 21.2559 63.7915 22.2322 64.7678L38.1421 80.6777C39.1184 81.654 40.7014 81.654 41.6777 80.6777C42.654 79.7014 42.654 78.1184 41.6777 77.1421L27.5355 63L41.6777 48.8579C42.654 47.8816 42.654 46.2986 41.6777 45.3223C40.7014 44.346 39.1184 44.346 38.1421 45.3223L22.2322 61.2322ZM24 65.5H25V60.5H24V65.5Z"
                            fill="#CED3DC"
                        />
                    </svg>
                </div>

                <div className={`${styles.circle} ${styles.cLeft}`}>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="50" cy="50" r="50" fill="#353535" />
                        <path
                            d="M30.5251 47.5251C29.1583 48.892 29.1583 51.108 30.5251 52.4749L52.799 74.7487C54.1658 76.1156 56.3819 76.1156 57.7487 74.7487C59.1156 73.3819 59.1156 71.1658 57.7487 69.799L37.9497 50L57.7487 30.201C59.1156 28.8342 59.1156 26.6181 57.7487 25.2513C56.3819 23.8844 54.1658 23.8844 52.799 25.2513L30.5251 47.5251ZM35 46.5L33 46.5L33 53.5L35 53.5L35 46.5Z"
                            fill="#CED3DC"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
}
