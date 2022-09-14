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
    sid,
}) {
    const { t } = useTranslation();
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    async function initProducts() {
        // console.log(dataID);
        // console.log(sid);
        const options = {
            method: "POST",
            headers: {
                // cookie: "ci_session=8v7iclm76gcb6fsic32lodnk29j11j6b",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                lang: router.locale,
                application_form_id: dataID,
                company_id: sid.company_id,
                event_uid: sid.event_uid,
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
                event_uid: sid.event_uid,
                company_id: sid.company_id,
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
                <h2>{t("applyForm.stepOne.staffOnSite")}</h2>
                <div className={styles.formComplete}>
                    <div className={styles.formRow}>
                        <label>
                            {t("applyForm.preview.groupOne.companyName")}
                        </label>
                        <p>{data.onsite.onsite_company_name}</p>
                    </div>
                    {/* <div className={styles.formRow}>
                        <label>{t("applyForm.preview.groupOne.taxID")}</label>
                        <p>{data.proxy.proxy_tax_id}</p>
                    </div> */}
                    <div className={styles.formRow}>
                        <label>
                            {t("applyForm.preview.groupOne.contactPerson")}
                        </label>
                        <p>{data.onsite.onsite_contact_person}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>{t("applyForm.preview.groupOne.phone")}</label>
                        <p>{data.onsite.onsite_contact_phone}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>E-mail</label>
                        <p>{data.onsite.onsite_contact_email}</p>
                    </div>
                </div>
                {data.hydro_items.base_option === "Y" ? null : (
                    <>
                        {data.invoice_check === "0" ? null : (
                            <>
                                <h2>{t("applyForm.preview.groupTwo.title")}</h2>
                                <div className={styles.formCompleteInvoce}>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupTwo.companyName"
                                            )}
                                        </label>
                                        <p>{data.invoice.invoice_comapny}</p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupTwo.taxID"
                                            )}
                                        </label>
                                        <p>{data.invoice.invoice_taxid}</p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {" "}
                                            {t(
                                                "applyForm.preview.groupTwo.invoiceAddress"
                                            )}
                                        </label>
                                        <p>{data.invoice.invoice_address}</p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {" "}
                                            {t(
                                                "applyForm.preview.groupTwo.remark"
                                            )}
                                            ：
                                        </label>
                                        <p>{data.invoice.remark}</p>
                                    </div>
                                </div>
                                <h2>{t("applyForm.stepOne.groupTwo.title")}</h2>
                                <div className={styles.formComplete}>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupOne.companyName"
                                            )}
                                        </label>
                                        <p>{data.proxy.proxy_company_name}</p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupOne.taxID"
                                            )}
                                        </label>
                                        <p>{data.proxy.proxy_tax_id}</p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupOne.contactPerson"
                                            )}
                                        </label>
                                        <p>{data.proxy.proxy_contact_person}</p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>
                                            {t(
                                                "applyForm.preview.groupOne.phone"
                                            )}
                                        </label>
                                        <p>{data.proxy.proxy_phone}</p>
                                    </div>
                                    <div className={styles.formRow}>
                                        <label>E-mail</label>
                                        <p>{data.proxy.proxy_email}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
                <h2>{t("applyForm.preview.groupThree.title")}</h2>
                {data.hydro_items.base_option === "Y" ? (
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
                                            <td
                                                style={{
                                                    textAlign: "left",
                                                    paddingLeft: "15px",
                                                }}
                                            >
                                                {item.name}
                                            </td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                            <td>{item.sum}</td>
                                        </tr>
                                    </>
                                ))}
                                <tr className={styles.sum}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className={styles.sumTitle}>
                                        {t(
                                            "applyForm.preview.groupThree.total"
                                        )}
                                    </td>
                                    <td>{data.hydro_items.total_sum}</td>
                                </tr>
                                {data.discount.discount_value !== "" ? (
                                    <>
                                        <tr className={styles.sum}>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className={styles.sumTitle}>
                                                {data.discount.discount_type}
                                            </td>
                                            <td>
                                                {data.discount.discount_price}
                                            </td>
                                        </tr>
                                        <tr className={styles.sum}>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className={styles.sumTitle}>
                                                總價
                                            </td>
                                            <td>{data.discount.finally_sum}</td>
                                        </tr>
                                    </>
                                ) : null}
                            </tbody>
                        </table>
                    </div>
                )}
                <h2>{t("applyForm.preview.groupFour.title")}</h2>
                {data.imageData_file === "Y" ? (
                    <div>{t("applyForm.preview.groupFour.pending")}</div>
                ) : (
                    <div className={styles.image}>
                        <p>
                            {t("applyForm.preview.groupFour.file")}{" "}
                            <span>{data.imageData_filename}</span>
                        </p>
                        <img src={process.env.imgKey + data.imageData_file} />
                    </div>
                )}
                <button type="submit" className={styles.complete}>
                    {t("applyForm.stepper.send")}
                </button>
            </Form>
        </div>
    );
}
