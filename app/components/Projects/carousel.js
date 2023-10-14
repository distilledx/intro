"use client";

import { useState, useEffect, useContext } from "react";
import StateContext from "../../StateContext.js";
import Image from "next/image";
import styles from "./projects.module.css";

export default function ImageCarousel({ sources, lr }) {
    const { 0: nextIndex, 1: setNextIndex } = Object.values(
        useContext(StateContext)
    );
    const [currentA, setA] = useState(sources[nextIndex]);
    const [currentB, setB] = useState(sources[nextIndex % 2]);
    const [stop, setStop] = useState(100);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(typeof nextIndex);
            setA(sources[nextIndex]);
            setStop(100);
            setB(sources[(nextIndex + 1) % sources.length]);
            setNextIndex((nextIndex + 1) % sources.length);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentA, currentB]);

    useEffect(() => {
        const animate = () => {
            if (stop <= 0) {
                return;
            }
            setStop(stop - 4);
        };
        requestAnimationFrame(animate);
    }, [stop]);

    return (
        <>
            <Image
                src={currentA}
                className={`${styles.pictures} ${lr}`}
                alt="Projects"
                priority={true}
                style={{
                    zIndex: "4",
                    maskImage: `linear-gradient(to right,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1)${stop}%, rgba(255, 255, 255, 0) ${stop}%, rgba(255, 255, 255, 0) 100%)`,
                }}
            ></Image>
            <Image
                src={currentB}
                className={`${styles.pictures} ${lr}`}
                alt=""
                style={{ zIndex: "3" }}
            ></Image>
        </>
    );
}
