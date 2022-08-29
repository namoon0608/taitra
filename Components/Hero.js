import styles from "../styles/Hero.module.scss";
import { useTranslation } from "next-i18next";

export default function Hero({ children, info }) {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.bgWrap}>
                <img
                    src={info.data.banner}
                    alt="MEGO SHOWS"
                    layout="fill"
                    objectfit="cover"
                    quality={100}
                />
            </div>
            <div className={styles.main}>
                <div className={styles.tabContent}>
                    <div className={styles.upperTab}>
                        <h1>{info.data.event_name}</h1>
                        <ul>
                            {/* <li>{t("info.item1")}</li>
                            <li>{t("info.item2")}</li>
                            <li>{t("info.item3")}</li>
                            <li>{t("info.item4")}</li> */}
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
