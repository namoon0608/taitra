import { useState } from "react";
import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import SlideToggle from "react-slide-toggle";
import { useTranslation } from "next-i18next";

export default function Choose({
    formStep,
    nextFormStep,
    priceData,
    stepTwo,
    dataID,
}) {
    const { t } = useTranslation();

    const temporary = async () => {
        const useDefault = document.getElementById("chooseDefault");
        let items = [];
        if (useDefault.checked) {
            const options = {
                method: "POST",
                headers: {
                    // cookie: "ci_session=9lejfn4cgisk4havru3sjg4s9e8aiqho",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    application_form_id: dataID,
                    base_option: "Y",
                    items: [],
                    sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
                }),
            };
            await fetch(`${process.env.customKey}setApplyHydroItems`, options)
                .then((response) => response.json())
                .then((response) => console.log(response))
                .then(nextFormStep())
                .catch((err) => console.error(err));
        } else {
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
                    base_option: "N",
                    items: JSON.stringify(items),
                    sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
                }),
            };
            await fetch(`${process.env.customKey}setApplyHydroItems`, options)
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    alert("success");
                })
                .catch((err) => console.error(err));
        }
    };
    async function handleSubmit() {
        const useDefault = document.getElementById("chooseDefault");
        let items = [];
        if (useDefault.checked) {
            const options = {
                method: "POST",
                headers: {
                    // cookie: "ci_session=9lejfn4cgisk4havru3sjg4s9e8aiqho",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    application_form_id: dataID,
                    base_option: "Y",
                    items: [],
                    sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
                }),
            };
            await fetch(`${process.env.customKey}setApplyHydroItems`, options)
                .then((response) => response.json())
                .then((response) => console.log(response))
                .then(nextFormStep())
                .catch((err) => console.error(err));
        } else {
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
                    if (num.value === "0" || num.value === "") {
                        alert("請填入數量");
                    } else {
                        items.push({
                            item_id: check.value,
                            quantity: num.value,
                        });
                    }
                }
            }
            if (items.length !== 0) {
                const options = {
                    method: "POST",
                    headers: {
                        // cookie: "ci_session=9lejfn4cgisk4havru3sjg4s9e8aiqho",
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        application_form_id: dataID,
                        base_option: "N",
                        items: JSON.stringify(items),
                        sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
                    }),
                };
                await fetch(
                    `${process.env.customKey}setApplyHydroItems`,
                    options
                )
                    .then((response) => response.json())
                    .then((response) => console.log(response))
                    .then(nextFormStep())
                    .catch((err) => console.error(err));
            }
        }
    }
    const active = (e) => {
        const useDefault = document.getElementById("chooseDefault");
        useDefault.checked = false;
        if (e.target.checked) {
            e.target.parentNode.className = styles.checkedActive;
        } else {
            e.target.parentNode.className = "";
        }
    };
    const enableNextTextBox = (e) => {
        const useDefault = document.getElementById("chooseDefault");
        useDefault.checked = false;
        if (e.target.checked) {
            e.target.nextSibling.nextSibling.childNodes[1].removeAttribute(
                "disabled"
            );
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
    const handleDefault = (e) => {
        const checkBoxsOne = document.querySelectorAll(
            ".Form_aGroup__FN6oc input[type='checkbox']"
        );
        const checkBoxsTwo = document.querySelectorAll(
            ".Form_bGroup__4aN8N input"
        );
        if (e.target.checked) {
            for (let check of checkBoxsOne) {
                if (check.checked) {
                    check.checked = false;
                    check.parentNode.className = "";
                }
            }
            for (let check of checkBoxsTwo) {
                if (check.checked) {
                    check.checked = false;
                    check.parentNode.className = "";
                }
                if (check.type === "number") {
                    check.value = 0;
                    check.setAttribute("disabled", "");
                }
            }
        }
    };

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
                    <div className={styles.applyDefault}>
                        <input
                            type="checkbox"
                            id="chooseDefault"
                            value="useDefault"
                            onChange={handleDefault}
                            defaultChecked
                        />
                        <label htmlFor="chooseDefault">
                            {t("applyForm.stepTwo.useDefault")}
                        </label>
                    </div>
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
                                                                    ${" "}
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
                                                                    ${" "}
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
                                                                    ${" "}
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
                                                {/* <label htmlFor="380V">
                                                <input
                                                    type="checkbox"
                                                    id="380V"
                                                    value="380V"
                                                    onChange={enableNextTextBox}
                                                />
                                                用電380V電源箱
                                                <label className={styles.num}>
                                                    {t("applyForm.stepTwo.quantity")}
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 2,994/{t("applyForm.stepTwo.set")}</span>
                                            </label> */}
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
                                            D. 24小時用電
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
                                                                    ${" "}
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
                                                {/* <label htmlFor="electricity">
                                                <input
                                                    type="checkbox"
                                                    id="electricity"
                                                    value="electricity"
                                                    onChange={enableNextTextBox}
                                                />
                                                24小時用電
                                                <label className={styles.num}>
                                                    {t("applyForm.stepTwo.quantity")}
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 2,994/{t("applyForm.stepTwo.set")}</span>
                                            </label> */}
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
                                            E. 給排水管
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
                                                {priceData.items[4].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
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
                                                                    ${" "}
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
                                            F. 壓縮空氣
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
                                                {priceData.items[5].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
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
                                                                    ${" "}
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
                    <button type="submit" className={styles.next}>
                        {t("applyForm.stepper.next")}
                    </button>
                </Form>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <h2>{t("applyForm.stepTwo.title")}</h2>
                    <div className={styles.applyDefault}>
                        <input
                            type="checkbox"
                            id="chooseDefault"
                            value="useDefault"
                            onChange={handleDefault}
                        />
                        <label htmlFor="chooseDefault">
                            {t("applyForm.stepTwo.useDefault")}
                        </label>
                    </div>
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
                                                {t(
                                                    "applyForm.stepTwo.itemA"
                                                ).replace(
                                                    "/\r\n|\r|\n/",
                                                    "<br />"
                                                )}
                                            </p>
                                            <div className={styles.aGroup}>
                                                {stepTwo.items[0].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                            >
                                                                {item.chk ===
                                                                "N" ? (
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
                                                                ) : (
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
                                                                )}
                                                                {item.name}
                                                                <span>
                                                                    ${" "}
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
                                                {stepTwo.items[1].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                            >
                                                                {item.chk ===
                                                                "N" ? (
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
                                                                ) : (
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
                                                                )}

                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    {item.quantity ===
                                                                    "" ? (
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    ) : (
                                                                        <input
                                                                            type="number"
                                                                            min={item.quantity.toString()}
                                                                        />
                                                                    )}
                                                                </label>
                                                                <span>
                                                                    ${" "}
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
                                                {stepTwo.items[2].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                            >
                                                                {item.chk ===
                                                                "N" ? (
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
                                                                ) : (
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
                                                                )}

                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    {item.quantity ===
                                                                    "" ? (
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    ) : (
                                                                        <input
                                                                            type="number"
                                                                            min={item.quantity.toString()}
                                                                        />
                                                                    )}
                                                                </label>
                                                                <span>
                                                                    ${" "}
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
                                                {/* <label htmlFor="380V">
                                                <input
                                                    type="checkbox"
                                                    id="380V"
                                                    value="380V"
                                                    onChange={enableNextTextBox}
                                                />
                                                用電380V電源箱
                                                <label className={styles.num}>
                                                    {t("applyForm.stepTwo.quantity")}
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 2,994/{t("applyForm.stepTwo.set")}</span>
                                            </label> */}
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
                                            D. 24小時用電
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
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                            >
                                                                {item.chk ===
                                                                "N" ? (
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
                                                                ) : (
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
                                                                )}

                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    {item.quantity ===
                                                                    "" ? (
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    ) : (
                                                                        <input
                                                                            type="number"
                                                                            min={item.quantity.toString()}
                                                                        />
                                                                    )}
                                                                </label>
                                                                <span>
                                                                    ${" "}
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
                                                {/* <label htmlFor="electricity">
                                                <input
                                                    type="checkbox"
                                                    id="electricity"
                                                    value="electricity"
                                                    onChange={enableNextTextBox}
                                                />
                                                24小時用電
                                                <label className={styles.num}>
                                                    {t("applyForm.stepTwo.quantity")}
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 2,994/{t("applyForm.stepTwo.set")}</span>
                                            </label> */}
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
                                            E. 給排水管
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
                                                {stepTwo.items[4].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                            >
                                                                {item.chk ===
                                                                "N" ? (
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
                                                                ) : (
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
                                                                )}

                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    {item.quantity ===
                                                                    "" ? (
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    ) : (
                                                                        <input
                                                                            type="number"
                                                                            min={item.quantity.toString()}
                                                                        />
                                                                    )}
                                                                </label>
                                                                <span>
                                                                    ${" "}
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
                                            F. 壓縮空氣
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
                                                {stepTwo.items[5].data.map(
                                                    (item) => (
                                                        <>
                                                            <label
                                                                htmlFor={
                                                                    item.item_id
                                                                }
                                                            >
                                                                {item.chk ===
                                                                "N" ? (
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
                                                                ) : (
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
                                                                )}

                                                                {item.name}
                                                                <label
                                                                    className={
                                                                        styles.num
                                                                    }
                                                                >
                                                                    {t(
                                                                        "applyForm.stepTwo.quantity"
                                                                    )}
                                                                    {item.quantity ===
                                                                    "" ? (
                                                                        <input
                                                                            type="number"
                                                                            min="0"
                                                                            disabled
                                                                        />
                                                                    ) : (
                                                                        <input
                                                                            type="number"
                                                                            min={item.quantity.toString()}
                                                                        />
                                                                    )}
                                                                </label>
                                                                <span>
                                                                    ${" "}
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
                    <button type="submit" className={styles.next}>
                        {t("applyForm.stepper.next")}
                    </button>
                </Form>
            )}
        </div>
    );
}
