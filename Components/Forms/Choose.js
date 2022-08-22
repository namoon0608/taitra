import * as yup from "yup";
import { useState } from "react";
import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import SlideToggle from "react-slide-toggle";

export default function Choose({ formStep, nextFormStep }) {
    async function handleSubmit(data) {
        console.log(data);
        // nextFormStep();
        // const validationResult = await schema
        //     .validate(data, { abortEarly: false })
        //     .then()
        //     .catch((err) => {
        //         return err;
        //     });
        // console.log(validationResult.inner);
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
            e.target.parentNode.className = styles.checkedActive;
        } else {
            e.target.nextSibling.nextSibling.childNodes[1].setAttribute(
                "disabled",
                ""
            );
            e.target.nextSibling.nextSibling.childNodes[1].value = null;
            e.target.parentNode.className = "";
        }
    };

    return (
        <div
            className={[
                styles.form,
                formStep === 1 ? styles.showForm : styles.hideForm,
            ].join(" ")}
        >
            <button className={styles.temporary}>暫存</button>
            <Form onSubmit={handleSubmit}>
                <h2>水電追加申請項目</h2>
                <div className={styles.applyDefault}>
                    <input
                        type="checkbox"
                        id="chooseDefault"
                        value="useDefault"
                    />
                    <label htmlFor="chooseDefault">
                        只使用大會提供每 1 攤位免費基本用電 110V 0.5KW
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
                                            110V 用電計算說明：
                                            0.5KW(千瓦)＝500W(瓦)＝5A(安培)；1KW(千瓦)＝1000W(瓦)＝10A(安培
                                            (a)
                                            110V攤位總用電量(KW)＝攤位上照明用電＋各種電器用品用電(電視、開飲機、電腦等)＋展示產品用電....總計。
                                            (b) 110V免費累計電量(KW)＝參展攤位數
                                            X 500W（每1攤位500W免費) (c)
                                            1100V需追申請之電量(KW)＝110V攤位總用電量扣除了110V免費累計電量；(a)
                                            - (b) = (c) 。 請點選計算出的 (c) 值
                                        </p>
                                        <div className={styles.aGroup}>
                                            <label htmlFor="500W">
                                                <input
                                                    type="checkbox"
                                                    id="500W"
                                                    value="110V_5A"
                                                    onChange={active}
                                                />
                                                單 相 110V 5A （500W）
                                                <span>$ 650</span>
                                            </label>
                                            <label htmlFor="1000W">
                                                <input
                                                    type="checkbox"
                                                    id="1000W"
                                                    value="110V_10A"
                                                    onChange={active}
                                                />
                                                單 相 110V 10A（1,000W）
                                                <span>$ 1,300</span>
                                            </label>
                                            <label htmlFor="1500W">
                                                <input
                                                    type="checkbox"
                                                    id="1500W"
                                                    value="110V_15A"
                                                    onChange={active}
                                                />
                                                單 相 110V 15A（1,500W）
                                                <span>$ 1,950</span>
                                            </label>
                                            <label htmlFor="2KW">
                                                <input
                                                    type="checkbox"
                                                    id="2KW"
                                                    value="110V/190V_2"
                                                    onChange={active}
                                                />
                                                三 相 110V/190V 2KW
                                                <span>$ 2,600</span>
                                            </label>
                                            <label htmlFor="4KW">
                                                <input
                                                    type="checkbox"
                                                    id="4KW"
                                                    value="110V/190V_4"
                                                    onChange={active}
                                                />
                                                三 相 110V/190V 4KW
                                                <span>$ 5,200</span>
                                            </label>
                                            <label htmlFor="6KW">
                                                <input
                                                    type="checkbox"
                                                    id="6KW"
                                                    value="110V/190V_6"
                                                    onChange={active}
                                                />
                                                三 相 110V/190V 6KW
                                                <span>$ 7,800</span>
                                            </label>
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
                                        <div className={styles.bGroup}>
                                            <label htmlFor="220V_15A">
                                                <input
                                                    type="checkbox"
                                                    id="220V_15A"
                                                    value="220V_15A"
                                                    onChange={enableNextTextBox}
                                                />
                                                三相 220V 動力用電 15A
                                                <label className={styles.num}>
                                                    數量
                                                    <input
                                                        type="number"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 2,994/組</span>
                                            </label>
                                            <label htmlFor="220V_20A">
                                                <input
                                                    type="checkbox"
                                                    id="220V_20A"
                                                    value="220V_20A"
                                                    onChange={enableNextTextBox}
                                                />
                                                三相 220V 動力用電 20A
                                                <label className={styles.num}>
                                                    數量
                                                    <input
                                                        type="number"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 5,889/組</span>
                                            </label>
                                            <label htmlFor="220V_30A">
                                                <input
                                                    type="checkbox"
                                                    id="220V_30A"
                                                    value="220V_30A"
                                                    onChange={enableNextTextBox}
                                                />
                                                三相 220V 動力用電 30A
                                                <label className={styles.num}>
                                                    數量
                                                    <input
                                                        type="number"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 7,834/組</span>
                                            </label>
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
                                        <div className={styles.bGroup}>
                                            <label htmlFor="380V">
                                                <input
                                                    type="checkbox"
                                                    id="380V"
                                                    value="380V"
                                                    onChange={enableNextTextBox}
                                                />
                                                用電380V電源箱
                                                <label className={styles.num}>
                                                    數量
                                                    <input
                                                        type="number"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 2,994/組</span>
                                            </label>
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
                                        <div className={styles.bGroup}>
                                            <label htmlFor="electricity">
                                                <input
                                                    type="checkbox"
                                                    id="electricity"
                                                    value="electricity"
                                                    onChange={enableNextTextBox}
                                                />
                                                24小時用電
                                                <label className={styles.num}>
                                                    數量
                                                    <input
                                                        type="number"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 2,994/組</span>
                                            </label>
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
                                        <div className={styles.bGroup}>
                                            <label htmlFor="drain_pipe">
                                                <input
                                                    type="checkbox"
                                                    id="drain_pipe"
                                                    value="drain_pipe"
                                                    onChange={enableNextTextBox}
                                                />
                                                給排水管
                                                <label className={styles.num}>
                                                    數量
                                                    <input
                                                        type="number"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 5,000 /組</span>
                                            </label>
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
                                        <div className={styles.bGroup}>
                                            <label htmlFor="press_air">
                                                <input
                                                    type="checkbox"
                                                    id="press_air"
                                                    value="press_air"
                                                    onChange={enableNextTextBox}
                                                />
                                                壓縮空氣
                                                <label className={styles.num}>
                                                    數量
                                                    <input
                                                        type="number"
                                                        disabled
                                                    />
                                                </label>
                                                <span>$ 2,994/組</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </div>
                <button type="submit" className={styles.next}>
                    下一步
                </button>
            </Form>
        </div>
    );
}
