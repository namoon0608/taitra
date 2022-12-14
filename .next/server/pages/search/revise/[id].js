(() => {
var exports = {};
exports.id = 589;
exports.ids = [589];
exports.modules = {

/***/ 4517:
/***/ ((module) => {

// Exports
module.exports = {
	"popup": "Popup_popup__rP7zX"
};


/***/ }),

/***/ 9929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Popup_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4517);
/* harmony import */ var _styles_Popup_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Popup_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Popup({ children , close  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Popup_module_scss__WEBPACK_IMPORTED_MODULE_2___default().popup),
        onClick: ()=>{
            // close modal when outside of modal is clicked
            close();
        },
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ }),

/***/ 2021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Revise),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4269);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(558);
/* harmony import */ var _Components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3806);
/* harmony import */ var _styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2325);
/* harmony import */ var _styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_Popup_Popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9929);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1635);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3349);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Nav__WEBPACK_IMPORTED_MODULE_3__]);
_Components_Nav__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














async function getServerSideProps({ locale , query , req , res  }) {
    let oldCookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_12__.getCookie)("sid", {
        req,
        res
    });
    if (query.sid !== undefined) {
        if (query.sid !== oldCookie) {
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_12__.setCookie)("sid", query.sid, {
                req,
                res,
                maxAge: 60 * 6 * 24
            });
        } else if (query.sid === (0,cookies_next__WEBPACK_IMPORTED_MODULE_12__.getCookie)("sid", {
            req,
            res
        })) {
            oldCookie = oldCookie;
        }
    } else if (query.sid === undefined || query.sid === "") {
        if (oldCookie !== undefined || oldCookie !== "") {
            oldCookie = oldCookie;
        }
        if (oldCookie === undefined) {
            return {
                redirect: {
                    destination: "https://www.taiwantradeshows.com.tw/zh_TW/index.html"
                }
            };
        }
    }
    const form = new URLSearchParams();
    form.append("sid", (0,cookies_next__WEBPACK_IMPORTED_MODULE_12__.getCookie)("sid", {
        req,
        res
    }));
    const sidForm = {
        method: "POST"
    };
    sidForm.body = form;
    const sidData = await fetch(`${process.env.API_BASE_URL}sso`, sidForm).then((response)=>response.json());
    if (sidData.status === false) {
        return {
            redirect: {
                destination: "https://www.taiwantradeshows.com.tw/zh_TW/index.html"
            }
        };
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            lang: locale,
            event_uid: sidData.event_uid,
            company_id: sidData.company_id
        })
    };
    const infoRes = await fetch(`${process.env.API_BASE_URL}getDiscountInfo`, options);
    const infoData = await infoRes.json();
    options.body.append("application_form_id", `${query.id}`);
    options.body.append("revised", "N");
    const reviseData = await fetch(`${process.env.API_BASE_URL}getReviseData`, options).then((response)=>response.json());
    console.log(reviseData);
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__.serverSideTranslations)(locale, [
                "common"
            ]),
            info: infoData,
            data: reviseData,
            sidData: sidData
        }
    };
}
function Revise(props) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: preview , 1: setPreview  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: revise , 1: setRevise  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: upNumber , 1: setUpNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: downNumber , 1: setDownNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const { 0: reviseItems , 1: setReviseItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const initProducts = async ()=>{
        const form = new FormData();
        form.append("application_form_id", router.query.id);
        form.append("event_uid", props.sidData.event_uid);
        form.append("company_id", props.sidData.company_id);
        form.append("revised", "Y");
        const options = {
            method: "POST"
        };
        options.body = form;
        setLoading(true);
        const result = await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}getReviseData`, options).then((response)=>response.json())// .then((response) => {
        //     setData(response);
        //     // console.log(response);
        //     setLoading(false);
        // })
        .catch((err)=>console.error(err));
        setData(result);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (preview) {
            initProducts();
        }
    }, [
        preview
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (revise) {
            initProducts();
            setTimeout(()=>{
                setRevise(false);
            }, "1000");
            console.log(data);
        }
    }, [
        revise
    ]);
    const close = ()=>{
        setShow(false);
        setPreview(false);
    };
    const cancelSupplement = ()=>{
        router.push("/search");
    };
    const handleSubmit = async ()=>{
        const form = new FormData();
        form.append("application_form_id", router.query.id);
        form.append("event_uid", props.sidData.event_uid);
        form.append("company_id", props.sidData.company_id);
        const options = {
            method: "POST"
        };
        options.body = form;
        await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}setReviseConfirm`, options).then((response)=>response.json()).then((response)=>{
            console.log(response);
            router.push("/search");
        }).catch((err)=>console.error(err));
    };
    const handlePreview = async ()=>{
        const form = new FormData();
        form.append("application_form_id", router.query.id);
        form.append("proxy_company_name", document.querySelectorAll('input[name="company"]')[0].value);
        form.append("proxy_tax_id", document.querySelectorAll('input[name="uniformNum"]')[0].value);
        form.append("proxy_contact_person", document.querySelectorAll('input[name="contactPerson"]')[0].value);
        form.append("proxy_email", document.querySelectorAll('input[name="email"]')[0].value);
        form.append("proxy_phone", document.querySelectorAll('input[name="phone"]')[0].value);
        form.append("invoice_company_name", document.querySelectorAll('input[name="company"]')[1].value);
        form.append("invoice_address", document.querySelector('input[name="address"]').value);
        form.append("invoice_tax_id", document.querySelectorAll('input[name="uniformNum"]')[1].value);
        form.append("remark", document.querySelectorAll('textarea[name="remark"]')[0].value);
        form.append("event_uid", props.sidData.event_uid);
        form.append("company_id", props.sidData.company_id);
        form.append("items", JSON.stringify(reviseItems));
        const options = {
            method: "POST",
            body: new URLSearchParams({
                lang: router.locale,
                application_form_id: router.query.id
            })
        };
        options.body = form;
        await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}setRevise`, options).then((response)=>response.json()).then((response)=>{
            console.log(response);
            setPreview(true);
        }).catch((err)=>console.error(err));
    };
    const handleRevise = async ()=>{
        let items = [];
        const form = new FormData();
        const checkBoxsOne = document.querySelectorAll(".Apply_aGroup__d5k3g input[type='checkbox']");
        const checkBoxsTwo = document.querySelectorAll(".Apply_bGroup__8er2v input[type='checkbox']");
        for (let check of checkBoxsOne){
            if (check.checked) {
                items.push({
                    item_id: check.value,
                    quantity: "1"
                });
            }
        }
        for (let check1 of checkBoxsTwo){
            if (check1.checked) {
                let num = check1.nextSibling.nextSibling.childNodes[1];
                items.push({
                    item_id: check1.value,
                    quantity: num.value
                });
            }
        }
        form.append("application_form_id", router.query.id);
        form.append("proxy_company_name", document.querySelectorAll('input[name="company"]')[0].value);
        form.append("proxy_tax_id", document.querySelectorAll('input[name="uniformNum"]')[0].value);
        form.append("proxy_contact_person", document.querySelectorAll('input[name="contactPerson"]')[0].value);
        form.append("proxy_email", document.querySelectorAll('input[name="email"]')[0].value);
        form.append("proxy_phone", document.querySelectorAll('input[name="phone"]')[0].value);
        form.append("invoice_company_name", document.querySelectorAll('input[name="company"]')[1].value);
        form.append("invoice_address", document.querySelector('input[name="address"]').value);
        form.append("invoice_tax_id", document.querySelectorAll('input[name="uniformNum"]')[1].value);
        form.append("remark", document.querySelectorAll('textarea[name="remark"]')[0].value);
        form.append("event_uid", props.sidData.event_uid);
        form.append("company_id", props.sidData.company_id);
        form.append("items", JSON.stringify(items));
        setReviseItems(items);
        const options = {
            method: "POST",
            body: new URLSearchParams({
                lang: router.locale,
                application_form_id: router.query.id
            })
        };
        options.body = form;
        await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}setRevise`, options).then((response)=>response.json()).then((response)=>{
            console.log(response);
            setShow(false);
            setRevise(true);
        }).catch((err)=>console.error(err));
    };
    const active = (e)=>{
        if (e.target.checked) {
            e.target.parentNode.className = (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive);
        } else {
            e.target.parentNode.className = "";
        }
    };
    const enableNextTextBox = (e)=>{
        if (e.target.checked) {
            e.target.nextSibling.nextSibling.childNodes[1].removeAttribute("disabled");
            e.target.nextSibling.nextSibling.childNodes[1].min = 1;
            e.target.nextSibling.nextSibling.childNodes[1].value = 1;
            e.target.parentNode.className = (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive);
        } else {
            e.target.nextSibling.nextSibling.childNodes[1].setAttribute("disabled", "");
            e.target.nextSibling.nextSibling.childNodes[1].value = 0;
            e.target.parentNode.className = "";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "TAITRA"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/img/logo.svg"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Nav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_Hero__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                info: props.info,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: t("search.revise")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkForm),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: t("search.option")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().opinionBox)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "?????????????????????????????????"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().form),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "????????????"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "company",
                                                type: "text",
                                                defaultValue: props.data.proxy.proxy_company_name,
                                                maxLength: 30
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "????????????"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "uniformNum",
                                                type: "text",
                                                defaultValue: props.data.proxy.proxy_tax_id,
                                                maxLength: 8,
                                                value: upNumber,
                                                onChange: (e)=>setUpNumber(e.target.value.replace(/[^\d]/g, ""))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "?????????"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "contactPerson",
                                                type: "text",
                                                defaultValue: props.data.proxy.proxy_contact_person,
                                                maxLength: 20
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "????????????"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "phone",
                                                type: "text",
                                                defaultValue: props.data.proxy.proxy_phone,
                                                maxLength: 20
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "E-mail"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "email",
                                                type: "email",
                                                defaultValue: props.data.proxy.proxy_email
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "??????????????????"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().form),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "????????????"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "company",
                                                type: "text",
                                                defaultValue: props.data.invoice.invoice_comapny,
                                                maxLength: 30
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "????????????"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "uniformNum",
                                                type: "text",
                                                maxLength: 8,
                                                value: downNumber,
                                                onChange: (e)=>setDownNumber(e.target.value.replace(/[^\d]/g, "")),
                                                defaultValue: props.data.invoice.invoice_taxid
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "??????????????????"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "address",
                                                type: "text",
                                                maxLength: 30,
                                                defaultValue: props.data.invoice.invoice_address
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: [
                                            (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                            (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().prepare)
                                        ].join(" "),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "prepare",
                                                children: "??????"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                name: "remark",
                                                defaultValue: props.data.invoice.remark
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().reviseTitle),
                                children: [
                                    "????????????????????????",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().revise),
                                        onClick: ()=>setShow(true),
                                        children: "??????"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().applyItem),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        style: {
                                                            width: "7%"
                                                        },
                                                        children: "??????"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        style: {
                                                            width: "60%"
                                                        },
                                                        children: "????????????"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        style: {
                                                            width: "11%"
                                                        },
                                                        children: "??????"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        style: {
                                                            width: "11%"
                                                        },
                                                        children: "??????"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        style: {
                                                            width: "11%"
                                                        },
                                                        children: "??????"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            children: data !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    data.hydro_items_trial.items.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().content),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: item.index
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        style: {
                                                                            textAlign: "left",
                                                                            paddingLeft: "15px"
                                                                        },
                                                                        children: item.item
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: item.quantity
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: item.price
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: item.sum
                                                                    })
                                                                ]
                                                            }, idx)
                                                        })),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sum),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sumTitle),
                                                                children: t("applyForm.preview.groupThree.total")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: data.hydro_items_trial.total_sum
                                                            })
                                                        ]
                                                    }),
                                                    data.discount.discount_value !== "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sum),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sumTitle),
                                                                        children: data.discount.discount_type
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: data.discount.discount_price
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sum),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sumTitle),
                                                                        children: "??????"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: data.discount.finally_sum
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }) : null
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    props.data.hydro_items_trial.items.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().content),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    children: item.index
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    style: {
                                                                        textAlign: "left",
                                                                        paddingLeft: "15px"
                                                                    },
                                                                    children: item.item
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    children: item.quantity
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    children: item.price
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    children: item.sum
                                                                })
                                                            ]
                                                        }, idx)),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sum),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sumTitle),
                                                                children: t("applyForm.preview.groupThree.total")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: props.data.hydro_items_trial.total_sum
                                                            })
                                                        ]
                                                    }),
                                                    props.data.discount.discount_value !== "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sum),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sumTitle),
                                                                        children: props.data.discount.discount_type
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: props.data.discount.discount_price
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sum),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sumTitle),
                                                                        children: "??????"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: props.data.discount.finally_sum
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }) : null
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Popup_Popup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        close: close,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().applyCheckBox),
                            onClick: (e)=>{
                                // do not close modal if anything inside modal content is clicked
                                e.stopPropagation();
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "????????????????????????"
                                }),
                                data !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().group),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "???.??????110V?????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemA")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().aGroup),
                                                                        children: data.hydro_items[0].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: active,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: item.price
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: active
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: item.price
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "B. ??????220V?????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemBCD")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: data.hydro_items[1].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "C. ??????380V?????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemBCD")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: data.hydro_items[2].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "D. ??????440V?????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemBCD")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: data.hydro_items[3].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "E. 24????????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemBCD")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: data.hydro_items[4].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "F. ????????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemE")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: data.hydro_items[5].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "G. ????????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemF")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: data.hydro_items[6].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().group),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "???.??????110V?????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemA")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().aGroup),
                                                                        children: props.data.hydro_items[0].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: active,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: item.price
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: active
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: item.price
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "B. ??????220V?????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemBCD")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: props.data.hydro_items[1].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "C. ??????380V?????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemBCD")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: props.data.hydro_items[2].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "D. ??????440V?????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemBCD")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: props.data.hydro_items[3].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "E. 24????????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemBCD")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: props.data.hydro_items[4].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "F. ????????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemE")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: props.data.hydro_items[5].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active), 
                                                                ].join(" "),
                                                                onClick: toggle,
                                                                children: [
                                                                    "G. ????????????",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 9L8 2L15 9",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "10",
                                                                            viewBox: "0 0 16 10",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M15 1L8 8L1 1",
                                                                                stroke: "white",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: t("applyForm.stepTwo.itemF")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bGroup),
                                                                        children: props.data.hydro_items[6].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkedActive),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox,
                                                                                            defaultChecked: true
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "1",
                                                                                                    defaultValue: item.quantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: item.item_id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            id: item.item_id,
                                                                                            value: item.item_id,
                                                                                            onChange: enableNextTextBox
                                                                                        }),
                                                                                        item.name,
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().num),
                                                                                            children: [
                                                                                                t("applyForm.stepTwo.quantity"),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                    type: "number",
                                                                                                    min: "0",
                                                                                                    disabled: true
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.prcie,
                                                                                                "/",
                                                                                                t("applyForm.stepTwo.set")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, item.item_id)
                                                                            }))
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().btns),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cancel),
                                            onClick: close,
                                            children: "??????"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().complete),
                                            onClick: handleRevise,
                                            children: "??????"
                                        })
                                    ]
                                })
                            ]
                        })
                    }) : null,
                    preview ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Popup_Popup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        close: close,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().applyCheckBox),
                            onClick: (e)=>{
                                // do not close modal if anything inside modal content is clicked
                                e.stopPropagation();
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().form),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: t("applyForm.preview.groupOne.title")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formComplete),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: t("applyForm.preview.groupOne.companyName")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: document.querySelectorAll('input[name="company"]')[0].value
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: t("applyForm.preview.groupOne.taxID")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: document.querySelectorAll('input[name="uniformNum"]')[0].value
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: t("applyForm.preview.groupOne.contactPerson")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: document.querySelectorAll('input[name="contactPerson"]')[0].value
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: t("applyForm.preview.groupOne.phone")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: document.querySelectorAll('input[name="phone"]')[0].value
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: "E-mail"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: document.querySelectorAll('input[name="email"]')[0].value
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: t("applyForm.preview.groupTwo.title")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formCompleteInvoce),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: t("applyForm.preview.groupTwo.companyName")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: document.querySelectorAll('input[name="company"]')[1].value
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: t("applyForm.preview.groupTwo.taxID")
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            children: [
                                                                " ",
                                                                document.querySelectorAll('input[name="uniformNum"]')[1].value
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            children: [
                                                                " ",
                                                                t("applyForm.preview.groupTwo.invoiceAddress")
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: document.querySelector('input[name="address"]').value
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formRow),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            children: [
                                                                " ",
                                                                t("applyForm.preview.groupTwo.remark"),
                                                                "???"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            children: [
                                                                " ",
                                                                document.querySelectorAll('textarea[name="remark"]')[0].value
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: t("applyForm.preview.groupThree.title")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().applyItem),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                    children: t("applyForm.preview.groupThree.no")
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                    children: t("applyForm.preview.groupThree.item")
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                    children: t("applyForm.preview.groupThree.quantity")
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                    children: t("applyForm.preview.groupThree.unitPrice")
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                    children: t("applyForm.preview.groupThree.itemCost")
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                        children: data !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                data.hydro_items_trial.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().content),
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: item.index
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    style: {
                                                                                        textAlign: "left",
                                                                                        paddingLeft: "15px"
                                                                                    },
                                                                                    children: item.item
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: item.quantity
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: item.price
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: item.sum
                                                                                })
                                                                            ]
                                                                        }, item.index)
                                                                    })),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sum),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sumTitle),
                                                                            children: t("applyForm.preview.groupThree.total")
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: data.hydro_items_trial.total_sum
                                                                        })
                                                                    ]
                                                                }),
                                                                data.discount.discount_value !== "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sum),
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sumTitle),
                                                                                    children: data.discount.discount_type
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: data.discount.discount_price
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sum),
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sumTitle),
                                                                                    children: "??????"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: data.discount.finally_sum
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }) : null
                                                            ]
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: "Loading..."
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().btns),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cancel),
                                            onClick: close,
                                            children: "??????"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().complete),
                                            onClick: handleSubmit,
                                            children: "??????"
                                        })
                                    ]
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().btns),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cancel),
                                onClick: cancelSupplement,
                                children: "??????"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_13___default().complete),
                                onClick: handlePreview,
                                children: "??????"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ 8982:
/***/ ((module) => {

"use strict";
module.exports = require("cookies-next");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("react-slide-toggle");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,845,325], () => (__webpack_exec__(2021)));
module.exports = __webpack_exports__;

})();