import Head from "next/head";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import styles from "../styles/Home.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Link } from "@material-ui/core";
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
    const infoRes = await fetch(
        `${process.env.API_BASE_URL}getDiscountInfo`,
        options
    );
    const infoData = await infoRes.json();

    const searchRes = await fetch(
        `${process.env.API_BASE_URL}getApplyRecord`,
        options
    ).then((response) => response.json());
    console.log(searchRes);

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            info: infoData,
            searchData: searchRes,
            sidData: sidData,
        },
    };
}

function StatusText(props) {
    const { t } = useTranslation();
    const StatusTextMap = {
        complete: t("search.pass"),
        verified: t("search.verified"),
        unverify: t("search.unverify"),
        to_be_modified: t("search.toBeModified"),
        cancel: t("search.cancel"),
    };

    const statusText = StatusTextMap[props.type];

    return <td type={props.type}>{statusText}</td>;
}

function StatusTitle(props) {
    const { t } = useTranslation();
    const StatusTitleMap = {
        verified: t("search.verified"),
        unverify: t("search.unverify"),
        unupload: t("search.notUploaded"),
        to_be_modified: t("search.toBeModified"),
        cancel: t("search.cancel"),
    };

    const statusTitle = StatusTitleMap[props.type];
    return (
        <td className={styles.state} type={props.type}>
            {statusTitle}
            {props.supplement === 1 ? (
                <Link
                    href={`/search/insufficient/${props.dataId}`}
                    className={styles.documents}
                >
                    <a>{t("search.needToSupplement")}</a>
                </Link>
            ) : (
                <></>
            )}
        </td>
    );
}

export default function Search(props) {
    const { t } = useTranslation();

    const cancelApply = async (e) => {
        console.log(e.target.parentElement.closest(".Home_content__WcTpR"));
        const removeData = e.target.parentElement
            .closest(".Home_content__WcTpR")
            .getAttribute("data-key");
        const form = new FormData();
        form.append("application_form_id", removeData);
        form.append("sid", props.sid);
        const data = {
            method: "POST",
        };

        data.body = form;

        await fetch(`${process.env.customKey}cancelApply`, data)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === true) {
                    e.target.parentElement
                        .closest(".Home_content__WcTpR")
                        .remove();
                }
            })
            .catch((err) => console.error(err));
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
                <h3>????????????</h3>
                <div className={styles.applyItem}>
                    {props.searchData.data.length !== 0 ? (
                        <table>
                            <thead>
                                <tr className={styles.title}>
                                    <th>??????</th>
                                    <th>????????????</th>
                                    <th>??????</th>
                                    <th>????????????</th>
                                    <th>???????????????</th>
                                    <th>?????????</th>
                                    <th>????????????</th>
                                    <th>??????</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.searchData.data.map((item) => (
                                    <tr
                                        className={styles.content}
                                        key={item.index}
                                        data-key={item.application_form_id}
                                    >
                                        <td>{item.index}</td>
                                        <td>{item.application_form_id}</td>
                                        <td>{item.date}</td>
                                        <StatusText
                                            type={item.apply_status}
                                        ></StatusText>
                                        <StatusTitle
                                            type={item.diagram_status}
                                            supplement={item.diagram_upload}
                                            dataId={item.application_form_id}
                                        ></StatusTitle>
                                        {item.download_payment !== 0 ? (
                                            <td className={styles.download}>
                                                {t("search.download")}
                                            </td>
                                        ) : (
                                            <td></td>
                                        )}
                                        {item.upload_payment !== 0 ? (
                                            <td className={styles.upload}>
                                                <label htmlFor="upload">
                                                    {t("search.upload")}
                                                </label>
                                                <input
                                                    type="file"
                                                    name="photo"
                                                    id="upload"
                                                />
                                            </td>
                                        ) : (
                                            <td></td>
                                        )}
                                        {item.view === 1 ? (
                                            <td>
                                                <Link
                                                    href={`/search/check/${item.application_form_id}`}
                                                    className={styles.delete}
                                                >
                                                    <a>{t("search.view")}</a>
                                                </Link>
                                            </td>
                                        ) : (
                                            <>
                                                {item.modify === 1 &&
                                                item.cancel === 1 ? (
                                                    <td
                                                        className={
                                                            styles.delete
                                                        }
                                                    >
                                                        <Link
                                                            href={`/search/revise/${item.application_form_id}`}
                                                        >
                                                            <a>
                                                                {t(
                                                                    "search.modify"
                                                                )}
                                                            </a>
                                                        </Link>
                                                        <span
                                                            onClick={
                                                                cancelApply
                                                            }
                                                        >
                                                            {t(
                                                                "search.beCancel"
                                                            )}
                                                        </span>
                                                    </td>
                                                ) : (
                                                    <>
                                                        {item.modify === 0 &&
                                                        item.cancel === 1 ? (
                                                            <td
                                                                className={
                                                                    styles.delete
                                                                }
                                                            >
                                                                {/* <Link
                                                            href={`/search/revise/${item.application_form_id}`}
                                                        >
                                                            <a>
                                                                {t(
                                                                    "search.modify"
                                                                )}
                                                            </a>
                                                        </Link> */}
                                                                <span
                                                                    onClick={
                                                                        cancelApply
                                                                    }
                                                                >
                                                                    {t(
                                                                        "search.beCancel"
                                                                    )}
                                                                </span>
                                                            </td>
                                                        ) : (
                                                            <>
                                                                {item.modify ===
                                                                    1 &&
                                                                item.cancel ===
                                                                    0 ? (
                                                                    <td
                                                                        className={
                                                                            styles.delete
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={`/search/revise/${item.application_form_id}`}
                                                                        >
                                                                            <a>
                                                                                {t(
                                                                                    "search.modify"
                                                                                )}
                                                                            </a>
                                                                        </Link>
                                                                        {/* <span
                                                                    onClick={
                                                                        cancelApply
                                                                    }
                                                                >
                                                                    {t(
                                                                        "search.beCancel"
                                                                    )}
                                                                </span> */}
                                                                    </td>
                                                                ) : (
                                                                    <>
                                                                        {item.modify ===
                                                                            0 &&
                                                                        item.cancel ===
                                                                            0 ? (
                                                                            <td
                                                                                className={
                                                                                    styles.delete
                                                                                }
                                                                            >
                                                                                {/* <Link
                                                                            href={`/search/revise/${item.application_form_id}`}
                                                                        >
                                                                            <a>
                                                                                {t(
                                                                                    "search.modify"
                                                                                )}
                                                                            </a>
                                                                        </Link>
                                                                        <span
                                                                    onClick={
                                                                        cancelApply
                                                                    }
                                                                >
                                                                    {t(
                                                                        "search.beCancel"
                                                                    )}
                                                                </span> */}
                                                                            </td>
                                                                        ) : (
                                                                            <>

                                                                            </>
                                                                        )}
                                                                    </>
                                                                )}
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div>????????????</div>
                    )}
                </div>
            </Hero>
            <Footer />
        </div>
    );
}
