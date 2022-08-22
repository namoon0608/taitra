(() => {
var exports = {};
exports.id = 776;
exports.ids = [776];
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

/***/ 2628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search),
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
/* harmony import */ var _styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2325);
/* harmony import */ var _styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_Popup_Popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9929);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1635);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3349);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Nav__WEBPACK_IMPORTED_MODULE_3__]);
_Components_Nav__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












async function getServerSideProps({ locale  }) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            lang: locale,
            show_id: "FD"
        })
    };
    const infoRes = await fetch(`${process.env.API_BASE_URL}getDiscountInfo`, options);
    const infoData = await infoRes.json();
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__.serverSideTranslations)(locale, [
                "common"
            ]),
            info: infoData
        }
    };
}
function Search(props) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const close = ()=>{
        setShow(false);
    };
    const active = (e)=>{
        if (e.target.checked) {
            e.target.parentNode.className = (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().checkedActive);
        } else {
            e.target.parentNode.className = "";
        }
    };
    const enableNextTextBox = (e)=>{
        if (e.target.checked) {
            e.target.nextSibling.nextSibling.childNodes[1].removeAttribute("disabled");
            e.target.parentNode.className = (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().checkedActive);
        } else {
            e.target.nextSibling.nextSibling.childNodes[1].setAttribute("disabled", "");
            e.target.nextSibling.nextSibling.childNodes[1].value = null;
            e.target.parentNode.className = "";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),
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
                        children: "水電申請修改"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().checkForm),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "大會水電公司審核意見"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().opinionBox)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "代理或裝潢公司基本資料"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().form),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "公司名稱"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "company",
                                                type: "text",
                                                defaultValue: "丰彤設計有限公司"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "統一編號"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "uniformNum",
                                                type: "text",
                                                defaultValue: "12653758"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "聯絡人"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "contactPerson",
                                                type: "text",
                                                defaultValue: "張書源"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "電子郵件"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "email",
                                                type: "email",
                                                defaultValue: "1fontal1999@gmail.com"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "開立發票資訊"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().form),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "公司名稱"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "company",
                                                type: "text",
                                                defaultValue: "尚立資訊有限公司"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "統一編號"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "uniformNum",
                                                type: "text",
                                                defaultValue: "83465356"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().formRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "發票寄送地址"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "address",
                                                type: "text",
                                                defaultValue: "台北市南京東路四段1號2樓"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: [
                                            (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().formRow),
                                            (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().prepare)
                                        ].join(" "),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "prepare",
                                                children: "備註"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                defaultValue: "123"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().reviseTitle),
                                children: [
                                    "水電追加申請項目",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().revise),
                                        onClick: ()=>setShow(true),
                                        children: "修改"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().applyItem),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
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
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),
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
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),
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
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),
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
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),
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
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sum),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sumTitle),
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
                            })
                        ]
                    }),
                    show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Popup_Popup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        close: close,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().applyCheckBox),
                            onClick: (e)=>{
                                // do not close modal if anything inside modal content is clicked
                                e.stopPropagation();
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "水電追加申請項目"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().group),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().active), 
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
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDownContent),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: "110V 用電計算說明： 0.5KW(千瓦)＝500W(瓦)＝5A(安培)；1KW(千瓦)＝1000W(瓦)＝10A(安培 (a) 110V攤位總用電量(KW)＝攤位上照明用電＋各種電器用品用電(電視、開飲機、電腦等)＋展示產品用電....總計。 (b) 110V免費累計電量(KW)＝參展攤位數 X 500W（每1攤位500W免費) (c) 1100V需追申請之電量(KW)＝110V攤位總用電量扣除了110V免費累計電量；(a) - (b) = (c) 。 請點選計算出的 (c) 值"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().aGroup),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                htmlFor: "500W",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        type: "checkbox",
                                                                                        id: "500W",
                                                                                        value: "110V_5A",
                                                                                        onChange: active
                                                                                    }),
                                                                                    "單 相 110V 5A （500W）",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: "$ 650"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                htmlFor: "1000W",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        type: "checkbox",
                                                                                        id: "1000W",
                                                                                        value: "110V_10A",
                                                                                        onChange: active
                                                                                    }),
                                                                                    "單 相 110V 10A（1,000W）",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: "$ 1,300"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                htmlFor: "1500W",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        type: "checkbox",
                                                                                        id: "1500W",
                                                                                        value: "110V_15A",
                                                                                        onChange: active
                                                                                    }),
                                                                                    "單 相 110V 15A（1,500W）",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: "$ 1,950"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                htmlFor: "2KW",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        type: "checkbox",
                                                                                        id: "2KW",
                                                                                        value: "110V/190V_2",
                                                                                        onChange: active
                                                                                    }),
                                                                                    "三 相 110V/190V 2KW",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: "$ 2,600"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                htmlFor: "4KW",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        type: "checkbox",
                                                                                        id: "4KW",
                                                                                        value: "110V/190V_4",
                                                                                        onChange: active
                                                                                    }),
                                                                                    "三 相 110V/190V 4KW",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: "$ 5,200"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                htmlFor: "6KW",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        type: "checkbox",
                                                                                        id: "6KW",
                                                                                        value: "110V/190V_6",
                                                                                        onChange: active
                                                                                    }),
                                                                                    "三 相 110V/190V 6KW",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().active), 
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
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDownContent),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bGroup),
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                            htmlFor: "220V_15A",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    type: "checkbox",
                                                                                    id: "220V_15A",
                                                                                    value: "220V_15A",
                                                                                    onChange: enableNextTextBox
                                                                                }),
                                                                                "三相 220V 動力用電 15A",
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().num),
                                                                                    children: [
                                                                                        "數量",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "number",
                                                                                            disabled: true
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "$ 2,994/組"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                            htmlFor: "220V_20A",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    type: "checkbox",
                                                                                    id: "220V_20A",
                                                                                    value: "220V_20A",
                                                                                    onChange: enableNextTextBox
                                                                                }),
                                                                                "三相 220V 動力用電 20A",
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().num),
                                                                                    children: [
                                                                                        "數量",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "number",
                                                                                            disabled: true
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "$ 5,889/組"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                            htmlFor: "220V_30A",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    type: "checkbox",
                                                                                    id: "220V_30A",
                                                                                    value: "220V_30A",
                                                                                    onChange: enableNextTextBox
                                                                                }),
                                                                                "三相 220V 動力用電 30A",
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().num),
                                                                                    children: [
                                                                                        "數量",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "number",
                                                                                            disabled: true
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().active), 
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
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDownContent),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bGroup),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: "380V",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "380V",
                                                                                value: "380V",
                                                                                onChange: enableNextTextBox
                                                                            }),
                                                                            "用電380V電源箱",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().num),
                                                                                children: [
                                                                                    "數量",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        type: "number",
                                                                                        disabled: true
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().active), 
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
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDownContent),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bGroup),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: "electricity",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "electricity",
                                                                                value: "electricity",
                                                                                onChange: enableNextTextBox
                                                                            }),
                                                                            "24小時用電",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().num),
                                                                                children: [
                                                                                    "數量",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        type: "number",
                                                                                        disabled: true
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().active), 
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
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDownContent),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bGroup),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: "drain_pipe",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "drain_pipe",
                                                                                value: "drain_pipe",
                                                                                onChange: enableNextTextBox
                                                                            }),
                                                                            "給排水管",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().num),
                                                                                children: [
                                                                                    "數量",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        type: "number",
                                                                                        disabled: true
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            duration: 1000,
                                            collapsed: true,
                                            whenReversedUseBackwardEase: false,
                                            render: ({ toggle , setCollapsibleElement , toggleState ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: [
                                                                    (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown),
                                                                    toggleState === "COLLAPSED" ? (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDown) : (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().active), 
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
                                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardBody),
                                                            ref: setCollapsibleElement,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dropDownContent),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bGroup),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: "press_air",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                id: "press_air",
                                                                                value: "press_air",
                                                                                onChange: enableNextTextBox
                                                                            }),
                                                                            "壓縮空氣",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().num),
                                                                                children: [
                                                                                    "數量",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        type: "number",
                                                                                        disabled: true
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().btns),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cancel),
                                            onClick: close,
                                            children: "取消"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().complete),
                                            children: "完成"
                                        })
                                    ]
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().btns),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cancel),
                                children: "取消"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_Apply_module_scss__WEBPACK_IMPORTED_MODULE_11___default().complete),
                                children: "完成"
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
var __webpack_exports__ = __webpack_require__.X(0, [952,61,845,325], () => (__webpack_exec__(2628)));
module.exports = __webpack_exports__;

})();