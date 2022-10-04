import Head from "next/head";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import styles from "../styles/Home.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { setCookie, getCookie } from "cookies-next";

export async function getServerSideProps({ locale, query, req, res }) {
    let oldCookie = getCookie("sid", { req, res });
    if (query.sid !== undefined) {
        if (query.sid !== oldCookie) {
            setCookie("sid", query.sid, { req, res, maxAge: 60 * 6 * 24 });
        } else if (query.sid === getCookie("sid", { req, res })) {
            oldCookie = oldCookie;
        }
    } else if (query.sid === undefined || query.sid === "") {
        if (oldCookie !== undefined || oldCookie !== "") {
            oldCookie = oldCookie;
        }
        if (oldCookie === undefined) {
            return {
                redirect: {
                    destination:
                        "https://www.taiwantradeshows.com.tw/zh_TW/index.html",
                },
            };
        }
    }
    const form = new URLSearchParams();
    form.append("sid", getCookie("sid", { req, res }));

    const sidForm = {
        method: "POST",
    };
    sidForm.body = form;

    const sidData = await fetch(`${process.env.API_BASE_URL}sso`, sidForm).then(
        (response) => response.json()
    );

    if (sidData.status === false) {
        return {
            redirect: {
                destination:
                    "https://www.taiwantradeshows.com.tw/zh_TW/index.html",
            },
        };
    }

    if (sidData.status === false) {
        return {
            redirect: {
                destination:
                    "https://www.taiwantradeshows.com.tw/zh_TW/index.html",
            },
        };
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            lang: locale,
            event_uid: sidData.event_uid,
            company_id: sidData.company_id,
        }),
    };
    const price = await fetch(
        `${process.env.API_BASE_URL}getPriceTable`,
        options
    );
    const data = await price.json();
    const infoRes = await fetch(
        `${process.env.API_BASE_URL}getDiscountInfo`,
        options
    );
    const infoData = await infoRes.json();

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            priceList: data,
            info: infoData,
            sidData: sidData,
        },
    };
}

export default function Price(props) {
    const { t } = useTranslation();
    const priceList = props.priceList;
    let rows = [];
    let rowIndex = 0;
    for (let [i, item] of priceList.items.entries()) {
        rowIndex = Math.floor(i / 34);
        if (!rows[rowIndex]) {
            rows[rowIndex] = [];
        }
        rows[rowIndex].push(item);
    }
    const getList = (data) => {
        let lists = [];
        for (let i = 0; i < 34; i++) {
            if (data[i] === undefined) {
                lists.push(
                    <tr key={data[i]}>
                        <td className={styles.item}></td>
                        <td></td>
                        <td className={styles.itemName}></td>
                        <td className={styles.price}></td>
                    </tr>
                );
            } else {
                lists.push(
                    <tr key={data[i]}>
                        <td className={styles.item}>{data[i].index}</td>
                        <td>{data[i].type}</td>
                        <td className={styles.itemName}>{data[i].name}</td>
                        <td className={styles.price}>{data[i].price}</td>
                    </tr>
                );
            }
        }
        return lists;
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>TAITRA</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/img/logo.svg" />
            </Head>

            <Nav />
            <Hero info={props.info}>
                <h3>{t("priceList.title")}</h3>
                <div
                    className={
                        rows.length > 1
                            ? styles.priceContain
                            : styles.priceOneContain
                    }
                >
                    {rows.length === 0 ? (
                        <div>Loading...</div>
                    ) : (
                        rows.map((row, index) => (
                            <table key={index}>
                                <thead>
                                    <tr>
                                        <th>{t("priceList.no")}</th>
                                        <th>{t("priceList.itemNo")}</th>
                                        <th className={styles.itemName}>
                                            {t("priceList.item")}
                                        </th>
                                        <th>{t("priceList.price")}</th>
                                    </tr>
                                </thead>
                                <tbody>{getList(row)}</tbody>
                            </table>
                        ))
                    )}
                </div>
            </Hero>
            <Footer />
        </div>
    );
}
