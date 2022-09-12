import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Form.module.scss";
import Popup from "../Popup/Popup";
import { useTranslation } from "next-i18next";

export default function Write({ formStep, nextFormStep, stepThree, dataID }) {
    const { t } = useTranslation();
    const [imageSrc, setImageSrc] = useState(stepThree.imageData);
    const [uploadData, setUploadData] = useState();
    const [goNext, setGoNext] = useState(true);
    const [show, setShow] = useState(false);
    const IFrameRef = useRef(null);
    const [recievedMessage, setRecievedMessage] = useState("");

    useEffect(() => {
        console.log(stepThree.status);
        if (stepThree.status !== false) {
            setGoNext(false);
        }
    }, []);

    // useEffect(() => {
    //     window.addEventListener("message", function (e) {
    //         console.log(e);
    //     });
    // }, []);

    const close = () => {
        setShow(false);
    };

    function dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    const handleWritePlan = () => {
        setShow(true);
        setTimeout(() => {
            console.log(IFrameRef);
            if (!IFrameRef.current) return;
            IFrameRef.current.contentWindow.postMessage(
                "Hello son",
                "http://localhost:3001/"
            );
        }, 100);
    };

    const temporary = async () => {
        let file = dataURLtoFile(imageSrc, "png");
        const form = new FormData();
        form.append("application_form_id", dataID);
        form.append(
            "sid",
            "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
        );
        form.append("imageData", file);
        console.log(file);

        const options = {
            method: "POST",
        };

        options.body = form;

        await fetch(`${process.env.customKey}setApplyDiagram`, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === true) {
                    alert(response.msg);
                }
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
            // const file = fileInput.files[0];
            // form.append("imageData", URL.createObjectURL(file));
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
                {imageSrc !== undefined ? (
                    <>
                        {imageSrc.slice(0, 4) === "data" ? (
                            <img
                                id="blah"
                                src={imageSrc}
                                className={styles.uploadImg}
                            />
                        ) : (
                            <img
                                id="blah"
                                src={process.env.imgKey + imageSrc}
                                className={styles.uploadImg}
                            />
                        )}
                    </>
                ) : (
                    <img
                        id="blah"
                        src={imageSrc}
                        className={styles.uploadImg}
                    />
                )}

                <h2>{t("applyForm.stepThree.groupTwo.title")}</h2>
                <a
                    className={styles.popupToWrite}
                    // href="https://anbon.vip/twtc_diagram/"
                    // onClick={() => setShow(true)}
                    href="http://localhost:3001/"
                    onClick={handleWritePlan}
                    target="iframe_a"
                >
                    {t("applyForm.stepThree.groupTwo.clickPopup")}
                </a>

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
                            ref={IFrameRef}
                            src="demo_iframe.htm"
                            id="iframe1"
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
