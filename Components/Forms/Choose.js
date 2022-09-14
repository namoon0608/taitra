import { useState } from "react";
import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import SlideToggle from "react-slide-toggle";
import { useTranslation } from "next-i18next";
import Input from "../Input Fields/Input";

export default function Choose({
    formStep,
    nextFormStep,
    priceData,
    stepTwo,
    dataID,
    sid,
}) {
    const { t } = useTranslation();

    const temporary = async () => {
        let invoice = "";
        const radios = document.querySelectorAll('input[name="drone"]');
        for (let radio of radios) {
            if (radio.checked) {
                invoice = radio.value;
            }
        }
        let address = document.getElementById("address").value;
        let items = [];
        const checkBoxsOne = document.querySelectorAll(
            ".Form_aGroup__FN6oc input[type='checkbox']"
        );
        const checkBoxsTwo = document.querySelectorAll(
            ".Form_bGroup__4aN8N input[type='checkbox']"
        );
        for (let check of checkBoxsOne) {
            if (check.checked) {
                items.push({ item_id: check.value, quantity: "1" });
            }
        }
        for (let check of checkBoxsTwo) {
            if (check.checked) {
                let num = check.nextSibling.nextSibling.childNodes[1];
                items.push({
                    item_id: check.value,
                    quantity: num.value,
                });
            }
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                invoice: invoice,
                invoice_address: address,
                items: JSON.stringify(items),
                event_uid: sid.event_uid,
                company_id: sid.company_id,
            }),
        };
        await fetch(`${process.env.customKey}setApplyHydroItems`, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                alert("success");
            })
            .catch((err) => console.error(err));
    };

    async function handleSubmit(data) {
        console.log(data);
        let invoice = "";
        const radios = document.querySelectorAll('input[name="drone"]');
        for (let radio of radios) {
            if (radio.checked) {
                invoice = radio.value;
            }
        }
        let items = [];
        const checkBoxsOne = document.querySelectorAll(
            ".Form_aGroup__FN6oc input[type='checkbox']"
        );
        const checkBoxsTwo = document.querySelectorAll(
            ".Form_bGroup__4aN8N input[type='checkbox']"
        );
        for (let check of checkBoxsOne) {
            if (check.checked) {
                items.push({ item_id: check.value, quantity: "1" });
            }
        }
        for (let check of checkBoxsTwo) {
            if (check.checked) {
                let num = check.nextSibling.nextSibling.childNodes[1];
                items.push({
                    item_id: check.value,
                    quantity: num.value,
                });
            }
        }
        const options = {
            method: "POST",
            headers: {
                // cookie: "ci_session=9lejfn4cgisk4havru3sjg4s9e8aiqho",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                items: JSON.stringify(items),
                invoice: invoice,
                invoice_address: data.address,
                event_uid: sid.event_uid,
                company_id: sid.company_id,
            }),
        };
        await fetch(`${process.env.customKey}setApplyHydroItems`, options)
            .then((response) => response.json())
            .then((response) => console.log(response))
            .then(nextFormStep())
            .catch((err) => console.error(err));
    }
    const active = (e) => {
        if (e.target.checked) {
            e.target.parentNode.className = styles.checkedActive;
        } else {
            e.target.parentNode.className = "";
        }
    };
    const enableNextTextBox = (e) => {
        if (e.target.checked) {
            e.target.nextSibling.nextSibling.childNodes[1].removeAttribute(
                "disabled"
            );
            e.target.nextSibling.nextSibling.childNodes[1].min = 1;
            e.target.nextSibling.nextSibling.childNodes[1].value = 1;
            e.target.parentNode.className = styles.checkedActive;
        } else {
            e.target.nextSibling.nextSibling.childNodes[1].setAttribute(
                "disabled",
                ""
            );
            e.target.nextSibling.nextSibling.childNodes[1].value = 0;
            e.target.parentNode.className = "";
        }
    };
    // const handleDefault = (e) => {
    //     const checkBoxsOne = document.querySelectorAll(
    //         ".Form_aGroup__FN6oc input[type='checkbox']"
    //     );
    //     const checkBoxsTwo = document.querySelectorAll(
    //         ".Form_bGroup__4aN8N input"
    //     );
    //     if (e.target.checked) {
    //         for (let check of checkBoxsOne) {
    //             if (check.checked) {
    //                 check.checked = false;
    //                 check.parentNode.className = "";
    //             }
    //         }
    //         for (let check of checkBoxsTwo) {
    //             if (check.checked) {
    //                 check.checked = false;
    //                 check.parentNode.className = "";
    //             }
    //             if (check.type === "number") {
    //                 check.value = 0;
    //                 check.setAttribute("disabled", "");
    //             }
    //         }
    //     }
    // };

    return (
        <div
            className={[
                styles.form,
                formStep === 1 ? styles.showForm : styles.hideForm,
            ].join(" ")}
        >
            <button className={styles.temporary} onClick={temporary}>
                {t("applyForm.stepper.save")}
            </button>
            {stepTwo.status === false ? (
                <Form onSubmit={handleSubmit}>
                    <h2>{t("applyForm.stepTwo.title")}</h2>
                    <div className={styles.applyCheckBox}>
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            Ａ.用電110V電源箱
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemA")}
                                            </p>
                                            <div className={styles.aGroup}>
                                                {priceData.items[0].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                                key={
                                                                    item.item_id
                                                                }
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    id={
                                                                        item.item_id
                                                                    }
                                                                    value={
                                                                        item.item_id
                                                                    }
                                                                    onChange={
                                                                        active
                                                                    }
                                                                />
                                                                {item.name}
                                                                <span>
                                                                    {item.prcie}
                                                                </span>
                                                            </label>
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            B. 用電220V電源箱
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemBCD")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {priceData.items[1].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                                key={
                                                                    item.item_id
                                                                }
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    id={
                                                                        item.item_id
                                                                    }
                                                                    value={
                                                                        item.item_id
                                                                    }
                                                                    onChange={
                                                                        enableNextTextBox
                                                                    }
                                                                />
                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    <input
                                                                        type="number"
                                                                        min="0"
                                                                        disabled
                                                                    />
                                                                </label>
                                                                <span>
                                                                    {item.prcie}
                                                                    /
                                                                    {t(
                                                                        "applyForm.stepTwo.set"
                                                                    )}
                                                                </span>
                                                            </label>
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            C. 用電380V電源箱
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemBCD")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {priceData.items[2].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                                key={
                                                                    item.item_id
                                                                }
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    id={
                                                                        item.item_id
                                                                    }
                                                                    value={
                                                                        item.item_id
                                                                    }
                                                                    onChange={
                                                                        enableNextTextBox
                                                                    }
                                                                />
                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    <input
                                                                        type="number"
                                                                        min="0"
                                                                        disabled
                                                                    />
                                                                </label>
                                                                <span>
                                                                    {item.prcie}
                                                                    /
                                                                    {t(
                                                                        "applyForm.stepTwo.set"
                                                                    )}
                                                                </span>
                                                            </label>
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            D. 用電440V電源箱
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemBCD")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {priceData.items[3].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                                key={
                                                                    item.item_id
                                                                }
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    id={
                                                                        item.item_id
                                                                    }
                                                                    value={
                                                                        item.item_id
                                                                    }
                                                                    onChange={
                                                                        enableNextTextBox
                                                                    }
                                                                />
                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    <input
                                                                        type="number"
                                                                        min="0"
                                                                        disabled
                                                                    />
                                                                </label>
                                                                <span>
                                                                    {item.prcie}
                                                                    /
                                                                    {t(
                                                                        "applyForm.stepTwo.set"
                                                                    )}
                                                                </span>
                                                            </label>
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            E. 24小時用電
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemBCD")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {priceData.items[4].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                                key={
                                                                    item.item_id
                                                                }
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    id={
                                                                        item.item_id
                                                                    }
                                                                    value={
                                                                        item.item_id
                                                                    }
                                                                    onChange={
                                                                        enableNextTextBox
                                                                    }
                                                                />
                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    <input
                                                                        type="number"
                                                                        min="0"
                                                                        disabled
                                                                    />
                                                                </label>
                                                                <span>
                                                                    {item.prcie}
                                                                    /
                                                                    {t(
                                                                        "applyForm.stepTwo.set"
                                                                    )}
                                                                </span>
                                                            </label>
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            F. 給排水管
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemE")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {priceData.items[5].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                                key={
                                                                    item.item_id
                                                                }
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    id={
                                                                        item.item_id
                                                                    }
                                                                    value={
                                                                        item.item_id
                                                                    }
                                                                    onChange={
                                                                        enableNextTextBox
                                                                    }
                                                                />
                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    <input
                                                                        type="number"
                                                                        min="0"
                                                                        disabled
                                                                    />
                                                                </label>
                                                                <span>
                                                                    {item.prcie}
                                                                    /
                                                                    {t(
                                                                        "applyForm.stepTwo.set"
                                                                    )}
                                                                </span>
                                                            </label>
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            G. 壓縮空氣
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemF")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {priceData.items[6].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                                key={
                                                                    item.item_id
                                                                }
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    id={
                                                                        item.item_id
                                                                    }
                                                                    value={
                                                                        item.item_id
                                                                    }
                                                                    onChange={
                                                                        enableNextTextBox
                                                                    }
                                                                />
                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    <input
                                                                        type="number"
                                                                        min="0"
                                                                        disabled
                                                                    />
                                                                </label>
                                                                <span>
                                                                    {item.prcie}
                                                                    /
                                                                    {t(
                                                                        "applyForm.stepTwo.set"
                                                                    )}
                                                                </span>
                                                            </label>
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <h2>{t("applyForm.stepOne.groupThree.title")}</h2>
                    <div className={styles.form}>
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
                                label={t(
                                    "applyForm.stepOne.groupThree.invoiceAddress"
                                )}
                                type="text"
                                placeholder={t(
                                    "applyForm.stepOne.groupThree.invoicePlaceHolder"
                                )}
                                id="address"
                                maxLength="30"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className={styles.next}>
                        {t("applyForm.stepper.next")}
                    </button>
                </Form>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <h2>{t("applyForm.stepTwo.title")}</h2>
                    <div className={styles.applyCheckBox}>
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            Ａ.用電110V電源箱
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemA")}
                                            </p>
                                            <div className={styles.aGroup}>
                                                {stepTwo.items[0].data.map(
                                                    (item) => (
                                                        <>
                                                            {item.chk ===
                                                            "Y" ? (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                    className={
                                                                        styles.checkedActive
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            active
                                                                        }
                                                                        defaultChecked
                                                                    />
                                                                    {item.name}
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                    </span>
                                                                </label>
                                                            ) : (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            active
                                                                        }
                                                                    />
                                                                    {item.name}
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                    </span>
                                                                </label>
                                                            )}
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            B. 用電220V電源箱
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemBCD")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {stepTwo.items[1].data.map(
                                                    (item) => (
                                                        <>
                                                            {item.chk ===
                                                            "Y" ? (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                    className={
                                                                        styles.checkedActive
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                        defaultChecked
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="1"
                                                                            defaultValue={
                                                                                item.quantity
                                                                            }
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            ) : (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            )}
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            C. 用電380V電源箱
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemBCD")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {stepTwo.items[2].data.map(
                                                    (item) => (
                                                        <>
                                                            {item.chk ===
                                                            "Y" ? (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                    className={
                                                                        styles.checkedActive
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                        defaultChecked
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="1"
                                                                            defaultValue={
                                                                                item.quantity
                                                                            }
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            ) : (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            )}
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            D. 用電440V電源箱
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemBCD")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {stepTwo.items[3].data.map(
                                                    (item) => (
                                                        <>
                                                            {item.chk ===
                                                            "Y" ? (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                    className={
                                                                        styles.checkedActive
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                        defaultChecked
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="1"
                                                                            defaultValue={
                                                                                item.quantity
                                                                            }
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            ) : (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            )}
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            E. 24小時用電
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemBCD")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {stepTwo.items[4].data.map(
                                                    (item) => (
                                                        <>
                                                            {item.chk ===
                                                            "Y" ? (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                    className={
                                                                        styles.checkedActive
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                        defaultChecked
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="1"
                                                                            defaultValue={
                                                                                item.quantity
                                                                            }
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            ) : (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            )}
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            F. 給排水管
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemE")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {stepTwo.items[5].data.map(
                                                    (item) => (
                                                        <>
                                                            {item.chk ===
                                                            "Y" ? (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                    className={
                                                                        styles.checkedActive
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                        defaultChecked
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="1"
                                                                            defaultValue={
                                                                                item.quantity
                                                                            }
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            ) : (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            )}
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <SlideToggle
                            duration={1000}
                            collapsed={true}
                            whenReversedUseBackwardEase={false}
                            render={({
                                toggle,
                                setCollapsibleElement,
                                toggleState,
                            }) => (
                                <div className={styles.card}>
                                    <div className="card-header">
                                        <label
                                            className={[
                                                styles.dropDown,
                                                toggleState === "COLLAPSED"
                                                    ? styles.dropDown
                                                    : styles.active,
                                            ].join(" ")}
                                            onClick={toggle}
                                        >
                                            G. 壓縮空氣
                                            <span>
                                                {toggleState === "EXPANDED" ||
                                                toggleState === "EXPANDING" ? (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 9L8 2L15 9"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="10"
                                                        viewBox="0 0 16 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15 1L8 8L1 1"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <div
                                        className={styles.cardBody}
                                        ref={setCollapsibleElement}
                                    >
                                        <div className={styles.dropDownContent}>
                                            <p>
                                                {t("applyForm.stepTwo.itemF")}
                                            </p>
                                            <div className={styles.bGroup}>
                                                {stepTwo.items[6].data.map(
                                                    (item) => (
                                                        <>
                                                            {item.chk ===
                                                            "Y" ? (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                    className={
                                                                        styles.checkedActive
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                        defaultChecked
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="1"
                                                                            defaultValue={
                                                                                item.quantity
                                                                            }
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            ) : (
                                                                <label
                                                                    htmlFor={
                                                                        item.item_id
                                                                    }
                                                                    key={
                                                                        item.item_id
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        id={
                                                                            item.item_id
                                                                        }
                                                                        value={
                                                                            item.item_id
                                                                        }
                                                                        onChange={
                                                                            enableNextTextBox
                                                                        }
                                                                    />
                                                                    {item.name}
                                                                    <label
                                                                        className={
                                                                            styles.num
                                                                        }
                                                                    >
                                                                        {t(
                                                                            "applyForm.stepTwo.quantity"
                                                                        )}
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    </label>
                                                                    <span>
                                                                        {
                                                                            item.prcie
                                                                        }
                                                                        /
                                                                        {t(
                                                                            "applyForm.stepTwo.set"
                                                                        )}
                                                                    </span>
                                                                </label>
                                                            )}
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <h2>{t("applyForm.stepOne.groupThree.title")}</h2>
                    <div className={styles.form}>
                        <div className={styles.addressGroup}>
                            {stepTwo.invoice.checkbox === "1" ? (
                                <>
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
                                                required
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
                                </>
                            ) : (
                                <>
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
                                                required
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
                                </>
                            )}
                        </div>
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
                                maxLength="30"
                                defaultValue={stepTwo.invoice.address}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className={styles.next}>
                        {t("applyForm.stepper.next")}
                    </button>
                </Form>
            )}
        </div>
    );
}
