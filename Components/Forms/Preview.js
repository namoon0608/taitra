import { useState, useEffect } from "react";
import styles from "../../styles/Form.module.scss";
import { Form } from "@unform/web";
import { useRouter } from "next/router";
import axios from "axios";

export default function Preview({
    formStep,
    nextFormStep,
    applicatonId,
    dataID,
}) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    async function initProducts() {
        const options = {
            method: "POST",
            headers: {
                // cookie: "ci_session=8v7iclm76gcb6fsic32lodnk29j11j6b",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                lang: router.locale,
                application_form_id: dataID,
                sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
            }),
        };
        setLoading(true);
        await fetch(`${process.env.customKey}getPreview`, options)
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                console.log(response);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }
    useEffect(() => {
        initProducts();
    }, []);

    async function handleSubmit() {
        const options = {
            method: "POST",
            headers: {
                // cookie: "ci_session=b49bmqbdckrr8bpfre3h8ncme6nohol9",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a",
            }),
        };
        await fetch(`${process.env.customKey}sumbitApply`, options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                alert(response.msg);
                router.push("/");
            })
            .catch((err) => console.error(err));
    }

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;
    return (
        <div className={styles.form}>
            <button className={styles.temporary} style={{ display: "none" }}>
                暫存
            </button>
            <Form onSubmit={handleSubmit}>
                <h2>代理或裝潢公司基本資料</h2>
                <div className={styles.formComplete}>
                    <div className={styles.formRow}>
                        <label>公司名稱</label>
                        <p>{data.proxy.proxy_company_name}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>統一編號</label>
                        <p>{data.proxy.proxy_tax_id}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>聯絡人</label>
                        <p>{data.proxy.proxy_contact_person}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>聯絡電話</label>
                        <p>{data.proxy.proxy_phone}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>E-mail</label>
                        <p>{data.proxy.proxy_email}</p>
                    </div>
                </div>
                <h2>開立發票資訊</h2>
                <div className={styles.formCompleteInvoce}>
                    <div className={styles.formRow}>
                        <label>公司名稱</label>
                        <p>{data.invoice.invoice_company}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>統一編號</label>
                        <p>{data.invoice.invoice_taxid}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>發票寄送地址</label>
                        <p>{data.invoice.invoice_address}</p>
                    </div>
                    <div className={styles.formRow}>
                        <label>備註：</label>
                        <p>{data.invoice.remark}</p>
                    </div>
                </div>
                <h2>水電追加申請項目</h2>
                {data.hydro_items.items.length === 0 ? (
                    <div>使用大會免費基本用電</div>
                ) : (
                    <div className={styles.applyItem}>
                        <table>
                            <thead>
                                <tr className={styles.title}>
                                    <th>項次</th>
                                    <th>申請項目</th>
                                    <th>數量</th>
                                    <th>單價</th>
                                    <th>複價</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.hydro_items.items.map((item) => (
                                    <>
                                        <tr
                                            className={styles.content}
                                            key={item.index}
                                        >
                                            <td>{item.index}</td>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                            <td>{item.sum}</td>
                                        </tr>
                                    </>
                                ))}
                                <tr className={styles.sum}>
                                    <td className={styles.sumTitle} colSpan={4}>
                                        合計總金額
                                    </td>
                                    <td>{data.hydro_items.total_sum}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                <h2>水電配置圖</h2>
                {data.imageData_file === "" ? (
                    <div>待補件上傳</div>
                ) : (
                    <div className={styles.image}>
                        <p>
                            檔案 <span>JO318水電圖圖.jpg</span>
                        </p>
                        <img src={data.imageData_file} />
                    </div>
                )}
                <button type="submit" className={styles.complete}>
                    完成申請
                </button>
            </Form>
        </div>
    );
}
