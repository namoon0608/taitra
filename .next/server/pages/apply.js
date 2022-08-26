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
	"image": "Form_image__JXwSJ",
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
	"temporary": "Form_temporary__yT_1v",
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
	"checkedActive": "Form_checkedActive__FJhsG",
	"steps": "Form_steps__lvY8Y",
	"step": "Form_step__ihYvP",
	"pass": "Form_pass__FCM_r",
	"uploadImg": "Form_uploadImg__oUHU_"
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
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3732);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_unform_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1144);




function Basic({ formStep , nextFormStep , stepOne , company  }) {
    const temporary = async ()=>{
        let company = document.getElementById("company").value;
        let uniformNum = document.getElementById("uniformNum").value;
        let contactPerson = document.getElementById("contactPerson").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let invoice = "";
        let address = document.getElementById("address").value;
        let remark = document.getElementById("remark").value;
        const radios = document.querySelectorAll('input[name="drone"]');
        for (let radio of radios){
            if (radio.checked) {
                invoice = radio.value;
            }
        }
        const options = {
            method: "POST",
            headers: {
                cookie: "ci_session=2tuoeunna8cs9312goi03j36jam80pm2",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                application_form_id: "",
                proxy_company_name: company,
                proxy_tax_id: uniformNum,
                proxy_contact_person: contactPerson,
                proxy_email: email,
                proxy_phone: phone,
                invoice: invoice,
                invoice_address: address,
                remark: remark,
                sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
            })
        };
        await fetch(`${"http://ewsadm.taiwantradeshows.com.tw/api/"}setApplyForm`, options).then((response)=>response.json()).then((response)=>{
            console.log(response);
            alert(response.msg);
        }).catch((err)=>console.error(err));
    };
    async function handleSubmit(data) {
        let remark = document.getElementById("remark").value;
        let invoice = "";
        const radios = document.querySelectorAll('input[name="drone"]');
        for (let radio of radios){
            if (radio.checked) {
                invoice = radio.value;
            }
        }
        const options = {
            method: "POST",
            headers: {
                cookie: "ci_session=2tuoeunna8cs9312goi03j36jam80pm2",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                application_form_id: "",
                proxy_company_name: data.compnay,
                proxy_tax_id: data.uniformNum,
                proxy_contact_person: data.contactPerson,
                proxy_email: data.email,
                proxy_phone: data.phone,
                invoice: invoice,
                invoice_address: data.address,
                remark: remark,
                sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
            })
        };
        await fetch(`${"http://ewsadm.taiwantradeshows.com.tw/api/"}setApplyForm`, options).then((response)=>response.json()).then((response)=>console.log(response)).then(nextFormStep()).catch((err)=>console.error(err));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),
            formStep === 0 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showForm) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hideForm), 
        ].join(" "),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().temporary),
                onClick: temporary,
                children: "暫存"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "參展廠商基本資料"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().companyGroupOne),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "攤位名稱"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                children: company.company.company_name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "攤位號碼"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                children: company.company.booth_no
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "攤位數量"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                children: [
                                    company.company.booth_cnt,
                                    " 個"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "聯絡人"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                children: company.company.contact_person
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "聯絡電話"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                children: company.company.com_tel
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "統一編號"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                children: company.company.tax_id
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().companyGroupTwo),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "E-mail"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                children: company.company.email
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "地址"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                children: company.company.address
                            })
                        ]
                    })
                ]
            }),
            stepOne.status === false ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_1__.Form, {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "代理或裝潢公司基本資料"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "company",
                                    label: "公司名稱",
                                    type: "text",
                                    placeholder: "請輸入公司名稱",
                                    id: "company"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "uniformNum",
                                    label: "統一編號",
                                    type: "text",
                                    placeholder: "請輸入統一編號",
                                    id: "uniformNum"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "contactPerson",
                                    label: "聯絡人",
                                    type: "text",
                                    placeholder: "請輸入聯絡人姓名",
                                    id: "contactPerson"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "email",
                                    label: "E-mail",
                                    type: "email",
                                    placeholder: "請輸入電子郵件",
                                    id: "email"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "phone",
                                    label: "聯絡電話",
                                    type: "tel",
                                    placeholder: "請輸入聯絡電話",
                                    id: "phone"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "開立發票資訊"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addressGroup),
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
                                                    value: "1",
                                                    defaultChecked: true
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
                                                    value: "2"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: [
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().address)
                                ].join(" "),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "address",
                                    label: "發票寄送地址",
                                    type: "text",
                                    placeholder: "請輸入發票寄送地址",
                                    id: "address"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: [
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().prepare)
                                ].join(" "),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "prepare",
                                        children: "備註"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        id: "remark"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().firstNext),
                        children: "下一步"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_1__.Form, {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "代理或裝潢公司基本資料"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "company",
                                    label: "公司名稱",
                                    type: "text",
                                    placeholder: "請輸入公司名稱",
                                    id: "company",
                                    defaultValue: stepOne.data.proxy_company_name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "uniformNum",
                                    label: "統一編號",
                                    type: "text",
                                    placeholder: "請輸入統一編號",
                                    id: "uniformNum",
                                    defaultValue: stepOne.data.proxy_tax_id
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "contactPerson",
                                    label: "聯絡人",
                                    type: "text",
                                    placeholder: "請輸入聯絡人姓名",
                                    id: "contactPerson",
                                    defaultValue: stepOne.data.proxy_contact_person
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "email",
                                    label: "E-mail",
                                    type: "email",
                                    placeholder: "請輸入電子郵件",
                                    id: "email",
                                    defaultValue: stepOne.data.proxy_email
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "phone",
                                    label: "聯絡電話",
                                    type: "tel",
                                    placeholder: "請輸入聯絡電話",
                                    id: "phone",
                                    defaultValue: stepOne.data.proxy_phone
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "開立發票資訊"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),
                        children: [
                            stepOne.data.invoice_title === "1" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addressGroup),
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
                                                    value: "1"
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
                                                    value: "2"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addressGroup),
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
                                                    value: "1"
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
                                                    value: "2",
                                                    defaultChecked: true
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: [
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().address)
                                ].join(" "),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    name: "address",
                                    label: "發票寄送地址",
                                    type: "text",
                                    placeholder: "請輸入發票寄送地址",
                                    id: "address",
                                    defaultValue: stepOne.data.invoice_address
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: [
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formRow),
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().prepare)
                                ].join(" "),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "prepare",
                                        children: "備註"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        id: "remark",
                                        defaultValue: stepOne.data.remark
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().firstNext),
                        children: "下一步"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Choose)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3732);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_unform_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_4__);






function Choose({ formStep , nextFormStep , priceData , stepTwo  }) {
    const temporary = async ()=>{
        const useDefault = document.getElementById("chooseDefault");
        let items = [];
        if (useDefault.checked) {
            const options = {
                method: "POST",
                headers: {
                    cookie: "ci_session=9lejfn4cgisk4havru3sjg4s9e8aiqho",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    application_form_id: "6305a2e49bdbf001",
                    base_option: "Y",
                    items: [],
                    sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
                })
            };
            await fetch(`${"http://ewsadm.taiwantradeshows.com.tw/api/"}setApplyHydroItems`, options).then((response)=>response.json()).then((response)=>console.log(response)).then(nextFormStep()).catch((err)=>console.error(err));
        } else {
            const checkBoxsOne = document.querySelectorAll(".Form_aGroup__FN6oc input[type='checkbox']");
            const checkBoxsTwo = document.querySelectorAll(".Form_bGroup__4aN8N input[type='checkbox']");
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
            const options1 = {
                method: "POST",
                headers: {
                    cookie: "ci_session=9lejfn4cgisk4havru3sjg4s9e8aiqho",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    application_form_id: "6305a2e49bdbf001",
                    base_option: "N",
                    items: JSON.stringify(items),
                    sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
                })
            };
            await fetch(`${"http://ewsadm.taiwantradeshows.com.tw/api/"}setApplyHydroItems`, options1).then((response)=>response.json()).then((response)=>{
                console.log(response);
                alert(response.msg);
            }).catch((err)=>console.error(err));
        }
    };
    async function handleSubmit() {
        const useDefault = document.getElementById("chooseDefault");
        let items = [];
        if (useDefault.checked) {
            const options = {
                method: "POST",
                headers: {
                    cookie: "ci_session=9lejfn4cgisk4havru3sjg4s9e8aiqho",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    application_form_id: "6305a2e49bdbf001",
                    base_option: "Y",
                    items: [],
                    sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
                })
            };
            await fetch(`${"http://ewsadm.taiwantradeshows.com.tw/api/"}setApplyHydroItems`, options).then((response)=>response.json()).then((response)=>console.log(response)).then(nextFormStep()).catch((err)=>console.error(err));
        } else {
            const checkBoxsOne = document.querySelectorAll(".Form_aGroup__FN6oc input[type='checkbox']");
            const checkBoxsTwo = document.querySelectorAll(".Form_bGroup__4aN8N input[type='checkbox']");
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
                    if (num.value === "0" || num.value === "") {
                        alert("請填入數量");
                    } else {
                        items.push({
                            item_id: check1.value,
                            quantity: num.value
                        });
                    }
                }
            }
            if (items.length !== 0) {
                const options1 = {
                    method: "POST",
                    headers: {
                        cookie: "ci_session=9lejfn4cgisk4havru3sjg4s9e8aiqho",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams({
                        application_form_id: "6305a2e49bdbf001",
                        base_option: "N",
                        items: JSON.stringify(items),
                        sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
                    })
                };
                await fetch(`${"http://ewsadm.taiwantradeshows.com.tw/api/"}setApplyHydroItems`, options1).then((response)=>response.json()).then((response)=>console.log(response)).then(nextFormStep()).catch((err)=>console.error(err));
            }
        }
    }
    const active = (e)=>{
        const useDefault = document.getElementById("chooseDefault");
        useDefault.checked = false;
        if (e.target.checked) {
            e.target.parentNode.className = (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().checkedActive);
        } else {
            e.target.parentNode.className = "";
        }
    };
    const enableNextTextBox = (e)=>{
        const useDefault = document.getElementById("chooseDefault");
        useDefault.checked = false;
        if (e.target.checked) {
            e.target.nextSibling.nextSibling.childNodes[1].removeAttribute("disabled");
            e.target.parentNode.className = (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().checkedActive);
        } else {
            e.target.nextSibling.nextSibling.childNodes[1].setAttribute("disabled", "");
            e.target.nextSibling.nextSibling.childNodes[1].value = 0;
            e.target.parentNode.className = "";
        }
    };
    const handleDefault = (e)=>{
        const checkBoxsOne = document.querySelectorAll(".Form_aGroup__FN6oc input[type='checkbox']");
        const checkBoxsTwo = document.querySelectorAll(".Form_bGroup__4aN8N input");
        if (e.target.checked) {
            for (let check of checkBoxsOne){
                if (check.checked) {
                    check.checked = false;
                    check.parentNode.className = "";
                }
            }
            for (let check1 of checkBoxsTwo){
                if (check1.checked) {
                    check1.checked = false;
                    check1.parentNode.className = "";
                }
                if (check1.type === "number") {
                    check1.value = 0;
                    check1.setAttribute("disabled", "");
                }
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
            formStep === 1 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().showForm) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hideForm), 
        ].join(" "),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().temporary),
                onClick: temporary,
                children: "暫存"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_3__.Form, {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "水電追加申請項目"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().applyDefault),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                id: "chooseDefault",
                                value: "useDefault",
                                onChange: handleDefault,
                                defaultChecked: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "chooseDefault",
                                children: "只使用大會提供每 1 攤位免費基本用電 110V 0.5KW"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().applyCheckBox),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active), 
                                                    ].join(" "),
                                                    onClick: toggle,
                                                    children: [
                                                        "Ａ.用電110V電源箱",
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "110V 用電計算說明： 0.5KW(千瓦)＝500W(瓦)＝5A(安培)；1KW(千瓦)＝1000W(瓦)＝10A(安培 (a) 110V攤位總用電量(KW)＝攤位上照明用電＋各種電器用品用電(電視、開飲機、電腦等)＋展示產品用電....總計。 (b) 110V免費累計電量(KW)＝參展攤位數 X 500W（每1攤位500W免費) (c) 1100V需追申請之電量(KW)＝110V攤位總用電量扣除了110V免費累計電量；(a) - (b) = (c) 。 請點選計算出的 (c) 值"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aGroup),
                                                            children: priceData.items[0].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: item.item_id,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: item.item_id,
                                                                                value: item.item_id,
                                                                                onChange: active
                                                                            }),
                                                                            item.name,
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                children: [
                                                                                    "$ ",
                                                                                    item.prcie
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }))
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active), 
                                                    ].join(" "),
                                                    onClick: toggle,
                                                    children: [
                                                        "B. 用電220V電源箱",
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDownContent),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bGroup),
                                                        children: priceData.items[1].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
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
                                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().num),
                                                                            children: [
                                                                                "數量",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    type: "number",
                                                                                    min: "0",
                                                                                    disabled: true
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                "$ ",
                                                                                item.prcie,
                                                                                "/組"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }))
                                                    })
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active), 
                                                    ].join(" "),
                                                    onClick: toggle,
                                                    children: [
                                                        "C. 用電380V電源箱",
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDownContent),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bGroup),
                                                        children: priceData.items[2].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
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
                                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().num),
                                                                            children: [
                                                                                "數量",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    type: "number",
                                                                                    min: "0",
                                                                                    disabled: true
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                "$ ",
                                                                                item.prcie,
                                                                                "/組"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }))
                                                    })
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active), 
                                                    ].join(" "),
                                                    onClick: toggle,
                                                    children: [
                                                        "D. 24小時用電",
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDownContent),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bGroup),
                                                        children: priceData.items[3].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
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
                                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().num),
                                                                            children: [
                                                                                "數量",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    type: "number",
                                                                                    min: "0",
                                                                                    disabled: true
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                "$ ",
                                                                                item.prcie,
                                                                                "/組"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }))
                                                    })
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active), 
                                                    ].join(" "),
                                                    onClick: toggle,
                                                    children: [
                                                        "E. 給排水管",
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDownContent),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bGroup),
                                                        children: priceData.items[4].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
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
                                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().num),
                                                                            children: [
                                                                                "數量",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    type: "number",
                                                                                    min: "0",
                                                                                    disabled: true
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                "$ ",
                                                                                item.prcie,
                                                                                "/組"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }))
                                                    })
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active), 
                                                    ].join(" "),
                                                    onClick: toggle,
                                                    children: [
                                                        "F. 壓縮空氣",
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDownContent),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bGroup),
                                                        children: priceData.items[5].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
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
                                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().num),
                                                                            children: [
                                                                                "數量",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    type: "number",
                                                                                    min: "0",
                                                                                    disabled: true
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                "$ ",
                                                                                item.prcie,
                                                                                "/組"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }))
                                                    })
                                                })
                                            })
                                        ]
                                    })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().next),
                        children: "下一步"
                    })
                ]
            })
        ]
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().temporary),
                children: "暫存"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_2__.Form, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
                        children: [
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
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().complete),
                        children: "完成申請"
                    })
                ]
            })
        ]
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
    const handleUpload = (e)=>{
        const [file] = e.target.files;
        if (file) {
            blah.src = URL.createObjectURL(file);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form),
            formStep === 2 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().showForm) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hideForm), 
        ].join(" "),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().temporary),
                children: "暫存"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_2__.Form, {
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
                                id: "upload-photo",
                                onChange: handleUpload,
                                accept: "image/*"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        id: "blah",
                        src: "",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().uploadImg)
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
        ]
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().steps),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().step),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: currentStep === 0 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().active) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().pass),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Step 1"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "基本資料"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "68",
                                height: "3",
                                viewBox: "0 0 68 3",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M1.76953 1.33301H66.164",
                                    stroke: "#B1B1B1",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().step),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: currentStep === 1 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().active) :  false || currentStep > 1 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().pass) : null,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Step 2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "水電申請"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "68",
                                height: "3",
                                viewBox: "0 0 68 3",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M1.76953 1.33301H66.164",
                                    stroke: "#B1B1B1",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().step),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: currentStep === 2 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().active) :  false || currentStep > 2 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().pass) : null,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Step 3"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "水電配置圖"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "68",
                                height: "3",
                                viewBox: "0 0 68 3",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M1.76953 1.33301H66.164",
                                    stroke: "#B1B1B1",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().step),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: currentStep === 3 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_1___default().active) : null,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Step 4"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "預覽"
                                        })
                                    ]
                                })
                            })
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
/* harmony import */ var _Components_Forms_Choose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4473);
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
            sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
        })
    };
    const res = await fetch(`${process.env.API_BASE_URL}getDiscountInfo`, options);
    const infoData = await res.json();
    //get step two價目表
    const getPriceTable = await fetch(`${process.env.API_BASE_URL}getPriceTableByGrop`, options);
    const priceData = await getPriceTable.json();
    //get參展商基本資料
    const company = {
        method: "POST",
        headers: {
            cookie: "ci_session=pp0k1v3sfrngvhrs9ait3hnqrbtmvssi",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            lang: locale,
            sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
        })
    };
    const companyRes = await fetch(`${process.env.API_BASE_URL}getExhibitorCompany`, company).then((response)=>response.json());
    const steps = {
        method: "POST",
        headers: {
            cookie: "ci_session=0sbjsvc6inuum4mm7h9tchklraa67mtt",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            lang: locale,
            // application_form_id: companyRes.savadata,
            application_form_id: "6305a2e49bdbf001",
            sid: "b481cb1bcb3f18baeb07562c6c7f915b28b804d09c90d0b495945f164eacca2a"
        })
    };
    //step one
    const stepOneRes = await fetch(`${process.env.API_BASE_URL}getDraftDataStep1`, steps).then((response)=>response.json());
    console.log(stepOneRes);
    //step two
    const stepTwoRes = await fetch(`${process.env.API_BASE_URL}getApplyHydroItems`, steps).then((response)=>response.json());
    console.log(stepTwoRes);
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__.serverSideTranslations)(locale, [
                "common"
            ]),
            info: infoData,
            priceData: priceData,
            company: companyRes,
            stepOne: stepOneRes,
            stepTwo: stepTwoRes
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
                            nextFormStep: nextFormStep,
                            stepOne: props.stepOne,
                            company: props.company
                        }),
                        formStep >= 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Forms_Choose__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            formStep: formStep,
                            nextFormStep: nextFormStep,
                            priceData: props.priceData,
                            stepTwo: props.stepTwo
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