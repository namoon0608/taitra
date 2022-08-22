import * as yup from "yup";
import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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

export default function Preview({ formStep, nextFormStep }) {
    async function handleSubmit(data) {
        console.log(data);
        // const validationResult = await schema
        //     .validate(data, { abortEarly: false })
        //     .then(nextFormStep())
        //     .catch((err) => {
        //         return err;
        //     });
        // console.log(validationResult.inner);
    }

    return (
        <div className={styles.form}>
            <Form onSubmit={handleSubmit}>
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
                <button type="submit" className={styles.complete}>
                    完成申請
                </button>
            </Form>
        </div>
    );
}
