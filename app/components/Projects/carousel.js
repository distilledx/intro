"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./projects.module.css";

export default function ImageCarousel({ sources, lr }) {
    const [nextIndex, setNextIndex] = useState(1);
    const [currentA, setA] = useState(sources[0]);
    const [currentB, setB] = useState(sources[1]);
    const [stop, setStop] = useState(100);

    useEffect(() => {
        const intervalId = setInterval(() => {
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
                alt=""
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

/*
2 images A, B. A exactly overlaps B
A - showing current B - showing next
Change class of A to another class which has an animation which makes it disappear
Change src of A to B's current src
Change B's src to next image
*/
