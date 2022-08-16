import { useRef } from "react";
import * as yup from "yup";
import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";
import { useFormData } from "../../context";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
});
// const schema = yup.object().shape({
//     company: yup.string().required("required"),
//     uniformNum: yup.string().required("required"),
//     contactPerson: yup.string().required("required"),
//     email: yup.string().email().required("required"),
//     phone: yup
//         .string()
//         .matches(phoneRegExp, "Phone number is not valid")
//         .required("required"),
//     address: yup.string().min(2, "Too short").required("required"),
// });

export default function Basic({ formStep, nextFormStep }) {
    const setFormValues = useFormData();
    const formRef = useRef();

    async function handleSubmit(data) {
        console.log(data);
        nextFormStep();
        // try {
        //     formRef.current.setErrors({});

        //     await schema.validate(data, {
        //         abortEarly: false,
        //     });
        //     // Validation passed - do something with data
        //     setFormValues(data);
        //     nextFormStep();
        // } catch (err) {
        //     const errors = {};
        //     // Validation failed - do show error
        //     if (err instanceof yup.ValidationError) {
        //         console.log(err.inner);
        //         // Validation failed - do show error
        //         err.inner.forEach((error) => {
        //             errors[error.path] = error.message;
        //         });
        //         formRef.current.setErrors(errors);
        //     }
        // }
    }

    return (
        <div
            className={[
                styles.form,
                formStep === 0 ? styles.showForm : styles.hideForm,
            ].join(" ")}
        >
            <h2>參展廠商基本資料</h2>
            <div className={styles.companyGroupOne}>
                <div>
                    <p className={styles.title}>攤位名稱</p>
                    <p className={styles.content}>尚立資訊有限公司</p>
                </div>
                <div>
                    <p className={styles.title}>攤位號碼</p>
                    <p className={styles.content}>J0318</p>
                </div>
                <div>
                    <p className={styles.title}>攤位數量</p>
                    <p className={styles.content}>3 個</p>
                </div>
                <div>
                    <p className={styles.title}>聯絡人</p>
                    <p className={styles.content}>陳毅豪</p>
                </div>
                <div>
                    <p className={styles.title}>聯絡電話</p>
                    <p className={styles.content}>02-89798677</p>
                </div>
                <div>
                    <p className={styles.title}>統一編號</p>
                    <p className={styles.content}>83465356</p>
                </div>
            </div>
            <div className={styles.companyGroupTwo}>
                <div>
                    <p className={styles.title}>E-mail</p>
                    <p className={styles.content}>kc@suso.com.tw</p>
                </div>
                <div>
                    <p className={styles.title}>地址</p>
                    <p className={styles.content}>台北市南京東路四段1號2樓</p>
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <h2>代理或裝潢公司基本資料</h2>
                <div className={styles.form}>
                    <div className={styles.formRow}>
                        <Input
                            name="company"
                            label="公司名稱"
                            type="text"
                            placeholder="請輸入公司名稱"
                        />
                    </div>
                    <div className={styles.formRow}>
                        <Input
                            name="uniformNum"
                            label="統一編號"
                            type="text"
                            placeholder="請輸入統一編號"
                        />
                    </div>
                    <div className={styles.formRow}>
                        <Input
                            name="name"
                            label="聯絡人"
                            type="text"
                            placeholder="請輸入聯絡人姓名"
                        />
                    </div>
                    <div className={styles.formRow}>
                        <Input
                            name="email"
                            label="E-mail"
                            type="email"
                            placeholder="請輸入電子郵件"
                        />
                    </div>
                    <div className={styles.formRow}>
                        <Input
                            name="phone"
                            label="聯絡電話"
                            type="tel"
                            placeholder="請輸入聯絡電話"
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
                                    value="company_address"
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
                                    value="agent_address"
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
                        />
                    </div>
                    <div className={[styles.formRow, styles.prepare].join(" ")}>
                        <label htmlFor="prepare">備註</label>
                        <textarea></textarea>
                    </div>
                </div>

                <button type="submit" className={styles.firstNext}>
                    下一步
                </button>
            </Form>
        </div>
    );
}
