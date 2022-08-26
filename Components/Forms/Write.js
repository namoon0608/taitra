import { useState } from "react";
import styles from "../../styles/Form.module.scss";
import Popup from "../Popup/Popup";

export default function Write({ formStep, nextFormStep, stepThree, dataID }) {
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
    const [goNext, setGoNext] = useState(true);
    const [show, setShow] = useState(false);

    const close = () => {
        setShow(false);
    };

    function handleOnChange(changeEvent) {
        const later = document.querySelector("input[name=cbox1]");
        const reader = new FileReader();

        reader.onload = function (onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        };

        if (changeEvent.target.files !== null) {
            reader.readAsDataURL(changeEvent.target.files[0]);
            later.checked = false;
            setGoNext(false);
        } else if (later.checked) {
            setGoNext(false);
        } else if (changeEvent.target.files === null) {
            setGoNext(true);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = event.currentTarget;
        const fileInput = Array.from(formData.elements).find(
            ({ name }) => name === "photo"
        );
        const form = new FormData();
        form.append("application_form_id", "6305a2e49bdbf001");
        form.append(
            "sid",
            "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
        );
        if (fileInput.files.length === 0) {
            form.append("imageData", imageSrc);
        } else {
            form.append("imageData", fileInput.files[0]);
        }

        const options = {
            method: "POST",
        };

        options.body = form;

        await fetch(`${process.env.customKey}setApplyDiagram`, options)
            .then((response) => response.json())
            .then((response) => console.log(response))
            .then(nextFormStep())
            .catch((err) => console.error(err));
    }

    return (
        <div
            className={[
                styles.form,
                formStep === 2 ? styles.showForm : styles.hideForm,
            ].join(" ")}
        >
            <button className={styles.temporary}>暫存</button>
            <form onChange={handleOnChange} onSubmit={handleSubmit}>
                <h2>請上傳水電配置圖</h2>
                <div>
                    <input
                        type="checkbox"
                        id="cbox1"
                        value="first_checkbox"
                        name="cbox1"
                    />
                    <label htmlFor="cbox1">
                        水電配置圖尚未完成，待補件上傳
                    </label>
                </div>
                <div className={styles.upload}>
                    <label htmlFor="upload-photo">請選擇檔案上傳</label>
                    <input
                        type="file"
                        name="photo"
                        id="upload-photo"
                        accept="image/*"
                    />
                </div>
                {stepThree.status === false || stepThree.imageData === "" ? (
                    <img
                        id="blah"
                        src={imageSrc}
                        className={styles.uploadImg}
                    />
                ) : (
                    <img
                        id="blah"
                        src={stepThree.imageData}
                        className={styles.uploadImg}
                    />
                )}

                <h2>或以下方工具繪製水電配置圖</h2>
                <a
                    href="https://anbon.vip/twtc_diagram/"
                    onClick={() => setShow(true)}
                    target="iframe_a"
                >
                    Open Link in Popup
                </a>
                {/* <img src="/img/image7.png" /> */}
                <h2>水電配置圖範例</h2>
                <div className={styles.write}>
                    <p>＃請標示鄰攤位及走道，方便識別攤位方位。</p>
                    <img src="/img/image21.png" />
                </div>
                <button
                    type="submit"
                    className={styles.next}
                    disabled={goNext}
                    style={{
                        cursor: goNext ? "auto" : "pointer",
                        opacity: goNext ? "0.5" : "1",
                    }}
                >
                    下一步
                </button>
            </form>
            {show ? (
                <Popup close={close}>
                    <div
                        onClick={(e) => {
                            // do not close modal if anything inside modal content is clicked
                            e.stopPropagation();
                        }}
                        style={{ width: "90%", height: "90%" }}
                    >
                        <iframe
                            src="demo_iframe.htm"
                            name="iframe_a"
                            height="100%"
                            width="100%"
                            title="Iframe Example"
                        ></iframe>
                    </div>
                </Popup>
            ) : null}
        </div>
    );
}
