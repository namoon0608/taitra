import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    主辦單位
                    <Image
                        src="/img/footer-logo.svg"
                        alt="Footer Logo"
                        width={21}
                        height={21}
                    />
                    <a href="#">財團法人中華民國對外貿易發展協會</a>
                </li>
                <li>
                    <a href="#" className={styles.decoration}>
                        服務條款和隱私權政策
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.decoration}>
                        免責聲明
                    </a>
                </li>
            </ul>
            <p>
                @2022 by Taiwan External Developement Council(TAITRA). All
                rights reserved.
            </p>
        </footer>
    );
}
