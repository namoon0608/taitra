import { useState } from "react";
import Head from "next/head";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import styles from "../styles/Home.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import FormCard from "../Components/Stepper/FormCard";
import Basic from "../Components/Forms/Basic";
import Choose from "../Components/Forms/Choose";
import Write from "../Components/Forms/Write";
import Preview from "../Components/Forms/Preview";
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
            cookie: "ci_session=tm7raoegfru3cidh8r88ljnovjura42a",
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

    //get step two價目表
    const getPriceTable = await fetch(
        `${process.env.API_BASE_URL}getPriceTableByGrop`,
        options
    );
    const priceData = await getPriceTable.json();

    //get參展商基本資料
    const company = {
        method: "POST",
        headers: {
            cookie: "ci_session=pp0k1v3sfrngvhrs9ait3hnqrbtmvssi",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            lang: locale,
            event_uid: sidData.event_uid,
            company_id: sidData.company_id,
        }),
    };
    const companyRes = await fetch(
        `${process.env.API_BASE_URL}getExhibitorCompany`,
        company
    ).then((response) => response.json());

    const steps = {
        method: "POST",
        headers: {
            cookie: "ci_session=0sbjsvc6inuum4mm7h9tchklraa67mtt",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            lang: locale,
            application_form_id: companyRes.savadata,
            event_uid: sidData.event_uid,
            company_id: sidData.company_id,
        }),
    };

    //step one
    const stepOneRes = await fetch(
        `${process.env.API_BASE_URL}getDraftDataStep1`,
        steps
    ).then((response) => response.json());

    //step two
    const stepTwoRes = await fetch(
        `${process.env.API_BASE_URL}getApplyHydroItems`,
        steps
    ).then((response) => response.json());

    //step three
    const stepThreeRes = await fetch(
        `${process.env.API_BASE_URL}getApplyDiagram`,
        steps
    ).then((response) => response.json());

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            info: infoData,
            priceData: priceData,
            company: companyRes,
            stepOne: stepOneRes,
            stepTwo: stepTwoRes,
            stepThree: stepThreeRes,
            sidData: sidData,
        },
    };
}

export default function Apply(props) {
    const { t } = useTranslation();
    const [formStep, setFormStep] = useState(0);
    const [savadata, setSavaData] = useState(props.company.savadata);
    const [useDefaultChecked, setUseDefaultChecked] = useState(false);

    const saveID = (item) => setSavaData(item);

    const jumpOverStepTwo = (item) => setUseDefaultChecked(item);

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

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
                <FormCard
                    currentStep={formStep}
                    prevFormStep={prevFormStep}
                    useDefaultChecked={useDefaultChecked}
                >
                    <Basic
                        formStep={formStep}
                        nextFormStep={nextFormStep}
                        stepOne={props.stepOne}
                        company={props.company}
                        saveID={saveID}
                        dataID={savadata}
                        jump={jumpOverStepTwo}
                        sid={props.sidData}
                    />
                    <Choose
                        formStep={formStep}
                        nextFormStep={nextFormStep}
                        priceData={props.priceData}
                        stepTwo={props.stepTwo}
                        dataID={savadata}
                        sid={props.sidData}
                    />
                    <Write
                        formStep={formStep}
                        nextFormStep={nextFormStep}
                        stepThree={props.stepThree}
                        dataID={savadata}
                        sid={props.sidData}
                    />
                    {formStep > 2 && (
                        <Preview
                            applicatonId={props.company.savadata}
                            dataID={savadata}
                            sid={props.sidData}
                        />
                    )}
                </FormCard>
            </Hero>
            <Footer />
        </div>
    );
}
