import styles from "../styles/Hero.module.scss";

export default function Hero({ children, info }) {
    return (
        <div className={styles.container}>
            <div className={styles.bgWrap}>
                <img
                    src={info.data.banner}
                    alt="MEGO SHOWS"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className={styles.main}>
                <div className={styles.tabContent}>
                    <div className={styles.upperTab}>
                        <h1>{info.data.event_name}</h1>
                        <ul>
                            {info.data.info.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}
