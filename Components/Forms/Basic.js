import { useState } from "react";
import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";
import { useTranslation } from "next-i18next";

export default function Basic({
    formStep,
    nextFormStep,
    stepOne,
    company,
    saveID,
    dataID,
    jump,
    sid,
}) {
    const { t } = useTranslation();
    const [number, setNumber] = useState();

    const temporary = async () => {
        const useDefault = document.getElementById("chooseDefault");
        let company = document.getElementById("company").value;
        let uniformNum = document.getElementById("uniformNum").value;
        let contactPerson = document.getElementById("contactPerson").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let remark = document.getElementById("remark").value;

        let baseOption = "";
        if (useDefault.checked) {
            baseOption = "Y";
        } else {
            baseOption = "N";
        }

        const options = {
            method: "POST",
            headers: {
                // cookie: "ci_session=2tuoeunna8cs9312goi03j36jam80pm2",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                proxy_company_name: company,
                proxy_tax_id: uniformNum,
                proxy_contact_person: contactPerson,
                proxy_email: email,
                proxy_phone: phone,
                base_option: baseOption,
                remark: remark,
                event_uid: sid.event_uid,
                company_id: sid.company_id,
            }),
        };
        await fetch(`${process.env.customKey}setApplyForm`, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                alert("success");
            })
            .catch((err) => console.error(err));
    };

    async function handleSubmit(data) {
        console.log(data);
        const useDefault = document.getElementById("chooseDefault");
        let remark = document.getElementById("remark").value;

        let baseOption = "";
        if (useDefault.checked) {
            baseOption = "Y";
            jump(true);
        } else {
            baseOption = "N";
            jump(false);
        }
        const options = {
            method: "POST",
            headers: {
                // cookie: "ci_session=2tuoeunna8cs9312goi03j36jam80pm2",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                proxy_company_name: data.company,
                proxy_tax_id: data.uniformNum,
                proxy_contact_person: data.contactPerson,
                proxy_email: data.email,
                proxy_phone: data.phone,
                base_option: baseOption,
                remark: remark,
                event_uid: sid.event_uid,
                company_id: sid.company_id,
            }),
        };
        if (baseOption === "N") {
            await fetch(`${process.env.customKey}setApplyForm`, options)
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    saveID(response.application_form_id);
                })
                .then(nextFormStep())
                .catch((err) => console.error(err));
        } else if (baseOption === "Y") {
            await fetch(`${process.env.customKey}setApplyForm`, options)
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    saveID(response.application_form_id);
                })
                .then(nextFormStep())
                .then(nextFormStep())
                .catch((err) => console.error(err));
        }
    }

    return (
        <div
            className={[
                styles.form,
                formStep === 0 ? styles.showForm : styles.hideForm,
            ].join(" ")}
        >
            <button className={styles.temporary} onClick={temporary}>
                {t("applyForm.stepper.save")}
            </button>
            <h2>{t("applyForm.stepOne.groupOne.title")}</h2>
            <div className={styles.companyGroupOne}>
                <div>
                    <p className={styles.title}>
                        {t("applyForm.stepOne.groupOne.companyName")}
                    </p>
                    <p className={styles.content}>
                        {company.company.company_name}
                    </p>
                </div>
                <div>
                    <p className={styles.title}>
                        {t("applyForm.stepOne.groupOne.boothNo")}
                    </p>
                    <p className={styles.content}>{company.company.booth_no}</p>
                </div>
                <div>
                    <p className={styles.title}>
                        {t("applyForm.stepOne.groupOne.quantityOfBooths")}
                    </p>
                    <p className={styles.content}>
                        {company.company.booth_cnt}
                    </p>
                </div>
                <div>
                    <p className={styles.title}>
                        {t("applyForm.stepOne.groupOne.contactPerson")}
                    </p>
                    <p className={styles.content}>
                        {company.company.contact_person}
                    </p>
                </div>
                <div>
                    <p className={styles.title}>
                        {t("applyForm.stepOne.groupOne.phone")}
                    </p>
                    <p className={styles.content}>{company.company.com_tel}</p>
                </div>
                <div>
                    <p className={styles.title}>
                        {t("applyForm.stepOne.groupOne.taxID")}
                    </p>
                    <p className={styles.content}>{company.company.tax_id}</p>
                </div>
            </div>
            <div className={styles.companyGroupTwo}>
                <div>
                    <p className={styles.title}>E-mail</p>
                    <p className={styles.content}>{company.company.email}</p>
                </div>
                <div>
                    <p className={styles.title}>
                        {t("applyForm.stepOne.groupOne.address")}
                    </p>
                    <p className={styles.content}>{company.company.address}</p>
                </div>
            </div>
            {stepOne.status === false ? (
                <Form onSubmit={handleSubmit}>
                    <h2>{t("applyForm.stepOne.groupTwo.title")}</h2>
                    <div className={styles.form}>
                        <div className={styles.formRow}>
                            <Input
                                name="company"
                                label={t(
                                    "applyForm.stepOne.groupTwo.companyName"
                                )}
                                type="text"
                                placeholder={t(
                                    "applyForm.stepOne.groupTwo.companyPlaceHolder"
                                )}
                                id="company"
                                maxLength={30}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="uniformNum"
                                label={t("applyForm.stepOne.groupTwo.taxID")}
                                type="text"
                                placeholder={t(
                                    "applyForm.stepOne.groupTwo.taxIdPlaceHolder"
                                )}
                                id="uniformNum"
                                maxLength={8}
                                value={number}
                                onChange={(e) =>
                                    setNumber(
                                        e.target.value.replace(/[^\d]/g, "")
                                    )
                                }
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="contactPerson"
                                label={t(
                                    "applyForm.stepOne.groupTwo.contactPerson"
                                )}
                                type="text"
                                placeholder={t(
                                    "applyForm.stepOne.groupTwo.contactPersonPlaceHolder"
                                )}
                                id="contactPerson"
                                maxLength={20}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="email"
                                label="E-mail"
                                type="email"
                                placeholder={t(
                                    "applyForm.stepOne.groupTwo.emailPlaceHolder"
                                )}
                                id="email"
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="phone"
                                label={t("applyForm.stepOne.groupTwo.phone")}
                                type="tel"
                                placeholder={t(
                                    "applyForm.stepOne.groupTwo.phonePlaceHolder"
                                )}
                                id="phone"
                                maxLength={20}
                            />
                        </div>
                    </div>
                    <div className={styles.applyDefault}>
                        <input
                            type="checkbox"
                            id="chooseDefault"
                            value="useDefault"
                        />
                        <label htmlFor="chooseDefault">
                            {t("applyForm.stepTwo.useDefault")}
                        </label>
                    </div>
                    <div className={styles.form}>
                        <div
                            className={[styles.formRow, styles.prepare].join(
                                " "
                            )}
                        >
                            <label htmlFor="prepare">
                                {t("applyForm.stepOne.groupThree.remark")}
                            </label>
                            <textarea id="remark" maxLength={200}></textarea>
                        </div>
                    </div>

                    <button type="submit" className={styles.firstNext}>
                        {t("applyForm.stepper.next")}
                    </button>
                </Form>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <h2>{t("applyForm.stepOne.groupTwo.title")}</h2>
                    <div className={styles.form}>
                        <div className={styles.formRow}>
                            <Input
                                name="company"
                                label={t(
                                    "applyForm.stepOne.groupTwo.companyName"
                                )}
                                type="text"
                                placeholder={t(
                                    "applyForm.stepOne.groupTwo.companyPlaceHolder"
                                )}
                                id="company"
                                defaultValue={stepOne.data.proxy_company_name}
                                maxLength={30}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="uniformNum"
                                label={t("applyForm.stepOne.groupTwo.taxID")}
                                type="text"
                                placeholder={t(
                                    "applyForm.stepOne.groupTwo.taxIdPlaceHolder"
                                )}
                                id="uniformNum"
                                defaultValue={stepOne.data.proxy_tax_id}
                                maxLength={8}
                                value={number}
                                onChange={(e) =>
                                    setNumber(
                                        e.target.value.replace(/[^\d]/g, "")
                                    )
                                }
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="contactPerson"
                                label={t(
                                    "applyForm.stepOne.groupTwo.contactPerson"
                                )}
                                type="text"
                                placeholder={t(
                                    "applyForm.stepOne.groupTwo.contactPersonPlaceHolder"
                                )}
                                id="contactPerson"
                                defaultValue={stepOne.data.proxy_contact_person}
                                maxLength={20}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="email"
                                label="E-mail"
                                type="email"
                                placeholder={t(
                                    "applyForm.stepOne.groupTwo.emailPlaceHolder"
                                )}
                                id="email"
                                defaultValue={stepOne.data.proxy_email}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="phone"
                                label={t("applyForm.stepOne.groupTwo.phone")}
                                type="tel"
                                placeholder={t(
                                    "applyForm.stepOne.groupTwo.phonePlaceHolder"
                                )}
                                id="phone"
                                defaultValue={stepOne.data.proxy_phone}
                                maxLength={20}
                            />
                        </div>
                    </div>
                    {/* <h2>{t("applyForm.stepOne.groupThree.title")}</h2> */}
                    {stepOne.data.base_option === "Y" ? (
                        <div className={styles.applyDefault}>
                            <input
                                type="checkbox"
                                id="chooseDefault"
                                value="useDefault"
                                defaultChecked
                            />
                            <label htmlFor="chooseDefault">
                                {t("applyForm.stepTwo.useDefault")}
                            </label>
                        </div>
                    ) : (
                        <div className={styles.applyDefault}>
                            <input
                                type="checkbox"
                                id="chooseDefault"
                                value="useDefault"
                            />
                            <label htmlFor="chooseDefault">
                                {t("applyForm.stepTwo.useDefault")}
                            </label>
                        </div>
                    )}
                    <div className={styles.form}>
                        {/* {stepOne.data.invoice_title === "1" ? (
                            <div className={styles.addressGroup}>
                                <div>
                                    <label htmlFor="company_address">
                                        {t(
                                            "applyForm.stepOne.groupThree.asTheExhibitor"
                                        )}
                                        <input
                                            type="radio"
                                            id="company_address"
                                            name="drone"
                                            value="1"
                                            defaultChecked
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="agent_address">
                                        {t(
                                            "applyForm.stepOne.groupThree.asTheAgent"
                                        )}
                                        <input
                                            type="radio"
                                            id="agent_address"
                                            name="drone"
                                            value="2"
                                        />
                                    </label>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.addressGroup}>
                                <div>
                                    <label htmlFor="company_address">
                                        {t(
                                            "applyForm.stepOne.groupThree.asTheExhibitor"
                                        )}
                                        <input
                                            type="radio"
                                            id="company_address"
                                            name="drone"
                                            value="1"
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="agent_address">
                                        {t(
                                            "applyForm.stepOne.groupThree.asTheAgent"
                                        )}
                                        <input
                                            type="radio"
                                            id="agent_address"
                                            name="drone"
                                            value="2"
                                            defaultChecked
                                        />
                                    </label>
                                </div>
                            </div>
                        )}

                        <div
                            className={[styles.formRow, styles.address].join(
                                " "
                            )}
                        >
                            <Input
                                name="address"
                                label={t(
                                    "applyForm.stepOne.groupThree.invoiceAddress"
                                )}
                                type="text"
                                placeholder={t(
                                    "applyForm.stepOne.groupThree.invoicePlaceHolder"
                                )}
                                id="address"
                                defaultValue={stepOne.data.invoice_address}
                            />
                        </div> */}
                        <div
                            className={[styles.formRow, styles.prepare].join(
                                " "
                            )}
                        >
                            <label htmlFor="prepare">
                                {t("applyForm.stepOne.groupThree.remark")}
                            </label>
                            <textarea
                                id="remark"
                                defaultValue={stepOne.data.remark}
                                maxLength={200}
                            ></textarea>
                        </div>
                    </div>

                    <button type="submit" className={styles.firstNext}>
                        {t("applyForm.stepper.next")}
                    </button>
                </Form>
            )}
        </div>
    );
}
