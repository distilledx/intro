"use client";

import { useState, useEffect, useContext } from "react";
import StateContext from "../../StateContext.js";
import Image from "next/image";
import styles from "./projects.module.css";

export default function ImageCarousel({ sources }) {
    const {
        0: nextIndex,
        1: setNextIndex,
        2: forceNext,
    } = Object.values(useContext(StateContext));

    const [currentA, setA] = useState(
        sources[nextIndex === 0 ? sources.length - 1 : nextIndex - 1]
    );
    const [currentB, setB] = useState(sources[nextIndex]);
    const [stop, setStop] = useState(100);
    const [inter, setInter] = useState(0);
    const projSwitcher = () => {
        setA(currentB);
        setStop(100);
        console.log(`Before: ${nextIndex}`);
        setNextIndex(
            forceNext > 0
                ? (nextIndex + 1) % sources.length
                : (nextIndex - 1 + sources.length) % sources.length
        );
    };

    useEffect(() => {
        console.log(`After: ${nextIndex}`);
        setB(sources[nextIndex]);
        console.log(`nextIndex: ${nextIndex}, forceNext: ${forceNext}`);
    }, [nextIndex]);

    useEffect(() => {
        const intervalId = setTimeout(() => {
            projSwitcher();
        }, 5000);
        setInter(intervalId);

        return () => {
            clearTimeout(intervalId);
        };
    }, [currentB]);

    useEffect(() => {
        const animate = () => {
            if (stop <= 0) {
                return;
            }
            setStop(stop - 4);
        };
        requestAnimationFrame(animate);
    }, [stop]);

    useEffect(() => {
        clearTimeout(inter);
        projSwitcher();
    }, [forceNext]);

    return (
        <>
            <Image
                src={currentA}
                className={`${styles.pictures}`}
                alt="Projects"
                priority={true}
                style={{
                    zIndex: "3",
                    maskImage: `linear-gradient(to ${
                        forceNext < 0 ? "right" : "left"
                    },rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1)${stop}%, rgba(255, 255, 255, 0) ${stop}%, rgba(255, 255, 255, 0) 100%)`,
                    WebkitMaskImage: `linear-gradient(to ${
                        forceNext < 0 ? "right" : "left"
                    },rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1)${stop}%, rgba(255, 255, 255, 0) ${stop}%, rgba(255, 255, 255, 0) 100%)`,
                }}
            ></Image>
            <Image
                src={currentB}
                className={`${styles.pictures}`}
                alt=""
                style={{ zIndex: "2" }}
            ></Image>
        </>
    );
}
