import { Menu, Transition } from "@headlessui/react";
import styles from "../styles/DropLang.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const MyDropdown = () => {
    const router = useRouter();
    return (
        <div className={styles.langDropDown}>
            <Menu>
                {({ open }) => (
                    <>
                        <Menu.Button className={styles.dropdown}>
                            Language
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
                            <Menu.Items static className={styles.dropdownMenu}>
                                <Menu.Item key={"tc"}>
                                    <Link href={router.asPath} locale={"tc"}>
                                        <a>繁體中文</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key={"en"}>
                                    <Link href={router.asPath} locale={"en"}>
                                        <a>English</a>
                                    </Link>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
};

export default MyDropdown;
