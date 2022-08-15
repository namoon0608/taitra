import styles from "../styles/Hero.module.scss";

export default function Hero(props) {
    return (
        <div className={styles.container}>
            <div className={styles.bgWrap}>
                <img
                    src="/img/image13.png"
                    alt="MEGO SHOWS"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className={styles.main}>
                <div className={styles.tabContent}>
                    <div className={styles.upperTab}>
                        <h1>2022台北國際食品展</h1>
                        <ul>
                            <li>2022年5月13日(含)前完成申請，可享 9折優惠。</li>
                            <li>2022年5月14日至6月2日申請者按標準收費。</li>
                            <li>2022年6月6日(含)以後須加付逾期申請費50%。</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.content}>{props.children}</div>
            </div>
        </div>
    );
}
