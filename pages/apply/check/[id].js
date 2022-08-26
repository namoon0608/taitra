import Head from "next/head";
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";
import Hero from "../../../Components/Hero";
import styles from "../../../styles/Apply.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getServerSideProps({ locale }) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ lang: locale, show_id: "FD" }),
    };
    const infoRes = await fetch(
        `${process.env.API_BASE_URL}getDiscountInfo`,
        options
    );
    const infoData = await infoRes.json();

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            info: infoData,
        },
    };
}

export default function Search(props) {
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
            <Hero info={props.info}>
                <h3>檢示水電申請內容</h3>
                <div className={styles.checkForm}>
                    <h2>大會水電公司審核意見</h2>
                    <p className={styles.opinionBox}>未標示電箱位置</p>
                    <h2>代理或裝潢公司基本資料</h2>
                    <div className={styles.formComplete}>
                        <div className={styles.formRow}>
                            <label>公司名稱</label>
                            <p>丰彤設計有限公司</p>
                        </div>
                        <div className={styles.formRow}>
                            <label>統一編號</label>
                            <p>12653758</p>
                        </div>
                        <div className={styles.formRow}>
                            <label>聯絡人</label>
                            <p>張書源</p>
                        </div>
                        <div className={styles.formRow}>
                            <label>聯絡電話</label>
                            <p>02-28962689 分機 221</p>
                        </div>
                        <div className={styles.formRow}>
                            <label>E-mail</label>
                            <p>1fontal1999@gmail.com</p>
                        </div>
                    </div>
                    <h2>開立發票資訊</h2>
                    <div className={styles.formCompleteInvoce}>
                        <div className={styles.formRow}>
                            <label>公司名稱</label>
                            <p>尚立資訊有限公司</p>
                        </div>
                        <div className={styles.formRow}>
                            <label>統一編號</label>
                            <p>83465356</p>
                        </div>
                        <div className={styles.formRow}>
                            <label>發票寄送地址</label>
                            <p>台北市南京東路四段1號2樓</p>
                        </div>
                        <div className={styles.formRow}>
                            <label>備註：</label>
                            <p></p>
                        </div>
                    </div>
                    <h2>水電追加申請項目</h2>
                    <div className={styles.applyItem}>
                        <table>
                            <thead>
                                <tr className={styles.title}>
                                    <th>項次</th>
                                    <th>申請項目</th>
                                    <th>數量</th>
                                    <th>單價</th>
                                    <th>複價</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.content}>
                                    <td>1</td>
                                    <td>
                                        用電110V電源箱 - 單相 110V 15A (1,500W)
                                    </td>
                                    <td>1</td>
                                    <td>1,950</td>
                                    <td>1,950</td>
                                </tr>
                                <tr className={styles.content}>
                                    <td>2</td>
                                    <td>
                                        用電110V電源箱 - 單相 110V 15A (1,500W)
                                    </td>
                                    <td>1</td>
                                    <td>1,950</td>
                                    <td>1,950</td>
                                </tr>
                                <tr className={styles.content}>
                                    <td>3</td>
                                    <td>
                                        用電110V電源箱 - 單相 110V 15A (1,500W)
                                    </td>
                                    <td>1</td>
                                    <td>1,950</td>
                                    <td>1,950</td>
                                </tr>
                                <tr className={styles.content}>
                                    <td>4</td>
                                    <td>
                                        用電110V電源箱 - 單相 110V 15A (1,500W)
                                    </td>
                                    <td>1</td>
                                    <td>1,950</td>
                                    <td>1,950</td>
                                </tr>
                                <tr className={styles.sum}>
                                    <td className={styles.sumTitle} colSpan={4}>
                                        合計總金額
                                    </td>
                                    <td>20,439</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2>水電配置圖</h2>
                    <div className={styles.image}>
                        <p>
                            檔案 <span>JO318水電圖圖.jpg</span>
                        </p>
                        <img src="/img/image14.png" />
                    </div>
                </div>
            </Hero>
            <Footer />
        </div>
    );
}