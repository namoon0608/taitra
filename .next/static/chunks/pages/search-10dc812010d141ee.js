(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{2774:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return c(9505)}])},9505:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return s},default:function(){return t}});var d=c(7568),e=c(4051),f=c.n(e),g=c(5893),h=c(9008),i=c.n(h),j=c(1151),k=c(558),l=c(3806),m=c(1673),n=c.n(m),o=c(7399),p=c(4261);function q(a){var b=(0,o.$G)().t,c={complete:b("search.pass"),verified:b("search.verified"),unverify:b("search.unverify"),to_be_modified:b("search.toBeModified"),cancel:b("search.cancel")}[a.type];return(0,g.jsx)("td",{type:a.type,children:c})}function r(a){var b=(0,o.$G)().t,c={verified:b("search.verified"),unverify:b("search.unverify"),unupload:b("search.notUploaded"),to_be_modified:b("search.toBeModified"),cancel:b("search.cancel")}[a.type];return(0,g.jsxs)("td",{className:n().state,type:a.type,children:[c,1===a.supplement?(0,g.jsx)(p.Z,{href:"/search/insufficient/".concat(a.dataId),className:n().documents,children:(0,g.jsx)("a",{children:b("search.needToSupplement")})}):(0,g.jsx)(g.Fragment,{})]})}var s=!0;function t(a){var b,c=(0,o.$G)().t,e=(b=(0,d.Z)(f().mark(function b(c){var d,e,g;return f().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return console.log(c.target.parentElement.closest(".Home_content__WcTpR")),d=c.target.parentElement.closest(".Home_content__WcTpR").getAttribute("data-key"),(e=new FormData).append("application_form_id",d),e.append("sid",a.sid),(g={method:"POST"}).body=e,b.next=9,fetch("".concat("https://ewsadm.taiwantradeshows.com.tw/api/","cancelApply"),g).then(function(a){return a.json()}).then(function(a){console.log(a),!0===a.status&&c.target.parentElement.closest(".Home_content__WcTpR").remove()}).catch(function(a){return console.error(a)});case 9:case"end":return b.stop()}},b)})),function(a){return b.apply(this,arguments)});return(0,g.jsxs)("div",{className:n().container,children:[(0,g.jsxs)(i(),{children:[(0,g.jsx)("title",{children:"TAITRA"}),(0,g.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,g.jsx)("link",{rel:"icon",href:"/img/logo.svg"})]}),(0,g.jsx)(j.Z,{}),(0,g.jsxs)(l.Z,{info:a.info,children:[(0,g.jsx)("h3",{children:"申請查詢"}),(0,g.jsx)("div",{className:n().applyItem,children:0!==a.searchData.data.length?(0,g.jsxs)("table",{children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{className:n().title,children:[(0,g.jsx)("th",{children:"項次"}),(0,g.jsx)("th",{children:"申請單號"}),(0,g.jsx)("th",{children:"日期"}),(0,g.jsx)("th",{children:"申請狀態"}),(0,g.jsx)("th",{children:"配置圖狀態"}),(0,g.jsx)("th",{children:"繳款單"}),(0,g.jsx)("th",{children:"繳費證明"}),(0,g.jsx)("th",{children:"操作"})]})}),(0,g.jsx)("tbody",{children:a.searchData.data.map(function(a){return(0,g.jsxs)("tr",{className:n().content,"data-key":a.application_form_id,children:[(0,g.jsx)("td",{children:a.index}),(0,g.jsx)("td",{children:a.application_form_id}),(0,g.jsx)("td",{children:a.date}),(0,g.jsx)(q,{type:a.apply_status}),(0,g.jsx)(r,{type:a.diagram_status,supplement:a.diagram_upload,dataId:a.application_form_id}),0!==a.download_payment?(0,g.jsx)("td",{className:n().download,children:c("search.download")}):(0,g.jsx)("td",{}),0!==a.upload_payment?(0,g.jsxs)("td",{className:n().upload,children:[(0,g.jsx)("label",{htmlFor:"upload",children:c("search.upload")}),(0,g.jsx)("input",{type:"file",name:"photo",id:"upload"})]}):(0,g.jsx)("td",{}),1===a.view?(0,g.jsx)("td",{children:(0,g.jsx)(p.Z,{href:"/search/check/".concat(a.application_form_id),className:n().delete,children:(0,g.jsx)("a",{children:c("search.view")})})}):(0,g.jsx)(g.Fragment,{children:1===a.modify&&1===a.cancel?(0,g.jsxs)("td",{className:n().delete,children:[(0,g.jsx)(p.Z,{href:"/search/revise/".concat(a.application_form_id),children:(0,g.jsx)("a",{children:c("search.modify")})}),(0,g.jsx)("span",{onClick:e,children:c("search.beCancel")})]}):(0,g.jsx)(g.Fragment,{children:0===a.modify&&1===a.cancel?(0,g.jsx)("td",{className:n().delete,children:(0,g.jsx)("span",{onClick:e,children:c("search.beCancel")})}):(0,g.jsx)(g.Fragment,{children:1===a.modify&&0===a.cancel?(0,g.jsx)("td",{className:n().delete,children:(0,g.jsx)(p.Z,{href:"/search/revise/".concat(a.application_form_id),children:(0,g.jsx)("a",{children:c("search.modify")})})}):(0,g.jsx)(g.Fragment,{children:0===a.modify&&0===a.cancel?(0,g.jsx)("td",{className:n().delete}):(0,g.jsx)(g.Fragment,{})})})})})]},a.index)})})]}):(0,g.jsx)("div",{children:"查無資訊"})})]}),(0,g.jsx)(k.Z,{})]})}}},function(a){a.O(0,[99,921,372,774,888,179],function(){var b;return a(a.s=2774)}),_N_E=a.O()}])