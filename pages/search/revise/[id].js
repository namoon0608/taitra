import { useState, useEffect } from "react";
import Head from "next/head";
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";
import Hero from "../../../Components/Hero";
import styles from "../../../styles/Apply.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Popup from "../../../Components/Popup/Popup";
import SlideToggle from "react-slide-toggle";
import { StylesContext } from "@material-ui/styles";
import { useRouter } from "next/router";
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
                    destination: "https://twtc.com.tw/",
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

    options.body.append("application_form_id", `${query.id}`);
    options.body.append("revised", "N");

    const reviseData = await fetch(
        `${process.env.API_BASE_URL}getReviseData`,
        options
    ).then((response) => response.json());
    console.log(reviseData);

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            info: infoData,
            data: reviseData,
            sidData: sidData,
        },
    };
}

export default function Revise(props) {
    const { t } = useTranslation();
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState(false);
    const [revise, setRevise] = useState(false);
    const [upNumber, setUpNumber] = useState();
    const [downNumber, setDownNumber] = useState();
    const router = useRouter();
    const [reviseItems, setReviseItems] = useState([]);

    const initProducts = async () => {
        const form = new FormData();
        form.append("application_form_id", router.query.id);
        form.append("event_uid", props.sidData.event_uid);
        form.append("company_id", props.sidData.company_id);
        form.append("revised", "Y");
        const options = {
            method: "POST",
        };
        options.body = form;

        setLoading(true);
        const result = await fetch(
            `${process.env.customKey}getReviseData`,
            options
        )
            .then((response) => response.json())
            // .then((response) => {
            //     setData(response);
            //     // console.log(response);
            //     setLoading(false);
            // })
            .catch((err) => console.error(err));
        setData(result);
    };

    useEffect(() => {
        if (preview) {
            initProducts();
        }
    }, [preview]);

    useEffect(() => {
        if (revise) {
            initProducts();
            setTimeout(() => {
                setRevise(false);
            }, "1000");
            console.log(data);
        }
    }, [revise]);

    const close = () => {
        setShow(false);
        setPreview(false);
    };

    const cancelSupplement = () => {
        router.push("/search");
    };

    const handleSubmit = async () => {
        const form = new FormData();
        form.append("application_form_id", router.query.id);
        form.append("event_uid", props.sidData.event_uid);
        form.append("company_id", props.sidData.company_id);

        const options = {
            method: "POST",
        };

        options.body = form;
        await fetch(`${process.env.customKey}setReviseConfirm`, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                router.push("/search");
            })
            .catch((err) => console.error(err));
    };

    const handlePreview = async () => {
        const form = new FormData();
        form.append("application_form_id", router.query.id);
        form.append(
            "proxy_company_name",
            document.querySelectorAll('input[name="company"]')[0].value
        );
        form.append(
            "proxy_tax_id",
            document.querySelectorAll('input[name="uniformNum"]')[0].value
        );
        form.append(
            "proxy_contact_person",
            document.querySelectorAll('input[name="contactPerson"]')[0].value
        );
        form.append(
            "proxy_email",
            document.querySelectorAll('input[name="email"]')[0].value
        );
        form.append(
            "proxy_phone",
            document.querySelectorAll('input[name="phone"]')[0].value
        );
        form.append(
            "invoice_company_name",
            document.querySelectorAll('input[name="company"]')[1].value
        );
        form.append(
            "invoice_address",
            document.querySelector('input[name="address"]').value
        );
        form.append(
            "invoice_tax_id",
            document.querySelectorAll('input[name="uniformNum"]')[1].value
        );
        form.append(
            "remark",
            document.querySelectorAll('textarea[name="remark"]')[0].value
        );
        form.append("event_uid", props.sidData.event_uid);
        form.append("company_id", props.sidData.company_id);
        form.append("items", JSON.stringify(reviseItems));

        const options = {
            method: "POST",
            body: new URLSearchParams({
                lang: router.locale,
                application_form_id: router.query.id,
            }),
        };
        options.body = form;
        await fetch(`${process.env.customKey}setRevise`, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setPreview(true);
            })
            .catch((err) => console.error(err));
    };

    const handleRevise = async () => {
        let items = [];
        const form = new FormData();
        const checkBoxsOne = document.querySelectorAll(
            ".Apply_aGroup__d5k3g input[type='checkbox']"
        );
        const checkBoxsTwo = document.querySelectorAll(
            ".Apply_bGroup__8er2v input[type='checkbox']"
        );
        for (let check of checkBoxsOne) {
            if (check.checked) {
                items.push({ item_id: check.value, quantity: "1" });
            }
        }
        for (let check of checkBoxsTwo) {
            if (check.checked) {
                let num = check.nextSibling.nextSibling.childNodes[1];
                items.push({
                    item_id: check.value,
                    quantity: num.value,
                });
            }
        }
        form.append("application_form_id", router.query.id);
        form.append(
            "proxy_company_name",
            document.querySelectorAll('input[name="company"]')[0].value
        );
        form.append(
            "proxy_tax_id",
            document.querySelectorAll('input[name="uniformNum"]')[0].value
        );
        form.append(
            "proxy_contact_person",
            document.querySelectorAll('input[name="contactPerson"]')[0].value
        );
        form.append(
            "proxy_email",
            document.querySelectorAll('input[name="email"]')[0].value
        );
        form.append(
            "proxy_phone",
            document.querySelectorAll('input[name="phone"]')[0].value
        );
        form.append(
            "invoice_company_name",
            document.querySelectorAll('input[name="company"]')[1].value
        );
        form.append(
            "invoice_address",
            document.querySelector('input[name="address"]').value
        );
        form.append(
            "invoice_tax_id",
            document.querySelectorAll('input[name="uniformNum"]')[1].value
        );
        form.append(
            "remark",
            document.querySelectorAll('textarea[name="remark"]')[0].value
        );
        form.append("event_uid", props.sidData.event_uid);
        form.append("company_id", props.sidData.company_id);
        form.append("items", JSON.stringify(items));
        setReviseItems(items);

        const options = {
            method: "POST",
            body: new URLSearchParams({
                lang: router.locale,
                application_form_id: router.query.id,
            }),
        };
        options.body = form;

        await fetch(`${process.env.customKey}setRevise`, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setShow(false);
                setRevise(true);
            })
            .catch((err) => console.error(err));
    };

    const active = (e) => {
        if (e.target.checked) {
            e.target.parentNode.className = styles.checkedActive;
        } else {
            e.target.parentNode.className = "";
        }
    };
    const enableNextTextBox = (e) => {
        if (e.target.checked) {
            e.target.nextSibling.nextSibling.childNodes[1].removeAttribute(
                "disabled"
            );
            e.target.nextSibling.nextSibling.childNodes[1].min = 1;
            e.target.nextSibling.nextSibling.childNodes[1].value = 1;
            e.target.parentNode.className = styles.checkedActive;
        } else {
            e.target.nextSibling.nextSibling.childNodes[1].setAttribute(
                "disabled",
                ""
            );
            e.target.nextSibling.nextSibling.childNodes[1].value = 0;
            e.target.parentNode.className = "";
        }
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
                <h3>{t("search.revise")}</h3>
                <div className={styles.checkForm}>
                    <h2>{t("search.option")}</h2>
                    <p
                        className={styles.opinionBox}
                        // dangerouslySetInnerHTML={{
                        //     __html: props.data.comment.replace(
                        //         /(?:\r\n|\r|\n)/g,
                        //         "<br>"
                        //     ),
                        // }}
                    ></p>
                    <h2>代理或裝潢公司基本資料</h2>
                    <div className={styles.form}>
                        <div className={styles.formRow}>
                            <label>公司名稱</label>
                            <input
                                name="company"
                                type="text"
                                defaultValue={
                                    props.data.proxy.proxy_company_name
                                }
                                maxLength={30}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <label>統一編號</label>
                            <input
                                name="uniformNum"
                                type="text"
                                defaultValue={props.data.proxy.proxy_tax_id}
                                maxLength={8}
                                value={upNumber}
                                onChange={(e) =>
                                    setUpNumber(
                                        e.target.value.replace(/[^\d]/g, "")
                                    )
                                }
                            />
                        </div>
                        <div className={styles.formRow}>
                            <label>聯絡人</label>
                            <input
                                name="contactPerson"
                                type="text"
                                defaultValue={
                                    props.data.proxy.proxy_contact_person
                                }
                                maxLength={20}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <label>聯絡電話</label>
                            <input
                                name="phone"
                                type="text"
                                defaultValue={props.data.proxy.proxy_phone}
                                maxLength={20}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <label>電子郵件</label>
                            <input
                                name="email"
                                type="email"
                                defaultValue={props.data.proxy.proxy_email}
                            />
                        </div>
                    </div>
                    <h2>開立發票資訊</h2>
                    <div className={styles.form}>
                        <div className={styles.formRow}>
                            <label>公司名稱</label>
                            <input
                                name="company"
                                type="text"
                                defaultValue={
                                    props.data.invoice.invoice_comapny
                                }
                                maxLength={30}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <label>統一編號</label>
                            <input
                                name="uniformNum"
                                type="text"
                                maxLength={8}
                                value={downNumber}
                                onChange={(e) =>
                                    setDownNumber(
                                        e.target.value.replace(/[^\d]/g, "")
                                    )
                                }
                                defaultValue={props.data.invoice.invoice_taxid}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <label>發票寄送地址</label>
                            <input
                                name="address"
                                type="text"
                                maxLength={30}
                                defaultValue={
                                    props.data.invoice.invoice_address
                                }
                            />
                        </div>
                        <div
                            className={[styles.formRow, styles.prepare].join(
                                " "
                            )}
                        >
                            <label htmlFor="prepare">備註</label>
                            <textarea
                                name="remark"
                                defaultValue={props.data.invoice.remark}
                            ></textarea>
                        </div>
                    </div>
                    <h2 className={styles.reviseTitle}>
                        水電追加申請項目
                        <button
                            className={styles.revise}
                            onClick={() => setShow(true)}
                        >
                            修改
                        </button>
                    </h2>
                    <div className={styles.applyItem}>
                        <table>
                            <thead>
                                <tr className={styles.title}>
                                    <th style={{ width: "7%" }}>項次</th>
                                    <th style={{ width: "60%" }}>申請項目</th>
                                    <th style={{ width: "11%" }}>數量</th>
                                    <th style={{ width: "11%" }}>單價</th>
                                    <th style={{ width: "11%" }}>複價</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data !== null ? (
                                    <>
                                        {data.hydro_items_trial.items.map(
                                            (item, idx) => (
                                                <>
                                                    <tr
                                                        className={
                                                            styles.content
                                                        }
                                                        key={idx}
                                                    >
                                                        <td>{item.index}</td>
                                                        <td
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                                paddingLeft:
                                                                    "15px",
                                                            }}
                                                        >
                                                            {item.item}
                                                        </td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.sum}</td>
                                                    </tr>
                                                </>
                                            )
                                        )}
                                        <tr className={styles.sum}>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className={styles.sumTitle}>
                                                {t(
                                                    "applyForm.preview.groupThree.total"
                                                )}
                                            </td>
                                            <td>
                                                {
                                                    data.hydro_items_trial
                                                        .total_sum
                                                }
                                            </td>
                                        </tr>
                                        {data.discount.discount_value !== "" ? (
                                            <>
                                                <tr className={styles.sum}>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td
                                                        className={
                                                            styles.sumTitle
                                                        }
                                                    >
                                                        {
                                                            data.discount
                                                                .discount_type
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            data.discount
                                                                .discount_price
                                                        }
                                                    </td>
                                                </tr>
                                                <tr className={styles.sum}>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td
                                                        className={
                                                            styles.sumTitle
                                                        }
                                                    >
                                                        總價
                                                    </td>
                                                    <td>
                                                        {
                                                            data.discount
                                                                .finally_sum
                                                        }
                                                    </td>
                                                </tr>
                                            </>
                                        ) : null}
                                    </>
                                ) : (
                                    <>
                                        {props.data.hydro_items_trial.items.map(
                                            (item, idx) => (
                                                <tr
                                                    className={styles.content}
                                                    key={idx}
                                                >
                                                    <td>{item.index}</td>
                                                    <td
                                                        style={{
                                                            textAlign: "left",
                                                            paddingLeft: "15px",
                                                        }}
                                                    >
                                                        {item.item}
                                                    </td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.sum}</td>
                                                </tr>
                                            )
                                        )}
                                        <tr className={styles.sum}>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className={styles.sumTitle}>
                                                {t(
                                                    "applyForm.preview.groupThree.total"
                                                )}
                                            </td>
                                            <td>
                                                {
                                                    props.data.hydro_items_trial
                                                        .total_sum
                                                }
                                            </td>
                                        </tr>
                                        {props.data.discount.discount_value !==
                                        "" ? (
                                            <>
                                                <tr className={styles.sum}>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td
                                                        className={
                                                            styles.sumTitle
                                                        }
                                                    >
                                                        {
                                                            props.data.discount
                                                                .discount_type
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            props.data.discount
                                                                .discount_price
                                                        }
                                                    </td>
                                                </tr>
                                                <tr className={styles.sum}>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td
                                                        className={
                                                            styles.sumTitle
                                                        }
                                                    >
                                                        總價
                                                    </td>
                                                    <td>
                                                        {
                                                            props.data.discount
                                                                .finally_sum
                                                        }
                                                    </td>
                                                </tr>
                                            </>
                                        ) : null}
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                {show ? (
                    <Popup close={close}>
                        <div
                            className={styles.applyCheckBox}
                            onClick={(e) => {
                                // do not close modal if anything inside modal content is clicked
                                e.stopPropagation();
                            }}
                        >
                            <h2>水電追加申請項目</h2>
                            {data !== null ? (
                                <div className={styles.group}>
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        Ａ.用電110V電源箱
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemA"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.aGroup
                                                            }
                                                        >
                                                            {data.hydro_items[0].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        active
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <span>
                                                                                    {
                                                                                        item.price
                                                                                    }
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        active
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <span>
                                                                                    {
                                                                                        item.price
                                                                                    }
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        B. 用電220V電源箱
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemBCD"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {data.hydro_items[1].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        C. 用電380V電源箱
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemBCD"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {data.hydro_items[2].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        D. 用電440V電源箱
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemBCD"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {data.hydro_items[3].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        E. 24小時用電
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemBCD"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {data.hydro_items[4].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        F. 給排水管
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemE"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {data.hydro_items[5].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        G. 壓縮空氣
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemF"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {data.hydro_items[6].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                </div>
                            ) : (
                                <div className={styles.group}>
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        Ａ.用電110V電源箱
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemA"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.aGroup
                                                            }
                                                        >
                                                            {props.data.hydro_items[0].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        active
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <span>
                                                                                    {
                                                                                        item.price
                                                                                    }
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        active
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <span>
                                                                                    {
                                                                                        item.price
                                                                                    }
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        B. 用電220V電源箱
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemBCD"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {props.data.hydro_items[1].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        C. 用電380V電源箱
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemBCD"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {props.data.hydro_items[2].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        D. 用電440V電源箱
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemBCD"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {props.data.hydro_items[3].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        E. 24小時用電
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemBCD"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {props.data.hydro_items[4].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        F. 給排水管
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemE"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {props.data.hydro_items[5].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <SlideToggle
                                        duration={1000}
                                        collapsed={true}
                                        whenReversedUseBackwardEase={false}
                                        render={({
                                            toggle,
                                            setCollapsibleElement,
                                            toggleState,
                                        }) => (
                                            <div className={styles.card}>
                                                <div className="card-header">
                                                    <label
                                                        className={[
                                                            styles.dropDown,
                                                            toggleState ===
                                                            "COLLAPSED"
                                                                ? styles.dropDown
                                                                : styles.active,
                                                        ].join(" ")}
                                                        onClick={toggle}
                                                    >
                                                        G. 壓縮空氣
                                                        <span>
                                                            {toggleState ===
                                                                "EXPANDED" ||
                                                            toggleState ===
                                                                "EXPANDING" ? (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1 9L8 2L15 9"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="16"
                                                                    height="10"
                                                                    viewBox="0 0 16 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15 1L8 8L1 1"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </label>
                                                </div>
                                                <div
                                                    className={styles.cardBody}
                                                    ref={setCollapsibleElement}
                                                >
                                                    <div
                                                        className={
                                                            styles.dropDownContent
                                                        }
                                                    >
                                                        <p>
                                                            {t(
                                                                "applyForm.stepTwo.itemF"
                                                            )}
                                                        </p>
                                                        <div
                                                            className={
                                                                styles.bGroup
                                                            }
                                                        >
                                                            {props.data.hydro_items[6].data.map(
                                                                (item) => (
                                                                    <>
                                                                        {item.chk ===
                                                                        "Y" ? (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                                className={
                                                                                    styles.checkedActive
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                    defaultChecked
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="1"
                                                                                        defaultValue={
                                                                                            item.quantity
                                                                                        }
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        ) : (
                                                                            <label
                                                                                htmlFor={
                                                                                    item.item_id
                                                                                }
                                                                                key={
                                                                                    item.item_id
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={
                                                                                        item.item_id
                                                                                    }
                                                                                    value={
                                                                                        item.item_id
                                                                                    }
                                                                                    onChange={
                                                                                        enableNextTextBox
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                <label
                                                                                    className={
                                                                                        styles.num
                                                                                    }
                                                                                >
                                                                                    {t(
                                                                                        "applyForm.stepTwo.quantity"
                                                                                    )}
                                                                                    <input
                                                                                        type="number"
                                                                                        min="0"
                                                                                        disabled
                                                                                    />
                                                                                </label>
                                                                                <span>
                                                                                    {
                                                                                        item.prcie
                                                                                    }

                                                                                    /
                                                                                    {t(
                                                                                        "applyForm.stepTwo.set"
                                                                                    )}
                                                                                </span>
                                                                            </label>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                </div>
                            )}

                            <div className={styles.btns}>
                                <button
                                    className={styles.cancel}
                                    onClick={close}
                                >
                                    取消
                                </button>
                                <button
                                    className={styles.complete}
                                    onClick={handleRevise}
                                >
                                    完成
                                </button>
                            </div>
                        </div>
                    </Popup>
                ) : null}
                {preview ? (
                    <Popup close={close}>
                        <div
                            className={styles.applyCheckBox}
                            onClick={(e) => {
                                // do not close modal if anything inside modal content is clicked
                                e.stopPropagation();
                            }}
                        >
                            <div className={styles.form}>
                                <h2>{t("applyForm.preview.groupOne.title")}</h2>
                                <div className={styles.formComplete}>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupOne.companyName"
                                            )}
                                        </label>
                                        <p>
                                            {
                                                document.querySelectorAll(
                                                    'input[name="company"]'
                                                )[0].value
                                            }
                                        </p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupOne.taxID"
                                            )}
                                        </label>
                                        <p>
                                            {
                                                document.querySelectorAll(
                                                    'input[name="uniformNum"]'
                                                )[0].value
                                            }
                                        </p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupOne.contactPerson"
                                            )}
                                        </label>
                                        <p>
                                            {
                                                document.querySelectorAll(
                                                    'input[name="contactPerson"]'
                                                )[0].value
                                            }
                                        </p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupOne.phone"
                                            )}
                                        </label>
                                        <p>
                                            {
                                                document.querySelectorAll(
                                                    'input[name="phone"]'
                                                )[0].value
                                            }
                                        </p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>E-mail</label>
                                        <p>
                                            {
                                                document.querySelectorAll(
                                                    'input[name="email"]'
                                                )[0].value
                                            }
                                        </p>
                                    </div>
                                </div>
                                <h2>{t("applyForm.preview.groupTwo.title")}</h2>
                                <div className={styles.formCompleteInvoce}>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupTwo.companyName"
                                            )}
                                        </label>
                                        <p>
                                            {
                                                document.querySelectorAll(
                                                    'input[name="company"]'
                                                )[1].value
                                            }
                                        </p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupTwo.taxID"
                                            )}
                                        </label>
                                        <p>
                                            {" "}
                                            {
                                                document.querySelectorAll(
                                                    'input[name="uniformNum"]'
                                                )[1].value
                                            }
                                        </p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {" "}
                                            {t(
                                                "applyForm.preview.groupTwo.invoiceAddress"
                                            )}
                                        </label>
                                        <p>
                                            {
                                                document.querySelector(
                                                    'input[name="address"]'
                                                ).value
                                            }
                                        </p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {" "}
                                            {t(
                                                "applyForm.preview.groupTwo.remark"
                                            )}
                                            ：
                                        </label>
                                        <p>
                                            {" "}
                                            {
                                                document.querySelectorAll(
                                                    'textarea[name="remark"]'
                                                )[0].value
                                            }
                                        </p>
                                    </div>
                                </div>
                                <h2>
                                    {t("applyForm.preview.groupThree.title")}
                                </h2>
                                <div className={styles.applyItem}>
                                    <table>
                                        <thead>
                                            <tr className={styles.title}>
                                                <th>
                                                    {t(
                                                        "applyForm.preview.groupThree.no"
                                                    )}
                                                </th>
                                                <th>
                                                    {t(
                                                        "applyForm.preview.groupThree.item"
                                                    )}
                                                </th>
                                                <th>
                                                    {t(
                                                        "applyForm.preview.groupThree.quantity"
                                                    )}
                                                </th>
                                                <th>
                                                    {t(
                                                        "applyForm.preview.groupThree.unitPrice"
                                                    )}
                                                </th>
                                                <th>
                                                    {t(
                                                        "applyForm.preview.groupThree.itemCost"
                                                    )}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data !== null ? (
                                                <>
                                                    {data.hydro_items_trial.items.map(
                                                        (item) => (
                                                            <>
                                                                <tr
                                                                    className={
                                                                        styles.content
                                                                    }
                                                                    key={
                                                                        item.index
                                                                    }
                                                                >
                                                                    <td>
                                                                        {
                                                                            item.index
                                                                        }
                                                                    </td>
                                                                    <td
                                                                        style={{
                                                                            textAlign:
                                                                                "left",
                                                                            paddingLeft:
                                                                                "15px",
                                                                        }}
                                                                    >
                                                                        {
                                                                            item.item
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item.quantity
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item.price
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item.sum
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    )}
                                                    <tr className={styles.sum}>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td
                                                            className={
                                                                styles.sumTitle
                                                            }
                                                        >
                                                            {t(
                                                                "applyForm.preview.groupThree.total"
                                                            )}
                                                        </td>
                                                        <td>
                                                            {
                                                                data
                                                                    .hydro_items_trial
                                                                    .total_sum
                                                            }
                                                        </td>
                                                    </tr>
                                                    {data.discount
                                                        .discount_value !==
                                                    "" ? (
                                                        <>
                                                            <tr
                                                                className={
                                                                    styles.sum
                                                                }
                                                            >
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td
                                                                    className={
                                                                        styles.sumTitle
                                                                    }
                                                                >
                                                                    {
                                                                        data
                                                                            .discount
                                                                            .discount_type
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        data
                                                                            .discount
                                                                            .discount_price
                                                                    }
                                                                </td>
                                                            </tr>
                                                            <tr
                                                                className={
                                                                    styles.sum
                                                                }
                                                            >
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td
                                                                    className={
                                                                        styles.sumTitle
                                                                    }
                                                                >
                                                                    總價
                                                                </td>
                                                                <td>
                                                                    {
                                                                        data
                                                                            .discount
                                                                            .finally_sum
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </>
                                                    ) : null}
                                                </>
                                            ) : (
                                                <>Loading...</>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className={styles.btns}>
                                <button
                                    className={styles.cancel}
                                    onClick={close}
                                >
                                    取消
                                </button>
                                <button
                                    className={styles.complete}
                                    onClick={handleSubmit}
                                >
                                    完成
                                </button>
                            </div>
                        </div>
                    </Popup>
                ) : null}
                <div className={styles.btns}>
                    <button
                        className={styles.cancel}
                        onClick={cancelSupplement}
                    >
                        取消
                    </button>
                    <button className={styles.complete} onClick={handlePreview}>
                        完成
                    </button>
                </div>
            </Hero>
            <Footer />
        </div>
    );
}
