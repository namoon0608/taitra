import styles from "../styles/Nav.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import MyDropdown from "./MyDropDown";

export default function Nav(props) {
    const { t } = useTranslation();
    return (
        <nav style={{ background: "#FFFFFF" }}>
            <div className={styles.desktopNav}>
                <Link href={"/"}>
                    <a className={styles.logo}>
                        <img src="/img/logo.svg" alt="TAITRA" />
                        <p>專業展水電線上申請</p>
                    </a>
                </Link>

                <ul className={styles.navLinkList}>
                    <li>
                        <Link href={"/"}>
                            <a>{t("nav.applyNote")}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/price"}>
                            <a>{t("nav.price")}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/apply"}>
                            <a>{t("nav.apply")}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/search"}>
                            <a>{t("nav.search")}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/sign-for-completion"}>
                            <a>{t("nav.complete")}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>
                            <a>{t("nav.contact")}</a>
                        </Link>
                    </li>
                </ul>
                <MyDropdown />
                {/* <div className={styles.dropdown}>
                    <button>Language</button>
                    <ul
                        className={styles.dropdownMenu}
                        aria-labelledby="dropdownMenuButton1"
                    >
                        <li key={"zh"}>
                            <Link href={router.asPath} locale={"zh"}>
                                <a>繁體中文</a>
                            </Link>
                        </li>
                        <li key={"en"}>
                            <Link href={router.asPath} locale={"en"}>
                                <a>English</a>
                            </Link>
                        </li>
                    </ul>
                </div> */}
            </div>
            <div className={styles.mobileNav}>
                <Link href={"/"}>
                    <a className={styles.logo}>
                        <img src="/img/logo.svg" alt="TAITRA" />
                        <p>專業展水電線上申請</p>
                    </a>
                </Link>
                <svg
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="25" height="3" fill="#225183" />
                    <rect y="7" width="25" height="3" fill="#225183" />
                    <rect y="14" width="25" height="3" fill="#225183" />
                </svg>
            </div>
        </nav>
    );
}
