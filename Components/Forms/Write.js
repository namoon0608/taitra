import * as yup from "yup";
import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const schema = yup.object().shape({
//     email: yup.string().email().required("Email is required"),
// });
const schema = yup.object().shape({
    company: yup.string().required("required"),
    uniformNum: yup.number().integer().required("required").max(8).min(8),
    contactPerson: yup.string().required("required"),
    email: yup.string().email().required("required"),
    phone: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("required"),
    address: yup.string().min(2, "Too short").required("required"),
});

export default function Write({ formStep, nextFormStep }) {
    async function handleSubmit(data) {
        console.log(data);
        const validationResult = await schema
            .validate(data, { abortEarly: false })
            .then(nextFormStep())
            .catch((err) => {
                return err;
            });
        console.log(validationResult.inner);
    }

    return (
        <div
            className={[
                styles.form,
                formStep === 2 ? styles.showForm : styles.hideForm,
            ].join(" ")}
        >
            <Form onSubmit={handleSubmit}>
                <h2>請上傳水電配置圖</h2>
                <div>
                    <input type="checkbox" id="cbox1" value="first_checkbox" />
                    <label htmlFor="cbox1">
                        水電配置圖尚未完成，待補件上傳
                    </label>
                </div>
                <div className={styles.upload}>
                    <label htmlFor="upload-photo">請選擇檔案上傳</label>
                    <input type="file" name="photo" id="upload-photo" />
                </div>

                <h2>或以下方工具繪製水電配置圖</h2>
                <img src="/img/image7.png" />
                <h2>水電配置圖範例</h2>
                <div className={styles.write}>
                    <p>＃請標示鄰攤位及走道，方便識別攤位方位。</p>
                    <img src="/img/image21.png" />
                </div>
                <button type="submit" className={styles.next}>
                    下一步
                </button>
            </Form>
        </div>
    );
}
