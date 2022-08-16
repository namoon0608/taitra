import * as yup from "yup";
import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const schema = yup.object().shape({
//     email: yup.string().email().required("Email is required"),
// });

export default function Choose({ formStep, nextFormStep }) {
    async function handleSubmit(data) {
        console.log(data);
        nextFormStep();
        // const validationResult = await schema
        //     .validate(data, { abortEarly: false })
        //     .then()
        //     .catch((err) => {
        //         return err;
        //     });
        // console.log(validationResult.inner);
    }

    return (
        <div
            className={[
                styles.form,
                formStep === 1 ? styles.showForm : styles.hideForm,
            ].join(" ")}
        >
            <Form onSubmit={handleSubmit}>
                <h2>水電追加申請項目</h2>
                <div></div>
                <button type="submit" className={styles.next}>
                    下一步
                </button>
            </Form>
        </div>
    );
}
