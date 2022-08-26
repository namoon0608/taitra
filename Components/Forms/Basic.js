import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";

export default function Basic({ formStep, nextFormStep, stepOne, company }) {
    const temporary = async () => {
        let company = document.getElementById("company").value;
        let uniformNum = document.getElementById("uniformNum").value;
        let contactPerson = document.getElementById("contactPerson").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let invoice = "";
        let address = document.getElementById("address").value;
        let remark = document.getElementById("remark").value;
        const radios = document.querySelectorAll('input[name="drone"]');
        for (let radio of radios) {
            if (radio.checked) {
                invoice = radio.value;
            }
        }

        const options = {
            method: "POST",
            headers: {
                cookie: "ci_session=2tuoeunna8cs9312goi03j36jam80pm2",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                application_form_id: "",
                proxy_company_name: company,
                proxy_tax_id: uniformNum,
                proxy_contact_person: contactPerson,
                proxy_email: email,
                proxy_phone: phone,
                invoice: invoice,
                invoice_address: address,
                remark: remark,
                sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
            }),
        };
        await fetch(`${process.env.customKey}setApplyForm`, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                alert(response.msg);
            })
            .catch((err) => console.error(err));
    };

    async function handleSubmit(data) {
        let remark = document.getElementById("remark").value;
        let invoice = "";
        const radios = document.querySelectorAll('input[name="drone"]');
        for (let radio of radios) {
            if (radio.checked) {
                invoice = radio.value;
            }
        }

        const options = {
            method: "POST",
            headers: {
                cookie: "ci_session=2tuoeunna8cs9312goi03j36jam80pm2",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                application_form_id: "",
                proxy_company_name: data.compnay,
                proxy_tax_id: data.uniformNum,
                proxy_contact_person: data.contactPerson,
                proxy_email: data.email,
                proxy_phone: data.phone,
                invoice: invoice,
                invoice_address: data.address,
                remark: remark,
                sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
            }),
        };
        await fetch(`${process.env.customKey}setApplyForm`, options)
            .then((response) => response.json())
            .then((response) => console.log(response))
            .then(nextFormStep())
            .catch((err) => console.error(err));
    }

    return (
        <div
            className={[
                styles.form,
                formStep === 0 ? styles.showForm : styles.hideForm,
            ].join(" ")}
        >
            <button className={styles.temporary} onClick={temporary}>
                暫存
            </button>
            <h2>參展廠商基本資料</h2>
            <div className={styles.companyGroupOne}>
                <div>
                    <p className={styles.title}>攤位名稱</p>
                    <p className={styles.content}>
                        {company.company.company_name}
                    </p>
                </div>
                <div>
                    <p className={styles.title}>攤位號碼</p>
                    <p className={styles.content}>{company.company.booth_no}</p>
                </div>
                <div>
                    <p className={styles.title}>攤位數量</p>
                    <p className={styles.content}>
                        {company.company.booth_cnt} 個
                    </p>
                </div>
                <div>
                    <p className={styles.title}>聯絡人</p>
                    <p className={styles.content}>
                        {company.company.contact_person}
                    </p>
                </div>
                <div>
                    <p className={styles.title}>聯絡電話</p>
                    <p className={styles.content}>{company.company.com_tel}</p>
                </div>
                <div>
                    <p className={styles.title}>統一編號</p>
                    <p className={styles.content}>{company.company.tax_id}</p>
                </div>
            </div>
            <div className={styles.companyGroupTwo}>
                <div>
                    <p className={styles.title}>E-mail</p>
                    <p className={styles.content}>{company.company.email}</p>
                </div>
                <div>
                    <p className={styles.title}>地址</p>
                    <p className={styles.content}>{company.company.address}</p>
                </div>
            </div>
            {stepOne.status === false ? (
                <Form onSubmit={handleSubmit}>
                    <h2>代理或裝潢公司基本資料</h2>
                    <div className={styles.form}>
                        <div className={styles.formRow}>
                            <Input
                                name="company"
                                label="公司名稱"
                                type="text"
                                placeholder="請輸入公司名稱"
                                id="company"
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="uniformNum"
                                label="統一編號"
                                type="text"
                                placeholder="請輸入統一編號"
                                id="uniformNum"
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="contactPerson"
                                label="聯絡人"
                                type="text"
                                placeholder="請輸入聯絡人姓名"
                                id="contactPerson"
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="email"
                                label="E-mail"
                                type="email"
                                placeholder="請輸入電子郵件"
                                id="email"
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="phone"
                                label="聯絡電話"
                                type="tel"
                                placeholder="請輸入聯絡電話"
                                id="phone"
                            />
                        </div>
                    </div>
                    <h2>開立發票資訊</h2>
                    <div className={styles.form}>
                        <div className={styles.addressGroup}>
                            <div>
                                <label htmlFor="company_address">
                                    同參展廠商
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
                                    同代理或裝潢公司
                                    <input
                                        type="radio"
                                        id="agent_address"
                                        name="drone"
                                        value="2"
                                    />
                                </label>
                            </div>
                        </div>
                        <div
                            className={[styles.formRow, styles.address].join(
                                " "
                            )}
                        >
                            <Input
                                name="address"
                                label="發票寄送地址"
                                type="text"
                                placeholder="請輸入發票寄送地址"
                                id="address"
                            />
                        </div>
                        <div
                            className={[styles.formRow, styles.prepare].join(
                                " "
                            )}
                        >
                            <label htmlFor="prepare">備註</label>
                            <textarea id="remark"></textarea>
                        </div>
                    </div>

                    <button type="submit" className={styles.firstNext}>
                        下一步
                    </button>
                </Form>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <h2>代理或裝潢公司基本資料</h2>
                    <div className={styles.form}>
                        <div className={styles.formRow}>
                            <Input
                                name="company"
                                label="公司名稱"
                                type="text"
                                placeholder="請輸入公司名稱"
                                id="company"
                                defaultValue={stepOne.data.proxy_company_name}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="uniformNum"
                                label="統一編號"
                                type="text"
                                placeholder="請輸入統一編號"
                                id="uniformNum"
                                defaultValue={stepOne.data.proxy_tax_id}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="contactPerson"
                                label="聯絡人"
                                type="text"
                                placeholder="請輸入聯絡人姓名"
                                id="contactPerson"
                                defaultValue={stepOne.data.proxy_contact_person}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="email"
                                label="E-mail"
                                type="email"
                                placeholder="請輸入電子郵件"
                                id="email"
                                defaultValue={stepOne.data.proxy_email}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="phone"
                                label="聯絡電話"
                                type="tel"
                                placeholder="請輸入聯絡電話"
                                id="phone"
                                defaultValue={stepOne.data.proxy_phone}
                            />
                        </div>
                    </div>
                    <h2>開立發票資訊</h2>
                    <div className={styles.form}>
                        {stepOne.data.invoice_title === "1" ? (
                            <div className={styles.addressGroup}>
                                <div>
                                    <label htmlFor="company_address">
                                        同參展廠商
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
                                        同代理或裝潢公司
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
                                        同參展廠商
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
                                        同代理或裝潢公司
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
                                label="發票寄送地址"
                                type="text"
                                placeholder="請輸入發票寄送地址"
                                id="address"
                                defaultValue={stepOne.data.invoice_address}
                            />
                        </div>
                        <div
                            className={[styles.formRow, styles.prepare].join(
                                " "
                            )}
                        >
                            <label htmlFor="prepare">備註</label>
                            <textarea
                                id="remark"
                                defaultValue={stepOne.data.remark}
                            ></textarea>
                        </div>
                    </div>

                    <button type="submit" className={styles.firstNext}>
                        下一步
                    </button>
                </Form>
            )}
            {/* <Form onSubmit={handleSubmit}>
                <h2>代理或裝潢公司基本資料</h2>
                <div className={styles.form}>
                    <div className={styles.formRow}>
                        <Input
                            name="company"
                            label="公司名稱"
                            type="text"
                            placeholder="請輸入公司名稱"
                            id="company"
                            
                        />
                    </div>
                    <div className={styles.formRow}>
                        <Input
                            name="uniformNum"
                            label="統一編號"
                            type="text"
                            placeholder="請輸入統一編號"
                            id="uniformNum"
                            
                        />
                    </div>
                    <div className={styles.formRow}>
                        <Input
                            name="contactPerson"
                            label="聯絡人"
                            type="text"
                            placeholder="請輸入聯絡人姓名"
                            id="contactPerson"
                            
                        />
                    </div>
                    <div className={styles.formRow}>
                        <Input
                            name="email"
                            label="E-mail"
                            type="email"
                            placeholder="請輸入電子郵件"
                            id="email"
                            
                        />
                    </div>
                    <div className={styles.formRow}>
                        <Input
                            name="phone"
                            label="聯絡電話"
                            type="tel"
                            placeholder="請輸入聯絡電話"
                            id="phone"
                            
                        />
                    </div>
                </div>
                <h2>開立發票資訊</h2>
                <div className={styles.form}>
                    <div className={styles.addressGroup}>
                        <div>
                            <label htmlFor="company_address">
                                同參展廠商
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
                                同代理或裝潢公司
                                <input
                                    type="radio"
                                    id="agent_address"
                                    name="drone"
                                    value="2"
                                />
                            </label>
                        </div>
                    </div>
                    <div className={[styles.formRow, styles.address].join(" ")}>
                        <Input
                            name="address"
                            label="發票寄送地址"
                            type="text"
                            placeholder="請輸入發票寄送地址"
                            id="address"
                            
                        />
                    </div>
                    <div className={[styles.formRow, styles.prepare].join(" ")}>
                        <label htmlFor="prepare">備註</label>
                        <textarea id="remark"></textarea>
                    </div>
                </div>

                <button type="submit" className={styles.firstNext}>
                    下一步
                </button>
            </Form> */}
        </div>
    );
}
