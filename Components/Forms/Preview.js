import { useState, useEffect } from "react";
import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Preview({
    formStep,
    nextFormStep,
    applicatonId,
    dataID,
}) {
    const { t } = useTranslation();
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    async function initProducts() {
        const options = {
            method: "POST",
            headers: {
                // cookie: "ci_session=8v7iclm76gcb6fsic32lodnk29j11j6b",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                lang: router.locale,
                application_form_id: dataID,
                sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
            }),
        };
        setLoading(true);
        await fetch(`${process.env.customKey}getPreview`, options)
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                console.log(response);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }
    useEffect(() => {
        initProducts();
    }, []);

    async function handleSubmit() {
        const options = {
            method: "POST",
            headers: {
                // cookie: "ci_session=b49bmqbdckrr8bpfre3h8ncme6nohol9",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
            }),
        };
        await fetch(`${process.env.customKey}sumbitApply`, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                alert("success");
                router.push("/");
            })
            .catch((err) => console.error(err));
    }

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;
    return (
        <div className={styles.form}>
            <button className={styles.temporary} style={{ display: "none" }}>
                {t("applyForm.stepper.save")}
            </button>
            <Form onSubmit={handleSubmit}>
                <h2>{t("applyForm.preview.groupOne.title")}</h2>
                <div className={styles.formComplete}>
                    <div className={styles.formRow}>
                        <label>
                            {t("applyForm.preview.groupOne.companyName")}
                        </label>
                        <p>{data.proxy.proxy_company_name}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>{t("applyForm.preview.groupOne.taxID")}</label>
                        <p>{data.proxy.proxy_tax_id}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>
                            {t("applyForm.preview.groupOne.contactPerson")}
                        </label>
                        <p>{data.proxy.proxy_contact_person}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>{t("applyForm.preview.groupOne.phone")}</label>
                        <p>{data.proxy.proxy_phone}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>E-mail</label>
                        <p>{data.proxy.proxy_email}</p>
                    </div>
                </div>
                <h2>{t("applyForm.preview.groupTwo.title")}</h2>
                <div className={styles.formCompleteInvoce}>
                    <div className={styles.formRow}>
                        <label>
                            {t("applyForm.preview.groupTwo.companyName")}
                        </label>
                        <p>{data.invoice.invoice_company}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>{t("applyForm.preview.groupTwo.taxID")}</label>
                        <p>{data.invoice.invoice_taxid}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>
                            {" "}
                            {t("applyForm.preview.groupTwo.invoiceAddress")}
                        </label>
                        <p>{data.invoice.invoice_address}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>
                            {" "}
                            {t("applyForm.preview.groupTwo.remark")}：
                        </label>
                        <p>{data.invoice.remark}</p>
                    </div>
                </div>
                <h2>{t("applyForm.preview.groupThree.title")}</h2>
                {data.hydro_items.items.length === 0 ? (
                    <div>{t("applyForm.preview.groupThree.useDefault")}</div>
                ) : (
                    <div className={styles.applyItem}>
                        <table>
                            <thead>
                                <tr className={styles.title}>
                                    <th>
                                        {t("applyForm.preview.groupThree.no")}
                                    </th>
                                    <th>
                                        {t("applyForm.preview.groupThree.item")}
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
                                {data.hydro_items.items.map((item) => (
                                    <>
                                        <tr
                                            className={styles.content}
                                            key={item.index}
                                        >
                                            <td>{item.index}</td>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                            <td>{item.sum}</td>
                                        </tr>
                                    </>
                                ))}
                                <tr className={styles.sum}>
                                    <td className={styles.sumTitle} colSpan={4}>
                                        {t(
                                            "applyForm.preview.groupThree.total"
                                        )}
                                    </td>
                                    <td>{data.hydro_items.total_sum}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                <h2>{t("applyForm.preview.groupFour.title")}</h2>
                {data.imageData_file === "" ? (
                    <div>{t("applyForm.preview.groupFour.pending")}</div>
                ) : (
                    <div className={styles.image}>
                        <p>
                            {t("applyForm.preview.groupFour.file")}{" "}
                            <span>JO318水電圖圖.jpg</span>
                        </p>
                        <img src={data.imageData_file} />
                    </div>
                )}
                <button type="submit" className={styles.complete}>
                    {t("applyForm.stepper.send")}
                </button>
            </Form>
            {/* <Form onSubmit={handleSubmit}>
                <h2>{t("applyForm.preview.groupOne.title")}</h2>
                <div className={styles.formComplete}>
                    <div className={styles.formRow}>
                        <label>
                            {t("applyForm.preview.groupOne.companyName")}
                        </label>
                        <p>丰彤設計有限公司</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>{t("applyForm.preview.groupOne.taxID")}</label>
                        <p>12653758</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>
                            {t("applyForm.preview.groupOne.contactPerson")}
                        </label>
                        <p>張書源</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>{t("applyForm.preview.groupOne.phone")}</label>
                        <p>02-28962689 分機 221</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>E-mail</label>
                        <p>1fontal1999@gmail.com</p>
                    </div>
                </div>
                <h2>{t("applyForm.preview.groupTwo.title")}</h2>
                <div className={styles.formCompleteInvoce}>
                    <div className={styles.formRow}>
                        <label>
                            {t("applyForm.preview.groupTwo.companyName")}
                        </label>
                        <p>尚立資訊有限公司</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>{t("applyForm.preview.groupTwo.taxID")}</label>
                        <p>83465356</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>
                            {t("applyForm.preview.groupTwo.invoiceAddress")}
                        </label>
                        <p>台北市南京東路四段1號2樓</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>
                            {t("applyForm.preview.groupTwo.remark")}：
                        </label>
                        <p></p>
                    </div>
                </div>
                <h2>{t("applyForm.preview.groupThree.title")}</h2>
                <div className={styles.applyItem}>
                    <table>
                        <thead>
                            <tr className={styles.title}>
                                <th>{t("applyForm.preview.groupThree.no")}</th>
                                <th>
                                    {t("applyForm.preview.groupThree.item")}
                                </th>
                                <th>
                                    {t("applyForm.preview.groupThree.quantity")}
                                </th>
                                <th>
                                    {t(
                                        "applyForm.preview.groupThree.unitPrice"
                                    )}
                                </th>
                                <th>
                                    {t("applyForm.preview.groupThree.itemCost")}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.content}>
                                <td>1</td>
                                <td>用電110V電源箱 - 單相 110V 15A (1,500W)</td>
                                <td>1</td>
                                <td>1,950</td>
                                <td>1,950</td>
                            </tr>
                            <tr className={styles.content}>
                                <td>2</td>
                                <td>用電110V電源箱 - 單相 110V 15A (1,500W)</td>
                                <td>1</td>
                                <td>1,950</td>
                                <td>1,950</td>
                            </tr>
                            <tr className={styles.content}>
                                <td>3</td>
                                <td>用電110V電源箱 - 單相 110V 15A (1,500W)</td>
                                <td>1</td>
                                <td>1,950</td>
                                <td>1,950</td>
                            </tr>
                            <tr className={styles.content}>
                                <td>4</td>
                                <td>用電110V電源箱 - 單相 110V 15A (1,500W)</td>
                                <td>1</td>
                                <td>1,950</td>
                                <td>1,950</td>
                            </tr>
                            <tr className={styles.sum}>
                                <td className={styles.sumTitle} colSpan={4}>
                                    {t("applyForm.preview.groupThree.total")}
                                </td>
                                <td>20,439</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>{t("applyForm.preview.groupFour.title")}</h2>
                <p>
                    {t("applyForm.preview.groupFour.file")}{" "}
                    <span>JO318水電圖圖.jpg</span>
                </p>
                <img src="/img/image14.png" />
                <button type="submit" className={styles.complete}>
                    {t("applyForm.stepper.send")}
                </button>
            </Form> */}
        </div>
    );
}
