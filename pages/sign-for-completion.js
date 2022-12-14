import { useState, useRef } from "react";
import Head from "next/head";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import styles from "../styles/Home.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SignaturePad from "react-signature-canvas";
import Popup from "../Components/Popup/Popup";
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

    const completeData = await fetch(
        `${process.env.API_BASE_URL}getDoneProjectData`,
        options
    ).then((response) => response.json());

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            info: infoData,
            completeData: completeData,
            sidData: sidData,
        },
    };
}

export default function Sign(props) {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const [imageURL, setImageURL] = useState(null);
    const router = useRouter();

    const close = () => {
        setShow(false);
    };
    const sigCanvas = useRef({});
    const clear = () => sigCanvas.current.clear();
    const save = () => {
        setImageURL(
            sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")
        );
        setShow(false);
    };
    function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }

    function blobToFile(theBlob, fileName) {
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    }

    const handleSubmit = async () => {
        let applicationList = [];
        props.completeData.data.forEach((item) => {
            applicationList.push(item.application_form_id);
        });
        console.log(applicationList);
        var blob = dataURLtoBlob(imageURL);
        var file = blobToFile(blob, "test");
        console.log(imageURL);

        if (imageURL !== null) {
            for (let i = 0; i < applicationList.length; i++) {
                const form = new FormData();
                form.append("application_form_id", applicationList[i]);
                form.append("imageData", imageURL);
                form.append("event_uid", props.sidData.event_uid);
                form.append("company_id", props.sidData.company_id);

                const options = {
                    method: "POST",
                };

                options.body = form;

                await fetch(
                    `${process.env.customKey}setDoneProjectSign`,
                    options
                )
                    .then((response) => response.json())
                    .then((response) => console.log(response))
                    .catch((err) => console.error(err));
            }
            router.push("/");
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
                <h3>????????????</h3>
                {props.completeData.status === false ? (
                    <div>{props.completeData.msg}</div>
                ) : (
                    <>
                        {props.completeData.data.length === 0 ? (
                            <div>????????????</div>
                        ) : (
                            <>
                                <div className={styles.signItem}>
                                    {props.completeData.data.map(
                                        (data, idx) => (
                                            <>
                                                <p key={idx + 1}>
                                                    ?????????
                                                    {data.application_form_id}
                                                </p>
                                                <table
                                                    key={
                                                        data.application_form_id
                                                    }
                                                >
                                                    <thead>
                                                        <tr
                                                            className={
                                                                styles.title
                                                            }
                                                        >
                                                            <th>??????</th>
                                                            <th>????????????</th>
                                                            <th>??????</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.hydro_items.items.map(
                                                            (item, idx) => (
                                                                <tr
                                                                    className={
                                                                        styles.content
                                                                    }
                                                                    key={
                                                                        idx + 1
                                                                    }
                                                                >
                                                                    <td>1</td>
                                                                    <td>
                                                                        ??????110V?????????
                                                                        - ??????
                                                                        110V 15A
                                                                        (1,500W)
                                                                    </td>
                                                                    <td>1</td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                                <hr
                                                    style={{
                                                        margin: "10px 0 15px 0",
                                                    }}
                                                />
                                            </>
                                        )
                                    )}
                                </div>
                                <div className={styles.sign}>
                                    <button
                                        className={styles.signBtn}
                                        onClick={() => setShow(true)}
                                    >
                                        ????????????
                                        <img
                                            src="/img/Vector.svg"
                                            width={25}
                                            height={21}
                                        />
                                    </button>
                                    <div className={styles.signImg}>
                                        {imageURL ? (
                                            <img src={imageURL} />
                                        ) : null}
                                    </div>
                                </div>
                                {show ? (
                                    <Popup close={close}>
                                        <div
                                            className={styles.signature}
                                            onClick={(e) => {
                                                // do not close modal if anything inside modal content is clicked
                                                e.stopPropagation();
                                            }}
                                        >
                                            <SignaturePad
                                                ref={sigCanvas}
                                                canvasProps={{
                                                    className:
                                                        "signatureCanvas",
                                                }}
                                            ></SignaturePad>
                                            <hr />
                                            <p>??????????????????</p>
                                            <div
                                                className={styles.signatureBtns}
                                            >
                                                <button
                                                    className={styles.buttons}
                                                    onClick={clear}
                                                >
                                                    ????????????
                                                </button>
                                                <button
                                                    className={styles.buttons}
                                                    onClick={save}
                                                >
                                                    ??????
                                                </button>
                                            </div>
                                        </div>
                                    </Popup>
                                ) : null}
                                <button
                                    className={styles.signCheck}
                                    onClick={handleSubmit}
                                >
                                    ??????
                                </button>
                            </>
                        )}
                    </>
                )}
            </Hero>
            <Footer />
        </div>
    );
}
