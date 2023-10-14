import styles from "./skills.module.css";

export default function Skills() {
    return (
        <div className={styles.container}>
            <div className={styles.placing}>
                <div className={styles.tree}>
                    <ul>
                        <li>
                            <a href="#">SKILLS</a>
                            <ul>
                                <li>
                                    <a href="#">Frontend</a>
                                    <ul>
                                        <li>
                                            <a href="#">Design</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Figma</a>
                                                </li>
                                                <li>
                                                    <a href="#">Photoshop</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Web Dev</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Next.js</a>
                                                </li>
                                                <li>
                                                    <a href="#">React.js</a>
                                                </li>
                                                <li>
                                                    <a href="#">Framer</a>
                                                </li>
                                                <li>
                                                    <a href="#">Lektor</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Backend</a>
                                    <ul>
                                        <li>
                                            <a href="#">OS</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Graphics</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                Framebuffers
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">DRM</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">KMS</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Database</a>
                                            <ul>
                                                <li>
                                                    <a href="#">MongoDB</a>
                                                </li>
                                                <li>
                                                    <a href="#">Firebase</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Server</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Express</a>
                                                </li>
                                                <li>
                                                    <a href="#">Flask</a>
                                                </li>
                                                <li>
                                                    <a href="#">GraphQL</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
