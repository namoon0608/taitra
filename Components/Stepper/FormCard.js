import styles from "../../styles/Form.module.scss";

export default function FormCard({ children, currentStep, prevFormStep }) {
    return (
        <div className="">
            {currentStep < 4 && (
                <>
                    {currentStep > 0 && (
                        <button
                            className={styles.back}
                            onClick={prevFormStep}
                            type="button"
                        >
                            上一步
                        </button>
                    )}
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div
                                className={
                                    currentStep === 0
                                        ? styles.active
                                        : styles.pass
                                }
                            >
                                <span>Step 1</span>
                                <p>基本資料</p>
                            </div>
                        </div>
                        <svg
                            width="68"
                            height="3"
                            viewBox="0 0 68 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.76953 1.33301H66.164"
                                stroke="#B1B1B1"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        <div className={styles.step}>
                            <div
                                className={
                                    currentStep === 1
                                        ? styles.active
                                        : null || currentStep > 1
                                        ? styles.pass
                                        : null
                                }
                            >
                                <span>Step 2</span>
                                <p>水電申請</p>
                            </div>
                        </div>
                        <svg
                            width="68"
                            height="3"
                            viewBox="0 0 68 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.76953 1.33301H66.164"
                                stroke="#B1B1B1"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        <div className={styles.step}>
                            <div
                                className={
                                    currentStep === 2
                                        ? styles.active
                                        : null || currentStep > 2
                                        ? styles.pass
                                        : null
                                }
                            >
                                <span>Step 3</span>
                                <p>水電配置圖</p>
                            </div>
                        </div>
                        <svg
                            width="68"
                            height="3"
                            viewBox="0 0 68 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.76953 1.33301H66.164"
                                stroke="#B1B1B1"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        <div className={styles.step}>
                            <div
                                className={
                                    currentStep === 3 ? styles.active : null
                                }
                            >
                                <span>Step 4</span>
                                <p>預覽</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {children}
        </div>
    );
}
