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

export async function getServerSideProps({ locale }) {
    const options = {
        method: "POST",
        headers: {
            cookie: "ci_session=tm7raoegfru3cidh8r88ljnovjura42a",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            lang: locale,
            sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
        }),
    };
    const res = await fetch(
        `${process.env.API_BASE_URL}getDiscountInfo`,
        options
    );
    const infoData = await res.json();

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
            sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
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
            // application_form_id: companyRes.savadata,
            application_form_id: "6305a2e49bdbf001",
            sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
        }),
    };

    //step one
    const stepOneRes = await fetch(
        `${process.env.API_BASE_URL}getDraftDataStep1`,
        steps
    ).then((response) => response.json());
    console.log(stepOneRes);

    //step two
    const stepTwoRes = await fetch(
        `${process.env.API_BASE_URL}getApplyHydroItems`,
        steps
    ).then((response) => response.json());
    console.log(stepTwoRes);

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            info: infoData,
            priceData: priceData,
            company: companyRes,
            stepOne: stepOneRes,
            stepTwo: stepTwoRes,
        },
    };
}

export default function Apply(props) {
    const { t } = useTranslation();
    const [formStep, setFormStep] = useState(0);

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
                <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
                    {formStep >= 0 && (
                        <Basic
                            formStep={formStep}
                            nextFormStep={nextFormStep}
                            stepOne={props.stepOne}
                            company={props.company}
                        />
                    )}
                    {formStep >= 1 && (
                        <Choose
                            formStep={formStep}
                            nextFormStep={nextFormStep}
                            priceData={props.priceData}
                            stepTwo={props.stepTwo}
                        />
                    )}
                    {formStep >= 2 && (
                        <Write
                            formStep={formStep}
                            nextFormStep={nextFormStep}
                        />
                    )}

                    {formStep > 2 && <Preview />}
                </FormCard>
            </Hero>
            <Footer />
        </div>
    );
}
