import Head from "next/head";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import styles from "../styles/Home.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}

export default function Contact(props) {
    const { t } = useTranslation();
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
            <Hero>
                <h3>聯絡資訊</h3>
                <div className={styles.contact}>
                    <p>外貿協會南港展覽館2館 </p>
                    <p>水電申請單位 </p>
                    <p>電話：(02)2725-5200 分機5569 </p>
                    <p>地址：台北市115南港區經貿二路1號6樓 </p>
                </div>
            </Hero>
            <Footer />
        </div>
    );
}
