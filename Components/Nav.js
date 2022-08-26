import styles from "../styles/Nav.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import MyDropdown from "./MyDropDown";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

export default function Nav(props) {
    const { t } = useTranslation();
    const router = useRouter();
    return (
        <nav style={{ background: "#FFFFFF" }}>
            <div className={styles.desktopNav}>
                <Link href={"/"}>
                    <a className={styles.logo}>
                        <img src="/img/logo.svg" alt="TAITRA" />
                        <p>{t("logo")}</p>
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
            </div>
            <div className={styles.mobileNav}>
                <Link href={"/"}>
                    <a className={styles.logo}>
                        <img src="/img/logo.svg" alt="TAITRA" />
                        <p>專業展水電線上申請</p>
                    </a>
                </Link>
                <div className={styles.mobileDropDown}>
                    <Menu>
                        {({ open }) => (
                            <>
                                <Menu.Button className={styles.dropdown}>
                                    <svg
                                        width="25"
                                        height="17"
                                        viewBox="0 0 25 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="25"
                                            height="3"
                                            fill="#225183"
                                        />
                                        <rect
                                            y="7"
                                            width="25"
                                            height="3"
                                            fill="#225183"
                                        />
                                        <rect
                                            y="14"
                                            width="25"
                                            height="3"
                                            fill="#225183"
                                        />
                                    </svg>
                                </Menu.Button>
                                <Transition
                                    show={open}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    {/* Mark this component as `static` */}
                                    <Menu.Items
                                        static
                                        className={styles.dropdownMenu}
                                    >
                                        <div className={styles.mobileLinks}>
                                            <Menu.Item>
                                                <Link href={"/"}>
                                                    <a>{t("nav.applyNote")}</a>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link href={"/price"}>
                                                    <a>{t("nav.price")}</a>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link href={"/apply"}>
                                                    <a>{t("nav.apply")}</a>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link href={"/search"}>
                                                    <a>{t("nav.search")}</a>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link
                                                    href={
                                                        "/sign-for-completion"
                                                    }
                                                >
                                                    <a>{t("nav.complete")}</a>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link href={"/contact"}>
                                                    <a>{t("nav.contact")}</a>
                                                </Link>
                                            </Menu.Item>
                                        </div>
                                        <div className={styles.mobileLangGroup}>
                                            <Menu.Item key={"tc"}>
                                                <Link
                                                    href={router.asPath}
                                                    locale={"tc"}
                                                >
                                                    <a>繁體中文</a>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item key={"en"}>
                                                <Link
                                                    href={router.asPath}
                                                    locale={"en"}
                                                >
                                                    <a>English</a>
                                                </Link>
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </nav>
    );
}
