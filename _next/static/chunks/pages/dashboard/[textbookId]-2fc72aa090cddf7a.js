(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{6941:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/[textbookId]",function(){return t(6693)}])},6693:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return h}});var n=t(5893);t(4005);var a=t(9008),r=t.n(a),l=t(7294),i=t(7029),c=t(9211),o=t(9186),d=t(8432),u=t.n(d),h=!0;s.default=e=>{let{textbookId:s}=e,[t,a]=(0,l.useState)({});(0,l.useEffect)(()=>{d(),setInterval(d,5e3)},[]);let d=async()=>{a(await (0,c.f)())},h=Object.keys(t);h.sort();let{isInstructor:p}=(0,c.Pc)();if(!p)return null;let b=(0,o.M)("app");if(null==b)throw"App not found";let x=b.textbooks.find(e=>e.id==s);if(null==x)throw"Textbook ".concat(s," not found");let f="".concat(x.titleJa," | ProtoSim");return(0,n.jsxs)(i.Z,{href:"../",children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:f})}),(0,n.jsxs)("main",{className:"container-fluid mt-4",children:[(0,n.jsxs)("h2",{children:["ダッシュボード ",">"," ",x.titleJa]}),(0,n.jsxs)("table",{className:"table "+u().table,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",className:u().headerRow+" "+u().username,children:"ユーザ名"}),x.pages.map(e=>"separator"===e.iconType?null:(0,n.jsx)(m,{page:e},e.id))]})}),(0,n.jsx)("tbody",{children:h.map(e=>{let s=t[e];return(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",className:u().username,children:s.displayName}),x.pages.map(e=>"separator"===e.iconType?null:(0,n.jsx)(_,{page:e,user:s},e.id))]},e)})})]})]})]})};let m=e=>{let{page:s}=e;return(0,n.jsx)("th",{scope:"col",className:u().headerRow,children:s.titleJa})},_=e=>{let{page:s,user:t}=e,a="true"===t.memories["pageCompleted_".concat(s.id)],r=null!=t.memories.currentPage&&JSON.parse(t.memories.currentPage).pageId===s.id&&new Date().getTime()-JSON.parse(t.memories.currentPage).timestamp<=1e4;return 0===s.missionKeys.length?(0,n.jsx)("td",{className:u().cell+" "+(r?u().viewed:""),children:(0,n.jsx)("div",{className:u().missions,children:(0,n.jsx)("div",{style:{background:a?"var(--bs-success-bg-subtle)":"none"},children:a&&"✓"})})}):(0,n.jsx)("td",{className:u().cell+" "+(r?u().viewed:""),children:(0,n.jsx)("div",{className:u().missions,children:s.missionKeys.map(e=>{let s="true"===t.memories["mission_".concat(e)];return(0,n.jsx)("div",{style:{background:s?"var(--bs-success-bg-subtle)":"none"},children:s&&"✓"},e)})})})}},4005:function(){},8432:function(e){e.exports={table:"Dashboard_table__6l68Z",headerRow:"Dashboard_headerRow__yTHlN",username:"Dashboard_username__gBuel",cell:"Dashboard_cell__6UDC1",missions:"Dashboard_missions__UE52K",viewed:"Dashboard_viewed__LMmqd"}}},function(e){e.O(0,[219,720,162,971,888,774,179],function(){return e(e.s=6941)}),_N_E=e.O()}]);