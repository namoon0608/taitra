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
	"popupToWrite": "Form_popupToWrite__wp0Cp",
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

/***/ 4517:
/***/ ((module) => {

// Exports
module.exports = {
	"popup": "Popup_popup__rP7zX"
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
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3732);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_unform_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1144);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);






function Basic({ formStep , nextFormStep , stepOne , company , saveID , dataID , jump , sid ,  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { 0: number , 1: setNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const temporary = async ()=>{
        const useDefault = document.getElementById("chooseDefault");
        let company = document.getElementById("company").value;
        // let uniformNum = document.getElementById("uniformNum").value;
        let contactPerson = document.getElementById("contactPerson").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let remark = document.getElementById("remark").value;
        let baseOption = "";
        if (useDefault.checked) {
            baseOption = "Y";
        } else {
            baseOption = "N";
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                onsite_company_name: company,
                onsite_contact_person: contactPerson,
                onsite_contact_email: email,
                onsite_contact_phone: phone,
                base_option: baseOption,
                remark: remark,
                event_uid: sid.event_uid,
                company_id: sid.company_id
            })
        };
        await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}setApplyForm`, options).then((response)=>response.json()).then((response)=>{
            console.log(response);
            alert("success");
        }).catch((err)=>console.error(err));
    };
    async function handleSubmit(data) {
        console.log(data);
        const useDefault = document.getElementById("chooseDefault");
        let remark = document.getElementById("remark").value;
        let baseOption = "";
        if (useDefault.checked) {
            baseOption = "Y";
            jump(true);
        } else {
            baseOption = "N";
            jump(false);
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                onsite_company_name: data.company,
                onsite_contact_person: data.contactPerson,
                onsite_contact_email: data.email,
                onsite_contact_phone: data.phone,
                base_option: baseOption,
                remark: remark,
                event_uid: sid.event_uid,
                company_id: sid.company_id
            })
        };
        if (baseOption === "N") {
            await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}setApplyForm`, options).then((response)=>response.json()).then((response)=>{
                console.log(response);
                saveID(response.application_form_id);
            }).then(nextFormStep()).catch((err)=>console.error(err));
        } else if (baseOption === "Y") {
            await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}setApplyForm`, options).then((response)=>response.json()).then((response)=>{
                console.log(response);
                saveID(response.application_form_id);
            }).then(nextFormStep()).then(nextFormStep()).catch((err)=>console.error(err));
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
            formStep === 0 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().showForm) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hideForm), 
        ].join(" "),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().temporary),
                onClick: temporary,
                children: t("applyForm.stepper.save")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: t("applyForm.stepOne.groupOne.title")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().companyGroupOne),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: t("applyForm.stepOne.groupOne.companyName")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: company.company.company_name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: t("applyForm.stepOne.groupOne.boothNo")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: company.company.booth_no
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: t("applyForm.stepOne.groupOne.quantityOfBooths")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: company.company.booth_cnt
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: t("applyForm.stepOne.groupOne.contactPerson")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: company.company.contact_person
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: t("applyForm.stepOne.groupOne.phone")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: company.company.com_tel
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: t("applyForm.stepOne.groupOne.taxID")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: company.company.tax_id
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
                                children: company.company.email
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: t("applyForm.stepOne.groupOne.address")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                children: company.company.address
                            })
                        ]
                    })
                ]
            }),
            stepOne.status === false ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_2__.Form, {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.stepOne.staffOnSite")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "company",
                                    label: t("applyForm.stepOne.groupTwo.companyName"),
                                    type: "text",
                                    placeholder: t("applyForm.stepOne.groupTwo.companyPlaceHolder"),
                                    id: "company",
                                    maxLength: 30
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "contactPerson",
                                    label: t("applyForm.stepOne.groupTwo.contactPerson"),
                                    type: "text",
                                    placeholder: t("applyForm.stepOne.groupTwo.contactPersonPlaceHolder"),
                                    id: "contactPerson",
                                    maxLength: 20
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "email",
                                    label: "E-mail",
                                    type: "email",
                                    placeholder: t("applyForm.stepOne.groupTwo.emailPlaceHolder"),
                                    id: "email"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "phone",
                                    label: t("applyForm.stepOne.groupTwo.phone"),
                                    type: "tel",
                                    placeholder: t("applyForm.stepOne.groupTwo.phonePlaceHolder"),
                                    id: "phone",
                                    maxLength: 20
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().applyDefault),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                id: "chooseDefault",
                                value: "useDefault"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "chooseDefault",
                                children: t("applyForm.stepTwo.useDefault")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: [
                                (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().prepare)
                            ].join(" "),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "prepare",
                                    children: t("applyForm.stepOne.groupThree.remark")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    id: "remark",
                                    maxLength: 200
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().firstNext),
                        children: t("applyForm.stepper.next")
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_2__.Form, {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.stepOne.staffOnSite")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "company",
                                    label: t("applyForm.stepOne.groupTwo.companyName"),
                                    type: "text",
                                    placeholder: t("applyForm.stepOne.groupTwo.companyPlaceHolder"),
                                    id: "company",
                                    defaultValue: stepOne.data.onsite_company_name,
                                    maxLength: 30
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "contactPerson",
                                    label: t("applyForm.stepOne.groupTwo.contactPerson"),
                                    type: "text",
                                    placeholder: t("applyForm.stepOne.groupTwo.contactPersonPlaceHolder"),
                                    id: "contactPerson",
                                    defaultValue: stepOne.data.onsite_contact_person,
                                    maxLength: 20
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "email",
                                    label: "E-mail",
                                    type: "email",
                                    placeholder: t("applyForm.stepOne.groupTwo.emailPlaceHolder"),
                                    id: "email",
                                    defaultValue: stepOne.data.onsite_contact_email
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "phone",
                                    label: t("applyForm.stepOne.groupTwo.phone"),
                                    type: "tel",
                                    placeholder: t("applyForm.stepOne.groupTwo.phonePlaceHolder"),
                                    id: "phone",
                                    defaultValue: stepOne.data.onsite_contact_phone,
                                    maxLength: 20
                                })
                            })
                        ]
                    }),
                    stepOne.data.base_option === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().applyDefault),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                id: "chooseDefault",
                                value: "useDefault",
                                defaultChecked: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "chooseDefault",
                                children: t("applyForm.stepTwo.useDefault")
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().applyDefault),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                id: "chooseDefault",
                                value: "useDefault"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "chooseDefault",
                                children: t("applyForm.stepTwo.useDefault")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: [
                                (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().prepare)
                            ].join(" "),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "prepare",
                                    children: t("applyForm.stepOne.groupThree.remark")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    id: "remark",
                                    defaultValue: stepOne.data.remark,
                                    maxLength: 200
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().firstNext),
                        children: t("applyForm.stepper.next")
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3732);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_unform_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1144);







function Choose({ formStep , nextFormStep , priceData , stepTwo , dataID , sid ,  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { 0: number , 1: setNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    function handleOnChange(changeEvent) {
        const radios = document.querySelectorAll('input[name="drone"]');
        const invoiceRequired = document.getElementsByClassName("Form_address__LoRLg");
        const requiredField = document.querySelectorAll(".Form_address__LoRLg input");
        for (let radio of radios){
            if (radio.checked) {
                if (radio.value === "2") {
                    invoiceRequired[0].style.display = "grid";
                    for (let field of requiredField){
                        field.required = true;
                    }
                } else if (radio.value === "1") {
                    invoiceRequired[0].style.display = "none";
                    for (let field1 of requiredField){
                        field1.value = "";
                        field1.required = false;
                    }
                }
            }
        }
    }
    const temporary = async ()=>{
        let invoice = "";
        let address;
        let contact_person;
        let company;
        let phone;
        let tax_id;
        const radios = document.querySelectorAll('input[name="drone"]');
        const invoiceRequired = document.getElementsByClassName("Form_address__LoRLg");
        const requiredField = document.querySelectorAll(".Form_address__LoRLg input");
        for (let radio of radios){
            if (radio.checked) {
                invoice = radio.value;
                if (radio.value === "2") {
                    invoiceRequired[0].style.display = "grid";
                    for (let field of requiredField){
                        field.required = true;
                    }
                } else if (radio.value === "1") {
                    invoiceRequired[0].style.display = "none";
                    for (let field1 of requiredField){
                        field1.value = "";
                        field1.required = false;
                    }
                }
            }
        }
        if (invoice === "1") {
            address = "";
            contact_person = "";
            company = "";
            phone = "";
            tax_id = "";
        } else if (invoice === "2") {
            address = document.getElementById("address").value;
            contact_person = document.getElementById("contactPerson").value;
            company = document.getElementById("company").value;
            phone = document.getElementById("phone").value;
            tax_id = document.getElementById("uniformNum").value;
            console.log(contact_person);
            console.log(tax_id);
        }
        let items = [];
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
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                invoice: invoice,
                proxy_address: address,
                proxy_contact_person: contact_person,
                proxy_phone: phone,
                proxy_company_name: company,
                proxy_tax_id: tax_id,
                items: JSON.stringify(items),
                event_uid: sid.event_uid,
                company_id: sid.company_id
            })
        };
        await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}setApplyHydroItems`, options).then((response)=>response.json()).then((response)=>{
            console.log(response);
            alert("success");
        }).catch((err)=>console.error(err));
    };
    async function handleSubmit(data) {
        console.log(data);
        let invoice = "";
        const radios = document.querySelectorAll('input[name="drone"]');
        const invoiceRequired = document.getElementsByClassName("Form_address__LoRLg");
        const requiredField = document.querySelectorAll(".Form_address__LoRLg input");
        for (let radio of radios){
            if (radio.checked) {
                invoice = radio.value;
                if (radio.value === "2") {
                    invoiceRequired[0].style.display = "grid";
                    for (let field of requiredField){
                        field.required = true;
                    }
                } else if (radio.value === "1") {
                    console.log("dfsfa");
                    invoiceRequired[0].style.display = "none";
                    for (let field1 of requiredField){
                        field1.value = "";
                        field1.required = false;
                    }
                }
            }
        }
        let items = [];
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
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                items: JSON.stringify(items),
                invoice: invoice,
                proxy_address: data.address,
                proxy_contact_person: data.contactPerson,
                proxy_phone: data.phone,
                proxy_company_name: data.company,
                proxy_tax_id: data.uniformNum,
                event_uid: sid.event_uid,
                company_id: sid.company_id
            })
        };
        await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}setApplyHydroItems`, options).then((response)=>response.json()).then((response)=>console.log(response)).then(nextFormStep()).catch((err)=>console.error(err));
    }
    const active = (e)=>{
        if (e.target.checked) {
            e.target.parentNode.className = (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkedActive);
        } else {
            e.target.parentNode.className = "";
        }
    };
    const enableNextTextBox = (e)=>{
        if (e.target.checked) {
            e.target.nextSibling.nextSibling.childNodes[1].removeAttribute("disabled");
            e.target.nextSibling.nextSibling.childNodes[1].min = 1;
            e.target.nextSibling.nextSibling.childNodes[1].value = 1;
            e.target.parentNode.className = (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkedActive);
        } else {
            e.target.nextSibling.nextSibling.childNodes[1].setAttribute("disabled", "");
            e.target.nextSibling.nextSibling.childNodes[1].value = 0;
            e.target.parentNode.className = "";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),
            formStep === 1 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().showForm) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hideForm), 
        ].join(" "),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().temporary),
                onClick: temporary,
                children: t("applyForm.stepper.save")
            }),
            stepTwo.status === false ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_2__.Form, {
                onSubmit: handleSubmit,
                onChange: handleOnChange,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.stepTwo.title")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().applyCheckBox),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemA")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().aGroup),
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
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: item.prcie
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemBCD")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemBCD")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemBCD")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemBCD")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemE")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemF")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
                                                            children: priceData.items[6].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.stepOne.groupThree.title")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().addressGroup),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: "company_address",
                                            children: [
                                                t("applyForm.stepOne.groupThree.asTheExhibitor"),
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
                                                t("applyForm.stepOne.groupThree.asTheAgent"),
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: [
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().formRow),
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().address)
                                ].join(" "),
                                style: {
                                    display: "none"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "company",
                                            label: t("applyForm.stepOne.groupTwo.companyName"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupTwo.companyPlaceHolder"),
                                            id: "company",
                                            maxLength: 30,
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "uniformNum",
                                            label: t("applyForm.stepOne.groupTwo.taxID"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupTwo.taxIdPlaceHolder"),
                                            id: "uniformNum",
                                            maxLength: 8,
                                            value: number,
                                            onChange: (e)=>setNumber(e.target.value.replace(/[^\d]/g, "")),
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "contactPerson",
                                            label: t("applyForm.stepOne.groupTwo.contactPerson"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupTwo.contactPersonPlaceHolder"),
                                            id: "contactPerson",
                                            maxLength: 20,
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "phone",
                                            label: t("applyForm.stepOne.groupTwo.phone"),
                                            type: "tel",
                                            placeholder: t("applyForm.stepOne.groupTwo.phonePlaceHolder"),
                                            id: "phone",
                                            maxLength: 20,
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "address",
                                            label: t("applyForm.stepOne.groupThree.invoiceAddress"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupThree.invoicePlaceHolder"),
                                            id: "address",
                                            maxLength: "30",
                                            required: true
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().next),
                        children: t("applyForm.stepper.next")
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_2__.Form, {
                onSubmit: handleSubmit,
                onChange: handleOnChange,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.stepTwo.title")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().applyCheckBox),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemA")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().aGroup),
                                                            children: stepTwo.items[0].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: item.item_id,
                                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkedActive),
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
                                                                                children: item.prcie
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
                                                                                children: item.prcie
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemBCD")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
                                                            children: stepTwo.items[1].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: item.item_id,
                                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkedActive),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemBCD")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
                                                            children: stepTwo.items[2].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: item.item_id,
                                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkedActive),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemBCD")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
                                                            children: stepTwo.items[3].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: item.item_id,
                                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkedActive),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemBCD")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
                                                            children: stepTwo.items[4].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: item.item_id,
                                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkedActive),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemE")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
                                                            children: stepTwo.items[5].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: item.item_id,
                                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkedActive),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                                duration: 1000,
                                collapsed: true,
                                whenReversedUseBackwardEase: false,
                                render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-header",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: [
                                                        (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),
                                                        toggleState === "COLLAPSED" ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active), 
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
                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardBody),
                                                ref: setCollapsibleElement,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDownContent),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: t("applyForm.stepTwo.itemF")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bGroup),
                                                            children: stepTwo.items[6].data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: item.chk === "Y" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: item.item_id,
                                                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkedActive),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                                                                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().num),
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.stepOne.groupThree.title")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().addressGroup),
                                children: stepTwo.invoice.checkbox === "1" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                htmlFor: "company_address",
                                                children: [
                                                    t("applyForm.stepOne.groupThree.asTheExhibitor"),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "radio",
                                                        id: "company_address",
                                                        name: "drone",
                                                        value: "1",
                                                        required: true,
                                                        defaultChecked: true
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                htmlFor: "agent_address",
                                                children: [
                                                    t("applyForm.stepOne.groupThree.asTheAgent"),
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
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                htmlFor: "company_address",
                                                children: [
                                                    t("applyForm.stepOne.groupThree.asTheExhibitor"),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "radio",
                                                        id: "company_address",
                                                        name: "drone",
                                                        value: "1",
                                                        required: true
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                htmlFor: "agent_address",
                                                children: [
                                                    t("applyForm.stepOne.groupThree.asTheAgent"),
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
                                })
                            }),
                            stepTwo.invoice.checkbox === "1" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: [
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().formRow),
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().address), 
                                ].join(" "),
                                style: {
                                    display: "none"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "company",
                                            label: t("applyForm.stepOne.groupTwo.companyName"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupTwo.companyPlaceHolder"),
                                            id: "company",
                                            maxLength: 30
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "uniformNum",
                                            label: t("applyForm.stepOne.groupTwo.taxID"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupTwo.taxIdPlaceHolder"),
                                            id: "uniformNum",
                                            maxLength: 8,
                                            value: number,
                                            onChange: (e)=>setNumber(e.target.value.replace(/[^\d]/g, ""))
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "contactPerson",
                                            label: t("applyForm.stepOne.groupTwo.contactPerson"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupTwo.contactPersonPlaceHolder"),
                                            id: "contactPerson",
                                            maxLength: 20
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "phone",
                                            label: t("applyForm.stepOne.groupTwo.phone"),
                                            type: "tel",
                                            placeholder: t("applyForm.stepOne.groupTwo.phonePlaceHolder"),
                                            id: "phone",
                                            maxLength: 20
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "address",
                                            label: t("applyForm.stepOne.groupThree.invoiceAddress"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupThree.invoicePlaceHolder"),
                                            id: "address",
                                            maxLength: "30"
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: [
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().formRow),
                                    (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().address), 
                                ].join(" "),
                                style: {
                                    display: "grid"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "company",
                                            label: t("applyForm.stepOne.groupTwo.companyName"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupTwo.companyPlaceHolder"),
                                            id: "company",
                                            defaultValue: stepTwo.invoice.invoice_company,
                                            maxLength: 30,
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "uniformNum",
                                            label: t("applyForm.stepOne.groupTwo.taxID"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupTwo.taxIdPlaceHolder"),
                                            id: "uniformNum",
                                            defaultValue: stepTwo.invoice.invoice_taxid,
                                            maxLength: 8,
                                            value: number,
                                            onChange: (e)=>setNumber(e.target.value.replace(/[^\d]/g, "")),
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "contactPerson",
                                            label: t("applyForm.stepOne.groupTwo.contactPerson"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupTwo.contactPersonPlaceHolder"),
                                            id: "contactPerson",
                                            defaultValue: stepTwo.invoice.invoice_contact_person,
                                            maxLength: 20,
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "phone",
                                            label: t("applyForm.stepOne.groupTwo.phone"),
                                            type: "tel",
                                            placeholder: t("applyForm.stepOne.groupTwo.phonePlaceHolder"),
                                            id: "phone",
                                            defaultValue: stepTwo.invoice.invoice_phone,
                                            maxLength: 20,
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Fields_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            name: "address",
                                            label: t("applyForm.stepOne.groupThree.invoiceAddress"),
                                            type: "text",
                                            placeholder: t("applyForm.stepOne.groupThree.invoicePlaceHolder"),
                                            id: "address",
                                            maxLength: "30",
                                            defaultValue: stepTwo.invoice.invoice_address,
                                            required: true
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_6___default().next),
                        children: t("applyForm.stepper.next")
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3732);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_unform_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);






function Preview({ formStep , nextFormStep , applicatonId , dataID , sid ,  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    async function initProducts() {
        // console.log(dataID);
        // console.log(sid);
        const options = {
            method: "POST",
            headers: {
                // cookie: "ci_session=8v7iclm76gcb6fsic32lodnk29j11j6b",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                lang: router.locale,
                application_form_id: dataID,
                company_id: sid.company_id,
                event_uid: sid.event_uid
            })
        };
        setLoading(true);
        await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}getPreview`, options).then((response)=>response.json()).then((response)=>{
            setData(response);
            console.log(response);
            setLoading(false);
        }).catch((err)=>console.error(err));
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        initProducts();
    }, []);
    async function handleSubmit() {
        const options = {
            method: "POST",
            headers: {
                // cookie: "ci_session=b49bmqbdckrr8bpfre3h8ncme6nohol9",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                application_form_id: dataID,
                event_uid: sid.event_uid,
                company_id: sid.company_id
            })
        };
        await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}sumbitApply`, options).then((response)=>response.json()).then((response)=>{
            console.log(response);
            alert("success");
            router.push("/");
        }).catch((err)=>console.error(err));
    }
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "Loading..."
    });
    if (!data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "No profile data"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().temporary),
                style: {
                    display: "none"
                },
                children: t("applyForm.stepper.save")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_unform_web__WEBPACK_IMPORTED_MODULE_2__.Form, {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.stepOne.staffOnSite")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formComplete),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: t("applyForm.preview.groupOne.companyName")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: data.onsite.onsite_company_name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: t("applyForm.preview.groupOne.contactPerson")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: data.onsite.onsite_contact_person
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: t("applyForm.preview.groupOne.phone")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: data.onsite.onsite_contact_phone
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "E-mail"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: data.onsite.onsite_contact_email
                                    })
                                ]
                            })
                        ]
                    }),
                    data.hydro_items.base_option === "Y" ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: data.invoice_check === "0" ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: t("applyForm.preview.groupTwo.title")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formCompleteInvoce),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    children: t("applyForm.preview.groupTwo.companyName")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: data.invoice.invoice_comapny
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    children: t("applyForm.preview.groupTwo.taxID")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: data.invoice.invoice_taxid
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    children: [
                                                        " ",
                                                        t("applyForm.preview.groupTwo.invoiceAddress")
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: data.invoice.invoice_address
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    children: [
                                                        " ",
                                                        t("applyForm.preview.groupTwo.remark"),
                                                        "???"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: data.invoice.remark
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: t("applyForm.stepOne.groupTwo.title")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formComplete),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    children: t("applyForm.preview.groupOne.companyName")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: data.proxy.proxy_company_name
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    children: t("applyForm.preview.groupOne.taxID")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: data.proxy.proxy_tax_id
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    children: t("applyForm.preview.groupOne.contactPerson")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: data.proxy.proxy_contact_person
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formRow),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    children: t("applyForm.preview.groupOne.phone")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: data.proxy.proxy_phone
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.preview.groupThree.title")
                    }),
                    data.hydro_items.base_option === "Y" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: t("applyForm.preview.groupThree.useDefault")
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().applyItem),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
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
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                    children: [
                                        data.hydro_items.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: item.index
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            style: {
                                                                textAlign: "left",
                                                                paddingLeft: "15px"
                                                            },
                                                            children: item.name
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
                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sum),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sumTitle),
                                                    children: t("applyForm.preview.groupThree.total")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: data.hydro_items.total_sum
                                                })
                                            ]
                                        }),
                                        data.discount.discount_value !== "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sum),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sumTitle),
                                                            children: data.discount.discount_type
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: data.discount.discount_price
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sum),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sumTitle),
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
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.preview.groupFour.title")
                    }),
                    data.imageData_file === "Y" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: t("applyForm.preview.groupFour.pending")
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().image),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    t("applyForm.preview.groupFour.file"),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: data.imageData_filename
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://ewsadm.taiwantradeshows.com.tw/" + data.imageData_file
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().complete),
                        children: t("applyForm.stepper.send")
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Popup_Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9929);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);





function Write({ formStep , nextFormStep , stepThree , dataID , sid ,  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { 0: imageSrc , 1: setImageSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(stepThree.imageData);
    const { 0: uploadData , 1: setUploadData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: goNext , 1: setGoNext  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const IFrameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: recievedMessage , 1: setRecievedMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(imageSrc);
        if (stepThree.status !== false) {
            setGoNext(false);
        }
    }, []);
    // useEffect(() => {
    //     window.addEventListener("message", function (e) {
    //         console.log(e);
    //     });
    // }, []);
    const handleWritePlan = ()=>{
        setShow(true);
    // const form = {
    //     application_form_id: dataID,
    //     sid: sid,
    // };
    // if (!IFrameRef.current) return;
    // IFrameRef.current.contentWindow.postMessage(
    //     form,
    //     "http://localhost:3001/"
    // );
    };
    const close = ()=>{
        setShow(false);
    };
    function dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(","), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([
            u8arr
        ], filename, {
            type: mime
        });
    }
    const temporary = async ()=>{
        const later = document.querySelector("input[name=cbox1]");
        let file;
        const form = new FormData();
        form.append("application_form_id", dataID);
        form.append("event_uid", sid.event_uid);
        form.append("company_id", sid.company_id);
        if (!later.checked) {
            file = dataURLtoFile(imageSrc, "png");
            form.append("imageData", file);
        } else if (later.checked) {
            form.append("imageData", "Y");
        }
        const options = {
            method: "POST"
        };
        options.body = form;
        await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}setApplyDiagram`, options).then((response)=>response.json()).then((response)=>{
            console.log(response);
            if (response.status === true) {
                alert(response.msg);
            }
        }).catch((err)=>console.error(err));
    };
    function handleOnChange(changeEvent) {
        const later = document.querySelector("input[name=cbox1]");
        const imgShow = document.getElementById("blah");
        const reader = new FileReader();
        reader.onload = function(onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        };
        if (changeEvent.target.files !== null) {
            reader.readAsDataURL(changeEvent.target.files[0]);
            later.checked = false;
            imgShow.style.display = "block";
            setGoNext(false);
        } else if (later.checked) {
            setGoNext(false);
            setImageSrc("");
            imgShow.style.display = "none";
        } else if (changeEvent.target.files === null) {
            setGoNext(true);
        }
    }
    async function handleSubmit(event) {
        const later = document.querySelector("input[name=cbox1]");
        event.preventDefault();
        const formData = event.currentTarget;
        const fileInput = Array.from(formData.elements).find(({ name  })=>name === "photo");
        const form = new FormData();
        form.append("application_form_id", dataID);
        form.append("event_uid", sid.event_uid);
        form.append("company_id", sid.company_id);
        if (later.checked) {
            form.append("imageData", "Y");
        } else {
            if (fileInput.files.length === 0) {
                form.append("imageData", imageSrc);
            } else {
                form.append("imageData", fileInput.files[0]);
            }
        }
        const options = {
            method: "POST"
        };
        options.body = form;
        await fetch(`${"https://ewsadm.taiwantradeshows.com.tw/api/"}setApplyDiagram`, options).then((response)=>response.json()).then((response)=>{
            console.log(response);
            nextFormStep();
        }).catch((err)=>console.error(err));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form),
            formStep === 2 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().showForm) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hideForm), 
        ].join(" "),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().temporary),
                onClick: temporary,
                children: t("applyForm.stepper.save")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onChange: handleOnChange,
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.stepThree.groupOne.title")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                id: "cbox1",
                                value: "first_checkbox",
                                name: "cbox1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "cbox1",
                                children: t("applyForm.stepThree.groupOne.pending")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().upload),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "upload-photo",
                                children: t("applyForm.stepThree.groupOne.uploadFile")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                name: "photo",
                                id: "upload-photo",
                                accept: "image/*"
                            })
                        ]
                    }),
                    stepThree.status !== false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: imageSrc.slice(0, 4) === "data" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            id: "blah",
                            src: imageSrc,
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().uploadImg)
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            id: "blah",
                            src: "https://ewsadm.taiwantradeshows.com.tw/" + imageSrc,
                            className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().uploadImg)
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        id: "blah",
                        src: imageSrc,
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().uploadImg)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.stepThree.groupTwo.title")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().popupToWrite),
                        // href="https://anbon.vip/twtc_diagram/"
                        // onClick={() => setShow(true)}
                        // href=""
                        onClick: handleWritePlan,
                        target: "iframe_a",
                        children: t("applyForm.stepThree.groupTwo.clickPopup")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("applyForm.stepThree.groupThree.title")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().write),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "???",
                                    t("applyForm.stepThree.groupThree.content")
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/img/image21.png"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().next),
                        disabled: goNext,
                        style: {
                            cursor: goNext ? "auto" : "pointer",
                            opacity: goNext ? "0.5" : "1"
                        },
                        children: t("applyForm.stepper.next")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    display: show ? "block" : "none"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Popup_Popup__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    close: close,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: (e)=>{
                            // do not close modal if anything inside modal content is clicked
                            e.stopPropagation();
                        },
                        style: {
                            width: "90%",
                            height: "90%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                            ref: IFrameRef,
                            // src="http://localhost:3001/"
                            src: "https://anbon.vip/twtc_diagram/",
                            id: "iframe1",
                            name: "iframe_a",
                            height: "100%",
                            width: "100%",
                            title: "Iframe Example"
                        })
                    })
                })
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

/***/ 6105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3929);
/* harmony import */ var _styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);



function FormCard({ children , currentStep , prevFormStep , useDefaultChecked ,  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const handlePrev = ()=>{
        // console.log(useDefaultChecked);
        if (useDefaultChecked && currentStep === 2) {
            prevFormStep();
            prevFormStep();
        } else {
            prevFormStep();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "",
        children: [
            currentStep < 4 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    currentStep > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().back),
                        onClick: handlePrev,
                        type: "button",
                        children: t("applyForm.stepper.prev")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().steps),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().step),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: currentStep === 0 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pass),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Step 1"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: t("applyForm.stepper.step1")
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
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().step),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: currentStep === 1 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) :  false || currentStep > 1 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pass) : null,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Step 2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: t("applyForm.stepper.step2")
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
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().step),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: currentStep === 2 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) :  false || currentStep > 2 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pass) : null,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Step 3"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: t("applyForm.stepper.step3")
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
                                className: (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().step),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: currentStep === 3 ? (_styles_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : null,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Step 4"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: t("applyForm.stepper.step4")
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
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3110);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_Stepper_FormCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6105);
/* harmony import */ var _Components_Forms_Basic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6984);
/* harmony import */ var _Components_Forms_Choose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4473);
/* harmony import */ var _Components_Forms_Write__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7171);
/* harmony import */ var _Components_Forms_Preview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8041);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Nav__WEBPACK_IMPORTED_MODULE_3__]);
_Components_Nav__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















async function getServerSideProps({ locale , query , req , res  }) {
    let oldCookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_13__.getCookie)("sid", {
        req,
        res
    });
    if (query.sid !== undefined) {
        if (query.sid !== oldCookie) {
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_13__.setCookie)("sid", query.sid, {
                req,
                res,
                maxAge: 60 * 6 * 24
            });
        } else if (query.sid === (0,cookies_next__WEBPACK_IMPORTED_MODULE_13__.getCookie)("sid", {
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
    form.append("sid", (0,cookies_next__WEBPACK_IMPORTED_MODULE_13__.getCookie)("sid", {
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
            cookie: "ci_session=tm7raoegfru3cidh8r88ljnovjura42a",
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
    //get step two?????????
    const getPriceTable = await fetch(`${process.env.API_BASE_URL}getPriceTableByGrop`, options);
    const priceData = await getPriceTable.json();
    //get?????????????????????
    const company = {
        method: "POST",
        headers: {
            cookie: "ci_session=pp0k1v3sfrngvhrs9ait3hnqrbtmvssi",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            lang: locale,
            event_uid: sidData.event_uid,
            company_id: sidData.company_id
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
            application_form_id: companyRes.savadata,
            event_uid: sidData.event_uid,
            company_id: sidData.company_id
        })
    };
    //step one
    const stepOneRes = await fetch(`${process.env.API_BASE_URL}getDraftDataStep1`, steps).then((response)=>response.json());
    //step two
    const stepTwoRes = await fetch(`${process.env.API_BASE_URL}getApplyHydroItems`, steps).then((response)=>response.json());
    //step three
    const stepThreeRes = await fetch(`${process.env.API_BASE_URL}getApplyDiagram`, steps).then((response)=>response.json());
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__.serverSideTranslations)(locale, [
                "common"
            ]),
            info: infoData,
            priceData: priceData,
            company: companyRes,
            stepOne: stepOneRes,
            stepTwo: stepTwoRes,
            stepThree: stepThreeRes,
            sidData: sidData
        }
    };
}
function Apply(props) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const { 0: formStep , 1: setFormStep  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: savadata , 1: setSavaData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.company.savadata);
    const { 0: useDefaultChecked , 1: setUseDefaultChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const saveID = (item)=>setSavaData(item);
    const jumpOverStepTwo = (item)=>setUseDefaultChecked(item);
    const nextFormStep = ()=>setFormStep((currentStep)=>currentStep + 1);
    const prevFormStep = ()=>setFormStep((currentStep)=>currentStep - 1);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_14___default().container),
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
                    useDefaultChecked: useDefaultChecked,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Forms_Basic__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            formStep: formStep,
                            nextFormStep: nextFormStep,
                            stepOne: props.stepOne,
                            company: props.company,
                            saveID: saveID,
                            dataID: savadata,
                            jump: jumpOverStepTwo,
                            sid: props.sidData
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Forms_Choose__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            formStep: formStep,
                            nextFormStep: nextFormStep,
                            priceData: props.priceData,
                            stepTwo: props.stepTwo,
                            dataID: savadata,
                            sid: props.sidData
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Forms_Write__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            formStep: formStep,
                            nextFormStep: nextFormStep,
                            stepThree: props.stepThree,
                            dataID: savadata,
                            sid: props.sidData
                        }),
                        formStep > 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Forms_Preview__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            applicatonId: props.company.savadata,
                            dataID: savadata,
                            sid: props.sidData
                        })
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,845], () => (__webpack_exec__(6014)));
module.exports = __webpack_exports__;

})();