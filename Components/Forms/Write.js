import { useState, useEffect } from "react";
import styles from "../../styles/Form.module.scss";
import Popup from "../Popup/Popup";
import { useTranslation } from "next-i18next";

export default function Write({ formStep, nextFormStep, stepThree, dataID }) {
    const { t } = useTranslation();
    const [imageSrc, setImageSrc] = useState(stepThree.imageData);
    const [uploadData, setUploadData] = useState();
    const [goNext, setGoNext] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log(imageSrc);
        if (imageSrc !== undefined) {
            setGoNext(false);
        }
    }, []);

    const close = () => {
        setShow(false);
    };

    const temporary = async () => {
        const form = new FormData();
        form.append("application_form_id", dataID);
        form.append(
            "sid",
            "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
        );
        form.append("imageData", imageSrc);

        const options = {
            method: "POST",
        };

        options.body = form;

        await fetch(`${process.env.customKey}setApplyDiagram`, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                alert("success");
            })
            .catch((err) => console.error(err));
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
        form.append("application_form_id", dataID);
        form.append(
            "sid",
            "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
        );
        if (fileInput.files.length === 0) {
            form.append("imageData", imageSrc);
        } else {
            const file = fileInput.files[0];
            form.append("imageData", URL.createObjectURL(file));
            // form.append("imageData", fileInput.files[0]);
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
            <button className={styles.temporary} onClick={temporary}>
                {t("applyForm.stepper.save")}
            </button>
            <form onChange={handleOnChange} onSubmit={handleSubmit}>
                <h2>{t("applyForm.stepThree.groupOne.title")}</h2>
                <div>
                    <input
                        type="checkbox"
                        id="cbox1"
                        value="first_checkbox"
                        name="cbox1"
                    />
                    <label htmlFor="cbox1">
                        {t("applyForm.stepThree.groupOne.pending")}
                    </label>
                </div>
                <div className={styles.upload}>
                    <label htmlFor="upload-photo">
                        {t("applyForm.stepThree.groupOne.uploadFile")}
                    </label>
                    <input
                        type="file"
                        name="photo"
                        id="upload-photo"
                        accept="image/*"
                    />
                </div>
                <img id="blah" src={imageSrc} className={styles.uploadImg} />

                <h2>{t("applyForm.stepThree.groupTwo.title")}</h2>
                <a
                    href="https://anbon.vip/twtc_diagram/"
                    onClick={() => setShow(true)}
                    target="iframe_a"
                >
                    {t("applyForm.stepThree.groupTwo.clickPopup")}
                </a>
                {/* <img src="/img/image7.png" /> */}
                <h2>{t("applyForm.stepThree.groupThree.title")}</h2>
                <div className={styles.write}>
                    <p>＃{t("applyForm.stepThree.groupThree.content")}</p>
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
                    {t("applyForm.stepper.next")}
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
