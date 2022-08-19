import React from "react";
import styles from "../../styles/Popup.module.scss";

function Popup({ children, close }) {
    return (
        <div
            className={styles.popup}
            onClick={() => {
                // close modal when outside of modal is clicked
                close();
            }}
        >
            {children}
        </div>
    );
}

export default Popup;
