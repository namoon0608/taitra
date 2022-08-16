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
                    <span className="">Step {currentStep + 1} of 4</span>
                </>
            )}
            {children}
        </div>
    );
}
