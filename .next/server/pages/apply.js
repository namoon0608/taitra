(() => {
var exports = {};
exports.id = 805;
exports.ids = [805];
exports.modules = {

/***/ 3929:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "Form_form__0sFOU",
	"applyItem": "Form_applyItem__voiIj",
	"title": "Form_title__g5jA3",
	"content": "Form_content__KkqlP",
	"sum": "Form_sum__AyljF",
	"sumTitle": "Form_sumTitle__lVWRG",
	"companyGroupOne": "Form_companyGroupOne__sEGQ5",
	"companyGroupTwo": "Form_companyGroupTwo__UTTIS",
	"formRow": "Form_formRow__AehrI",
	"address": "Form_address__LoRLg",
	"prepare": "Form_prepare__nY8tz",
	"addressGroup": "Form_addressGroup__0zMbH",
	"firstNext": "Form_firstNext__UjBNa",
	"hideForm": "Form_hideForm__6xy36",
	"showForm": "Form_showForm__XfnhG",
	"back": "Form_back__sPnml",
	"next": "Form_next__yjXw8",
	"complete": "Form_complete__UujCQ",
	"write": "Form_write__zhFbU",
	"upload": "Form_upload__pLMwj",
	"formComplete": "Form_formComplete__asvg1",
	"formCompleteInvoce": "Form_formCompleteInvoce__BiS7h",
	"card": "Form_card__pIrGB",
	"dropDown": "Form_dropDown__GecoI",
	"active": "Form_active__UXSwX",
	"cardBody": "Form_cardBody__h2ZPY",
	"dropDownContent": "Form_dropDownContent__6Lw7g",
	"bGroup": "Form_bGroup__4aN8N",
	"num": "Form_num__Jhrwz",
	"aGroup": "Form_aGroup__FN6oc",
	"applyDefault": "Form_applyDefault__7m2pa",
	"applyCheckBox": "Form_applyCheckBox___CxgN",
	"checkedActive": "Form_checkedActive__FJhsG"
};


/***/ }),

/***/ 6984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Basic)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3732);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_unform_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Input_Fields_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1144);






function Basic({ formStep , nextFormStep  }) {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const schema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
        company: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("required"),
        uniformNum: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("required"),
        contactPerson: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("required"),
        email: yup__WEBPACK_IMPORTED_MODULE_2__.string().email().required("required"),
        phone: yup__WEBPACK_IMPORTED_MODULE_2__.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
        address: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(2, "Too short").required("required")
    });
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    async function handleSubmit(data) {
        nextFormStep();
    // const validationResult = await schema
    //     .validate(data, { abortEarly: false })
    //     .catch((err) => {
    //         return err;
    //     });
    // console.log(validationResult.inner);
    // if (validationResult.inner === undefined) {
    //     nextFormStep();
    // } else if (validationResult.inner !== undefined) {
    //     alert("請完整填寫");
    // }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
            formStep === 0 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().showForm) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hideForm), 
        ].join(" "),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "參展廠商基本資料"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().companyGroupOne),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: "攤位名稱"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: "尚立資訊有限公司"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: "攤位號碼"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: "J0318"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: "攤位數量"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: "3 個"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: "聯絡人"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: "陳毅豪"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: "聯絡電話"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: "02-89798677"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: "統一編號"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: "83465356"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().companyGroupTwo),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: "E-mail"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: "kc@suso.com.tw"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: "地址"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: "台北市南京東路四段1號2樓"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_3__.Form, {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "代理或裝潢公司基本資料"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    name: "company",
                                    label: "公司名稱",
                                    type: "text",
                                    placeholder: "請輸入公司名稱"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    name: "uniformNum",
                                    label: "統一編號",
                                    type: "text",
                                    placeholder: "請輸入統一編號"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    name: "contactPerson",
                                    label: "聯絡人",
                                    type: "text",
                                    placeholder: "請輸入聯絡人姓名"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    name: "email",
                                    label: "E-mail",
                                    type: "email",
                                    placeholder: "請輸入電子郵件"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    name: "phone",
                                    label: "聯絡電話",
                                    type: "tel",
                                    placeholder: "請輸入聯絡電話"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "開立發票資訊"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().addressGroup),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: "company_address",
                                            children: [
                                                "同參展廠商",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "radio",
                                                    id: "company_address",
                                                    name: "drone",
                                                    value: "company_address"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: "agent_address",
                                            children: [
                                                "同代理或裝潢公司",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "radio",
                                                    id: "agent_address",
                                                    name: "drone",
                                                    value: "agent_address"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: [
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().address)
                                ].join(" "),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    name: "address",
                                    label: "發票寄送地址",
                                    type: "text",
                                    placeholder: "請輸入發票寄送地址"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: [
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().prepare)
                                ].join(" "),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "prepare",
                                        children: "備註"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().firstNext),
                        children: "下一步"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Choose)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Form.module.scss
var Form_module = __webpack_require__(3929);
var Form_module_default = /*#__PURE__*/__webpack_require__.n(Form_module);
// EXTERNAL MODULE: external "@unform/web"
var web_ = __webpack_require__(3732);
;// CONCATENATED MODULE: external "react-slide-toggle"
const external_react_slide_toggle_namespaceObject = require("react-slide-toggle");
var external_react_slide_toggle_default = /*#__PURE__*/__webpack_require__.n(external_react_slide_toggle_namespaceObject);
;// CONCATENATED MODULE: ./Components/Forms/Choose.js






function Choose({ formStep , nextFormStep  }) {
    async function handleSubmit(data) {
        console.log(data);
        nextFormStep();
    // const validationResult = await schema
    //     .validate(data, { abortEarly: false })
    //     .then()
    //     .catch((err) => {
    //         return err;
    //     });
    // console.log(validationResult.inner);
    }
    const active = (e)=>{
        if (e.target.checked) {
            e.target.parentNode.className = (Form_module_default()).checkedActive;
        } else {
            e.target.parentNode.className = "";
        }
    };
    const enableNextTextBox = (e)=>{
        if (e.target.checked) {
            e.target.nextSibling.nextSibling.childNodes[1].removeAttribute("disabled");
            e.target.parentNode.className = (Form_module_default()).checkedActive;
        } else {
            e.target.nextSibling.nextSibling.childNodes[1].setAttribute("disabled", "");
            e.target.nextSibling.nextSibling.childNodes[1].value = null;
            e.target.parentNode.className = "";
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: [
            (Form_module_default()).form,
            formStep === 1 ? (Form_module_default()).showForm : (Form_module_default()).hideForm, 
        ].join(" "),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(web_.Form, {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "水電追加申請項目"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Form_module_default()).applyDefault,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "checkbox",
                            id: "chooseDefault",
                            value: "useDefault"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "chooseDefault",
                            children: "只使用大會提供每 1 攤位免費基本用電 110V 0.5KW"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Form_module_default()).applyCheckBox,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_slide_toggle_default()), {
                            duration: 1000,
                            collapsed: true,
                            whenReversedUseBackwardEase: false,
                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Form_module_default()).card,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-header",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: [
                                                    (Form_module_default()).dropDown,
                                                    toggleState === "COLLAPSED" ? (Form_module_default()).dropDown : (Form_module_default()).active, 
                                                ].join(" "),
                                                onClick: toggle,
                                                children: [
                                                    "Ａ.用電110V電源箱",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M1 9L8 2L15 9",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M15 1L8 8L1 1",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Form_module_default()).cardBody,
                                            ref: setCollapsibleElement,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (Form_module_default()).dropDownContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "110V 用電計算說明： 0.5KW(千瓦)＝500W(瓦)＝5A(安培)；1KW(千瓦)＝1000W(瓦)＝10A(安培 (a) 110V攤位總用電量(KW)＝攤位上照明用電＋各種電器用品用電(電視、開飲機、電腦等)＋展示產品用電....總計。 (b) 110V免費累計電量(KW)＝參展攤位數 X 500W（每1攤位500W免費) (c) 1100V需追申請之電量(KW)＝110V攤位總用電量扣除了110V免費累計電量；(a) - (b) = (c) 。 請點選計算出的 (c) 值"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (Form_module_default()).aGroup,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                htmlFor: "500W",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "checkbox",
                                                                        id: "500W",
                                                                        value: "110V_5A",
                                                                        onChange: active
                                                                    }),
                                                                    "單 相 110V 5A （500W）",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "$ 650"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                htmlFor: "1000W",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "checkbox",
                                                                        id: "1000W",
                                                                        value: "110V_10A",
                                                                        onChange: active
                                                                    }),
                                                                    "單 相 110V 10A（1,000W）",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "$ 1,300"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                htmlFor: "1500W",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "checkbox",
                                                                        id: "1500W",
                                                                        value: "110V_15A",
                                                                        onChange: active
                                                                    }),
                                                                    "單 相 110V 15A（1,500W）",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "$ 1,950"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                htmlFor: "2KW",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "checkbox",
                                                                        id: "2KW",
                                                                        value: "110V/190V_2",
                                                                        onChange: active
                                                                    }),
                                                                    "三 相 110V/190V 2KW",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "$ 2,600"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                htmlFor: "4KW",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "checkbox",
                                                                        id: "4KW",
                                                                        value: "110V/190V_4",
                                                                        onChange: active
                                                                    }),
                                                                    "三 相 110V/190V 4KW",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "$ 5,200"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                htmlFor: "6KW",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "checkbox",
                                                                        id: "6KW",
                                                                        value: "110V/190V_6",
                                                                        onChange: active
                                                                    }),
                                                                    "三 相 110V/190V 6KW",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "$ 7,800"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_slide_toggle_default()), {
                            duration: 1000,
                            collapsed: true,
                            whenReversedUseBackwardEase: false,
                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Form_module_default()).card,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-header",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: [
                                                    (Form_module_default()).dropDown,
                                                    toggleState === "COLLAPSED" ? (Form_module_default()).dropDown : (Form_module_default()).active, 
                                                ].join(" "),
                                                onClick: toggle,
                                                children: [
                                                    "B. 用電220V電源箱",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M1 9L8 2L15 9",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M15 1L8 8L1 1",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Form_module_default()).cardBody,
                                            ref: setCollapsibleElement,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Form_module_default()).dropDownContent,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (Form_module_default()).bGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                            htmlFor: "220V_15A",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "checkbox",
                                                                    id: "220V_15A",
                                                                    value: "220V_15A",
                                                                    onChange: enableNextTextBox
                                                                }),
                                                                "三相 220V 動力用電 15A",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                    className: (Form_module_default()).num,
                                                                    children: [
                                                                        "數量",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "number",
                                                                            disabled: true
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "$ 2,994/組"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                            htmlFor: "220V_20A",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "checkbox",
                                                                    id: "220V_20A",
                                                                    value: "220V_20A",
                                                                    onChange: enableNextTextBox
                                                                }),
                                                                "三相 220V 動力用電 20A",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                    className: (Form_module_default()).num,
                                                                    children: [
                                                                        "數量",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "number",
                                                                            disabled: true
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "$ 5,889/組"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                            htmlFor: "220V_30A",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "checkbox",
                                                                    id: "220V_30A",
                                                                    value: "220V_30A",
                                                                    onChange: enableNextTextBox
                                                                }),
                                                                "三相 220V 動力用電 30A",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                    className: (Form_module_default()).num,
                                                                    children: [
                                                                        "數量",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "number",
                                                                            disabled: true
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "$ 7,834/組"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_slide_toggle_default()), {
                            duration: 1000,
                            collapsed: true,
                            whenReversedUseBackwardEase: false,
                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Form_module_default()).card,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-header",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: [
                                                    (Form_module_default()).dropDown,
                                                    toggleState === "COLLAPSED" ? (Form_module_default()).dropDown : (Form_module_default()).active, 
                                                ].join(" "),
                                                onClick: toggle,
                                                children: [
                                                    "C. 用電380V電源箱",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M1 9L8 2L15 9",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M15 1L8 8L1 1",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Form_module_default()).cardBody,
                                            ref: setCollapsibleElement,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Form_module_default()).dropDownContent,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (Form_module_default()).bGroup,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "380V",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "checkbox",
                                                                id: "380V",
                                                                value: "380V",
                                                                onChange: enableNextTextBox
                                                            }),
                                                            "用電380V電源箱",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                className: (Form_module_default()).num,
                                                                children: [
                                                                    "數量",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "number",
                                                                        disabled: true
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "$ 2,994/組"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_slide_toggle_default()), {
                            duration: 1000,
                            collapsed: true,
                            whenReversedUseBackwardEase: false,
                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Form_module_default()).card,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-header",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: [
                                                    (Form_module_default()).dropDown,
                                                    toggleState === "COLLAPSED" ? (Form_module_default()).dropDown : (Form_module_default()).active, 
                                                ].join(" "),
                                                onClick: toggle,
                                                children: [
                                                    "D. 24小時用電",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M1 9L8 2L15 9",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M15 1L8 8L1 1",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Form_module_default()).cardBody,
                                            ref: setCollapsibleElement,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Form_module_default()).dropDownContent,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (Form_module_default()).bGroup,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "electricity",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "checkbox",
                                                                id: "electricity",
                                                                value: "electricity",
                                                                onChange: enableNextTextBox
                                                            }),
                                                            "24小時用電",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                className: (Form_module_default()).num,
                                                                children: [
                                                                    "數量",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "number",
                                                                        disabled: true
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "$ 2,994/組"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_slide_toggle_default()), {
                            duration: 1000,
                            collapsed: true,
                            whenReversedUseBackwardEase: false,
                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Form_module_default()).card,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-header",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: [
                                                    (Form_module_default()).dropDown,
                                                    toggleState === "COLLAPSED" ? (Form_module_default()).dropDown : (Form_module_default()).active, 
                                                ].join(" "),
                                                onClick: toggle,
                                                children: [
                                                    "E. 給排水管",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M1 9L8 2L15 9",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M15 1L8 8L1 1",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Form_module_default()).cardBody,
                                            ref: setCollapsibleElement,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Form_module_default()).dropDownContent,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (Form_module_default()).bGroup,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "drain_pipe",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "checkbox",
                                                                id: "drain_pipe",
                                                                value: "drain_pipe",
                                                                onChange: enableNextTextBox
                                                            }),
                                                            "給排水管",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                className: (Form_module_default()).num,
                                                                children: [
                                                                    "數量",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "number",
                                                                        disabled: true
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "$ 5,000 /組"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_slide_toggle_default()), {
                            duration: 1000,
                            collapsed: true,
                            whenReversedUseBackwardEase: false,
                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Form_module_default()).card,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card-header",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: [
                                                    (Form_module_default()).dropDown,
                                                    toggleState === "COLLAPSED" ? (Form_module_default()).dropDown : (Form_module_default()).active, 
                                                ].join(" "),
                                                onClick: toggle,
                                                children: [
                                                    "F. 壓縮空氣",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: toggleState === "EXPANDED" || toggleState === "EXPANDING" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M1 9L8 2L15 9",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "10",
                                                            viewBox: "0 0 16 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M15 1L8 8L1 1",
                                                                stroke: "white",
                                                                strokeWidth: "2"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Form_module_default()).cardBody,
                                            ref: setCollapsibleElement,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Form_module_default()).dropDownContent,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (Form_module_default()).bGroup,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "press_air",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "checkbox",
                                                                id: "press_air",
                                                                value: "press_air",
                                                                onChange: enableNextTextBox
                                                            }),
                                                            "壓縮空氣",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                className: (Form_module_default()).num,
                                                                children: [
                                                                    "數量",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "number",
                                                                        disabled: true
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "$ 2,994/組"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "submit",
                    className: (Form_module_default()).next,
                    children: "下一步"
                })
            ]
        })
    });
};


/***/ }),

/***/ 8041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Preview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3732);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_unform_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1144);





const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    company: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("required"),
    uniformNum: yup__WEBPACK_IMPORTED_MODULE_1__.number().integer().required("required").max(8).min(8),
    contactPerson: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("required"),
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required("required"),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
    address: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(2, "Too short").required("required")
});
function Preview({ formStep , nextFormStep  }) {
    async function handleSubmit(data) {
        console.log(data);
    // const validationResult = await schema
    //     .validate(data, { abortEarly: false })
    //     .then(nextFormStep())
    //     .catch((err) => {
    //         return err;
    //     });
    // console.log(validationResult.inner);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_2__.Form, {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "代理或裝潢公司基本資料"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formComplete),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "公司名稱"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "丰彤設計有限公司"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "統一編號"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "12653758"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "聯絡人"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "張書源"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "聯絡電話"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "02-28962689 分機 221"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "E-mail"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "1fontal1999@gmail.com"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "開立發票資訊"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formCompleteInvoce),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "公司名稱"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "尚立資訊有限公司"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "統一編號"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "83465356"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "發票寄送地址"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "台北市南京東路四段1號2樓"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "備註："
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {})
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "水電追加申請項目"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().applyItem),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "項次"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "申請項目"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "數量"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "單價"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "複價"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "用電110V電源箱 - 單相 110V 15A (1,500W)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1,950"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1,950"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "用電110V電源箱 - 單相 110V 15A (1,500W)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1,950"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1,950"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "3"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "用電110V電源箱 - 單相 110V 15A (1,500W)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1,950"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1,950"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "4"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "用電110V電源箱 - 單相 110V 15A (1,500W)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1,950"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "1,950"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sum),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sumTitle),
                                                colSpan: 4,
                                                children: "合計總金額"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: "20,439"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "水電配置圖"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "檔案 ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "JO318水電圖圖.jpg"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/img/image14.png"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().complete),
                    children: "完成申請"
                })
            ]
        })
    });
};


/***/ }),

/***/ 7171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Write)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3732);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_unform_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1144);





const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const schema = yup.object().shape({
//     email: yup.string().email().required("Email is required"),
// });
const schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    company: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("required"),
    uniformNum: yup__WEBPACK_IMPORTED_MODULE_1__.number().integer().required("required").max(8).min(8),
    contactPerson: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("required"),
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required("required"),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
    address: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(2, "Too short").required("required")
});
function Write({ formStep , nextFormStep  }) {
    async function handleSubmit(data) {
        console.log(data);
        const validationResult = await schema.validate(data, {
            abortEarly: false
        }).then(nextFormStep()).catch((err)=>{
            return err;
        });
        console.log(validationResult.inner);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: [
            (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form),
            formStep === 2 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().showForm) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hideForm), 
        ].join(" "),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_2__.Form, {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "請上傳水電配置圖"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "checkbox",
                            id: "cbox1",
                            value: "first_checkbox"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "cbox1",
                            children: "水電配置圖尚未完成，待補件上傳"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().upload),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "upload-photo",
                            children: "請選擇檔案上傳"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            name: "photo",
                            id: "upload-photo"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "或以下方工具繪製水電配置圖"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/img/image7.png"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "水電配置圖範例"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().write),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "＃請標示鄰攤位及走道，方便識別攤位方位。"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/img/image21.png"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().next),
                    children: "下一步"
                })
            ]
        })
    });
};


/***/ }),

/***/ 1144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@unform/core"
const core_namespaceObject = require("@unform/core");
;// CONCATENATED MODULE: ./Components/Input Fields/Input.js



function Input({ name , label , ...rest }) {
    const inputRef = (0,external_react_.useRef)(null);
    const { fieldName , defaultValue ="" , registerField , error ,  } = (0,core_namespaceObject.useField)(name);
    (0,external_react_.useEffect)(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    }, [
        fieldName,
        registerField
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: fieldName,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ref: inputRef,
                id: fieldName,
                defaultValue: defaultValue,
                ...rest
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    color: "#f00"
                },
                children: error
            })
        ]
    });
};


/***/ }),

/***/ 6105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function FormCard({ children , currentStep , prevFormStep  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "",
        children: [
            currentStep < 4 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    currentStep > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().back),
                        onClick: prevFormStep,
                        type: "button",
                        children: "上一步"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "",
                        children: [
                            "Step ",
                            currentStep + 1,
                            " of 4"
                        ]
                    })
                ]
            }),
            children
        ]
    });
};


/***/ }),

/***/ 6014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Apply),
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
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3110);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_Stepper_FormCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6105);
/* harmony import */ var _Components_Forms_Basic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6984);
/* harmony import */ var _Components_Forms_Choose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3353);
/* harmony import */ var _Components_Forms_Write__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7171);
/* harmony import */ var _Components_Forms_Preview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8041);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Nav__WEBPACK_IMPORTED_MODULE_3__]);
_Components_Nav__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














async function getServerSideProps({ locale  }) {
    const options = {
        method: "POST",
        headers: {
            cookie: "ci_session=tm7raoegfru3cidh8r88ljnovjura42a",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            lang: locale,
            show_id: "FD"
        })
    };
    const res = await fetch(`${process.env.API_BASE_URL}getDiscountInfo`, options);
    const infoData = await res.json();
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__.serverSideTranslations)(locale, [
                "common"
            ]),
            info: infoData
        }
    };
}
function Apply(props) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const { 0: formStep , 1: setFormStep  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const nextFormStep = ()=>setFormStep((currentStep)=>currentStep + 1);
    const prevFormStep = ()=>setFormStep((currentStep)=>currentStep - 1);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_13___default().container),
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Hero__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                info: props.info,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_Stepper_FormCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    currentStep: formStep,
                    prevFormStep: prevFormStep,
                    children: [
                        formStep >= 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Forms_Basic__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            formStep: formStep,
                            nextFormStep: nextFormStep
                        }),
                        formStep >= 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Forms_Choose__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            formStep: formStep,
                            nextFormStep: nextFormStep
                        }),
                        formStep >= 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Forms_Write__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            formStep: formStep,
                            nextFormStep: nextFormStep
                        }),
                        formStep > 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Forms_Preview__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3732:
/***/ ((module) => {

"use strict";
module.exports = require("@unform/web");

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

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,845], () => (__webpack_exec__(6014)));
module.exports = __webpack_exports__;

})();