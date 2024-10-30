(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9758:function(e,t,n){"use strict";e.exports=n(9512)},9512:function(e,t,n){"use strict";var r=n(3454),o=function(e){if(e=e||{},this.Promise=e.Promise||Promise,this.queues=Object.create(null),this.domainReentrant=e.domainReentrant||!1,this.domainReentrant){if(void 0===r||void 0===r.domain)throw Error("Domain-reentrant locks require `process.domain` to exist. Please flip `opts.domainReentrant = false`, use a NodeJS version that still implements Domain, or install a browser polyfill.");this.domains=Object.create(null)}this.timeout=e.timeout||o.DEFAULT_TIMEOUT,this.maxOccupationTime=e.maxOccupationTime||o.DEFAULT_MAX_OCCUPATION_TIME,this.maxExecutionTime=e.maxExecutionTime||o.DEFAULT_MAX_EXECUTION_TIME,e.maxPending===1/0||Number.isInteger(e.maxPending)&&e.maxPending>=0?this.maxPending=e.maxPending:this.maxPending=o.DEFAULT_MAX_PENDING};o.DEFAULT_TIMEOUT=0,o.DEFAULT_MAX_OCCUPATION_TIME=0,o.DEFAULT_MAX_EXECUTION_TIME=0,o.DEFAULT_MAX_PENDING=1e3,o.prototype.acquire=function(e,t,n,o){if(Array.isArray(e))return this._acquireBatch(e,t,n,o);if("function"!=typeof t)throw Error("You must pass a function to execute");var i=null,a=null,c=null;"function"!=typeof n&&(o=n,n=null,c=new this.Promise(function(e,t){i=e,a=t})),o=o||{};var s=!1,u=null,l=null,d=null,h=this,f=function(t,r,o){l&&(clearTimeout(l),l=null),d&&(clearTimeout(d),d=null),t&&(h.queues[e]&&0===h.queues[e].length&&delete h.queues[e],h.domainReentrant&&delete h.domains[e]),s||(c?r?a(r):i(o):"function"==typeof n&&n(r,o),s=!0),t&&h.queues[e]&&h.queues[e].length>0&&h.queues[e].shift()()},m=function(n){if(s)return f(n);u&&(clearTimeout(u),u=null),h.domainReentrant&&n&&(h.domains[e]=r.domain);var i=o.maxExecutionTime||h.maxExecutionTime;if(i&&(d=setTimeout(function(){h.queues[e]&&f(n,Error("Maximum execution time is exceeded "+e))},i)),1===t.length){var a=!1;try{t(function(e,t){a||(a=!0,f(n,e,t))})}catch(e){a||(a=!0,f(n,e))}}else h._promiseTry(function(){return t()}).then(function(e){f(n,void 0,e)},function(e){f(n,e)})};if(h.domainReentrant&&r.domain&&(m=r.domain.bind(m)),h.queues[e]){if(h.domainReentrant&&r.domain&&r.domain===h.domains[e])m(!1);else if(h.queues[e].length>=h.maxPending)f(!1,Error("Too many pending tasks in queue "+e));else{var p=function(){m(!0)};o.skipQueue?h.queues[e].unshift(p):h.queues[e].push(p);var g=o.timeout||h.timeout;g&&(u=setTimeout(function(){u=null,f(!1,Error("async-lock timed out in queue "+e))},g))}}else h.queues[e]=[],m(!0);var v=o.maxOccupationTime||h.maxOccupationTime;if(v&&(l=setTimeout(function(){h.queues[e]&&f(!1,Error("Maximum occupation time is exceeded in queue "+e))},v)),c)return c},o.prototype._acquireBatch=function(e,t,n,r){"function"!=typeof n&&(r=n,n=null);var o=this,i=e.reduceRight(function(e,t){return function(n){o.acquire(t,e,n,r)}},t);if("function"!=typeof n)return new this.Promise(function(e,t){1===i.length?i(function(n,r){n?t(n):e(r)}):e(i())});i(n)},o.prototype.isBusy=function(e){return e?!!this.queues[e]:Object.keys(this.queues).length>0},o.prototype._promiseTry=function(e){try{return this.Promise.resolve(e())}catch(e){return this.Promise.reject(e)}},e.exports=o},3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4228)}])},8358:function(e,t,n){"use strict";n.d(t,{SE:function(){return u},ST:function(){return h},Yy:function(){return l},Zl:function(){return d}});var r=n(7294),o=n(9596),i=n(3029),a=n(4255);let c=e=>{var t,n;switch(e.type){case"enterAddressBar":return{message:"アドレスバーで ".concat(e.url," にアクセスした"),body:{url:e.url,valid:e.valid}};case"insertManually":return{message:"".concat("smartphone"===e.device?"スマートフォン":"Web サーバ","の").concat(o.KW[e.protocolIndex],"にデータを流し込んだ: ").concat(e.body),body:{device:e.device,protocolIndex:e.protocolIndex,body:e.body}};case"moveCover":return{message:"フタを".concat(e.isCoverOpen?"開けた":"閉じた"),body:{isCoverOpen:e.isCoverOpen}};case"toggleServer":return{message:"Webサーバのディスプレイを".concat(e.isServerOpen?"点けた":"消した"),body:{}};case"setExplorerPath":return{message:"Webサーバのディスプレイで ".concat(e.path," を開いた"),body:{path:e.path,prevPath:e.prevPath,direction:e.direction}};case"switchRouterArea":return{message:"ルータエリアを ".concat(e.isRouterAreaOpen?"開いた":"閉じた"),body:{isRouterAreaOpen:e.isRouterAreaOpen}};case"hoverRouter":return{message:"".concat(e.ipAddress," のルーターにマウスを").concat("enter"===e.direction?"乗せた":"外した (".concat(Math.round(null!==(t=e.duration)&&void 0!==t?t:-1),"ミリ秒)")),body:{ipAddress:e.ipAddress,direction:e.direction,duration:e.duration}};case"copyRouterIpAddress":return{message:"".concat(e.ipAddress," のルーターから「").concat(e.copiedIpAddress,"」をコピーした"),body:{ipAddress:e.ipAddress,copiedIpAddress:e.copiedIpAddress}};case"openProtocol":return{message:"".concat("smartphone"===e.device?"スマートフォン":"Web サーバ","の").concat(o.KW[e.protocolIndex],"の設定画面を開いた"),body:{device:e.device,protocolIndex:e.protocolIndex}};case"changeProtocol":return{message:"".concat("smartphone"===e.device?"スマートフォン":"Web サーバ","の").concat(o.KW[e.protocolIndex],"のプロトコルを").concat(e.protocol.nameJa,"に変更した"),body:{device:e.device,protocolIndex:e.protocolIndex,protocolName:e.protocol.nameJa}};case"openDataPage":return{message:"".concat("smartphone"===e.device?"スマートフォン":"Web サーバ","で").concat("downToUp"===e.direction?"上":"下","向きの").concat(o.KW[e.protocolIndex],"に流れた情報を観察した"),body:{device:e.device,direction:e.direction,protocolIndex:e.protocolIndex}};case"openPreference":return{message:"設定画面を開いた",body:{}};case"setPacketLoss":return{message:"パケットロス設定を".concat(0===e.packetLoss?"発生無しにした":"発生させるようにした"),body:{packetLoss:e.packetLoss}};case"setProcessSpeed":return{message:"データが流れるスピードを ".concat(e.processSpeed," 段階目に変更した"),body:{processSpeed:e.processSpeed}};case"closeSideArea":return{message:"サイドエリアを閉じた",body:{}};case"hoverTerminology":return{message:"専門用語「".concat(e.text,"」にマウスを").concat("enter"===e.direction?"乗せた":"外した (".concat(Math.round(null!==(n=e.duration)&&void 0!==n?n:-1),"ミリ秒)")),body:{text:e.text,direction:e.direction,duration:e.duration}};case"submitTextboxes":return{message:"".concat(e.missionId," のミッションのテキストボックスに ").concat(JSON.stringify(e.values)," と入力された状態で決定ボタンを押した"),body:{missionId:e.missionId,values:e.values}};case"showHint":return{message:"".concat(e.missionId," のミッションの ").concat(e.numVisibleHints," 番目のヒントを表示した"),body:{missionId:e.missionId,numVisibleHints:e.numVisibleHints}}}},s=e=>{switch(e.type){case"achieveMission":return{message:"ミッション ".concat(e.missionId," を達成した (ヒントの数：").concat(e.numHints,")"),body:{missionId:e.missionId,numHints:e.numHints}};case"completePage":return{message:"ページ ".concat(e.pageId," を達成した"),body:{pageId:e.pageId}}}},u=async e=>{let t={type:e.type,href:window.location.href,origin:window.location.origin,pathname:window.location.pathname,screen:{width:screen.width,height:screen.height},window:{width:window.innerWidth,height:window.innerHeight},language:await (0,i.G3)(),...c(e)};return await (0,a.k)("/send_action_log",t)},l=async e=>{let t={type:e.type,href:window.location.href,origin:window.location.origin,pathname:window.location.pathname,screen:{width:screen.width,height:screen.height},window:{width:window.innerWidth,height:window.innerHeight},language:await (0,i.G3)(),...s(e)};return await (0,a.k)("/send_action_log",t)},d=async e=>{let t={type:e.type,href:window.location.href,origin:window.location.origin,pathname:window.location.pathname,screen:{width:screen.width,height:screen.height},window:{width:window.innerWidth,height:window.innerHeight},language:await (0,i.G3)()};return await (0,a.k)("/send_action_log",t)},h=()=>{(0,r.useEffect)(()=>{(async()=>{d({type:"view"})})()},[]),(0,r.useEffect)(()=>{setInterval(async()=>{d({type:"keep"})},1e4)},[])}},9211:function(e,t,n){"use strict";let r;n.d(t,{Ms:function(){return l},jl:function(){return d}});var o=n(9758),i=n.n(o),a=n(4255);let c=new(i()),s=new Date("2000/1/1");async function u(){r=await fetch(a.z+"/student/get_user.cgi").then(e=>{if(e.ok)return e.json()}).then(e=>e.username?e.username:null).catch(()=>{}),s=new Date}async function l(){return await c.acquire("getUsername",async()=>{new Date().getTime()-s.getTime()>6e4&&await u()}),r}async function d(){return await l()!=null}},4255:function(e,t,n){"use strict";n.d(t,{k:function(){return o},z:function(){return r}});let r="https://v2-backend.protosim.csle-lab.org",o=async(e,t)=>{try{return await fetch(r+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"}).then(e=>{})}catch(e){return}}},3029:function(e,t,n){"use strict";n.d(t,{G3:function(){return i},Jr:function(){return c},QU:function(){return u},XX:function(){return s},m0:function(){return a}});var r=n(7294);let o="PROTOSIM_LOCALIZE_",i=async()=>{let e=localStorage.getItem(o+"language");return null==e?"ja"===window.navigator.language?"ja":"en":e},a=async e=>{localStorage.setItem(o+"language",e)},c=()=>{let[e,t]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async()=>{t(await i())})()},[]),e},s=(e,t)=>{let n=c();return"ja"===n?e:"en"===n?t:""},u=(e,t,n)=>"ja"===e?t:"en"===e?n:""},9596:function(e,t,n){"use strict";n.d(t,{BY:function(){return a},KW:function(){return i},dt:function(){return o},vJ:function(){return r}});let r={ApplicationLayer:4,TransportLayer:3,InternetLayer:2,NetworkInterfaceLayer:1},o={4:"ApplicationLayer",3:"TransportLayer",2:"InternetLayer",1:"NetworkInterfaceLayer"},i={4:"アプリケーション層",3:"トランスポート層",2:"インターネット層",1:"ネットワークインタフェース層"},a={4:"Application Layer",3:"Transport Layer",2:"Internet Layer",1:"Network Interface Layer"}},4228:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),o=n(9008),i=n.n(o),a=n(7294),c=n(8358);/*! js-cookie v3.0.5 | MIT */function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var u=function e(t,n){function r(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=s({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var a in o)o[a]&&(i+="; "+a,!0!==o[a]&&(i+="="+o[a].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+i}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var i=n[o].split("="),a=i.slice(1).join("=");try{var c=decodeURIComponent(i[0]);if(r[c]=t.read(a,c),e===c)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){r(e,"",s({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,s({},this.attributes,t))},withConverter:function(t){return e(s({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),l=n(1864),d=n.n(l);let h=()=>"https://".concat(location.host.replace("protosim","auth")),f="PROTOSIM_ACCESS_TOKEN";async function m(){return await fetch(d().join("getBackendPath()","student/issue_access_token.cgi"),{method:"POST"}).then(e=>{if(e.ok)return e.json()}).then(e=>(u.set(f,e.accessToken,{path:"/"}),e)).catch(()=>({accessToken:"",enableKey:""}))}async function p(e){let t=new URLSearchParams;t.set("app","ProtoSim"),t.set("enableKey",e),t.set("redirect",window.location.href),window.location.assign("".concat(h(),"/student/enableAccessToken/?").concat(t))}var g=n(9211),v=n(3029),y=n(581),w=n.n(y),x=()=>{let e=(0,v.Jr)(),[t,n]=(0,a.useState)(void 0);async function o(){await (0,c.Zl)({type:"login"});let{accessToken:e,enableKey:t}=await m();await p(t)}async function s(){await (0,c.Zl)({type:"logout"}),u.remove(f,{path:"/"}),n(null)}(0,c.ST)(),(0,a.useEffect)(()=>{(async()=>{n(await (0,g.Ms)())})()},[]);let l="ja"===e?"ProtoSim - 通信プロトコルシミュレータ":"en"===e?"ProtoSim - Communication Protocol Simulator":"ProtoSim";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:l})}),(0,r.jsx)("div",{className:w().home,children:(0,r.jsxs)("main",{className:w().homeInner,children:[(0,r.jsxs)("h1",{children:[(0,v.QU)(e,"通信プロトコルシミュレータ","Communication Protocol Simulator"),(0,r.jsx)("br",{}),"ProtoSim","ja"===e&&(0,r.jsx)("div",{children:"プロトシム"})]}),(0,r.jsx)("div",{className:w().formArea,children:null===t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:w().formPanel,children:(0,r.jsx)("div",{className:w().row,children:(0,r.jsx)("button",{className:w().button,type:"button",onClick:e=>o(),children:(0,v.QU)(e,"学習環境ID でログイン","Login with CSLE-ID")})})}),(0,r.jsx)("div",{className:w().formPanel,children:(0,r.jsx)("div",{className:w().row,children:(0,r.jsx)("a",{className:w().button,href:"./app",children:(0,v.QU)(e,"ゲストユーザとして利用","Use as Guest")})})})]}):null!=t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:w().formPanel,children:(0,r.jsx)("div",{className:w().row,children:(0,r.jsxs)("a",{className:w().button,href:"./app",children:["ユーザ "+t+" として利用",(0,v.QU)(e,"ユーザ "+t+" として利用","Use as a User: "+t)]})})}),(0,r.jsx)("div",{className:w().formPanel,children:(0,r.jsx)("div",{className:w().row,children:(0,r.jsx)("button",{className:w().button,type:"button",onClick:e=>s(),children:(0,v.QU)(e,"ログアウト","Logout")})})})]}):(0,r.jsx)("div",{className:w().formPanel,children:(0,r.jsx)("div",{className:w().row,children:(0,r.jsx)("a",{className:w().button,href:"./app",children:(0,v.QU)(e,"ゲストユーザとして利用","Use as Guest")})})})})]})})]})}},581:function(e){e.exports={home:"Top_home__lcaWq",homeInner:"Top_homeInner___OcCe",formArea:"Top_formArea__6VUX_",formPanel:"Top_formPanel__Qf5rH",row:"Top_row__uYtsC",col:"Top_col__IcYgU",button:"Top_button__DDkXm",loginMessage:"Top_loginMessage__zCn9v",fadeUp:"Top_fadeUp__kpYpL",fadeUpAnim:"Top_fadeUpAnim__2N1zS"}},1864:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",o=0,i=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)n=e.charCodeAt(c);else if(47===n)break;else n=47;if(47===n){if(i===c-1||1===a);else if(i!==c-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var s=r.lastIndexOf("/");if(s!==r.length-1){-1===s?(r="",o=0):o=(r=r.slice(0,s)).length-1-r.lastIndexOf("/"),i=c,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=c,a=0;continue}}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,c):r=e.slice(i+1,c),o=c-i-1;i=c,a=0}else 46===n&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r,o="",i=!1,a=arguments.length-1;a>=-1&&!i;a--)a>=0?r=arguments[a]:(void 0===e&&(e=""),r=e),t(r),0!==r.length&&(o=r+"/"+o,i=47===r.charCodeAt(0));return(o=n(o,!i),i)?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var o=arguments[n];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=r.resolve(e))===(n=r.resolve(n)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var i=e.length,a=i-o,c=1;c<n.length&&47===n.charCodeAt(c);++c);for(var s=n.length-c,u=a<s?a:s,l=-1,d=0;d<=u;++d){if(d===u){if(s>u){if(47===n.charCodeAt(c+d))return n.slice(c+d+1);if(0===d)return n.slice(c+d)}else a>u&&(47===e.charCodeAt(o+d)?l=d:0===d&&(l=0));break}var h=e.charCodeAt(o+d);if(h!==n.charCodeAt(c+d))break;47===h&&(l=d)}var f="";for(d=o+l+1;d<=i;++d)(d===i||47===e.charCodeAt(d))&&(0===f.length?f+="..":f+="/..");return f.length>0?f+n.slice(c+l):(c+=l,47===n.charCodeAt(c)&&++c,n.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,o=-1,i=!0,a=e.length-1;a>=1;--a)if(47===(n=e.charCodeAt(a))){if(!i){o=a;break}}else i=!1;return -1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var r,o=0,i=-1,a=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var c=n.length-1,s=-1;for(r=e.length-1;r>=0;--r){var u=e.charCodeAt(r);if(47===u){if(!a){o=r+1;break}}else -1===s&&(a=!1,s=r+1),c>=0&&(u===n.charCodeAt(c)?-1==--c&&(i=r):(c=-1,i=s))}return o===i?i=s:-1===i&&(i=e.length),e.slice(o,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){o=r+1;break}}else -1===i&&(a=!1,i=r+1);return -1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var n=-1,r=0,o=-1,i=!0,a=0,c=e.length-1;c>=0;--c){var s=e.charCodeAt(c);if(47===s){if(!i){r=c+1;break}continue}-1===o&&(i=!1,o=c+1),46===s?-1===n?n=c:1!==a&&(a=1):-1!==n&&(a=-1)}return -1===n||-1===o||0===a||1===a&&n===o-1&&n===r+1?"":e.slice(n,o)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var o=e.charCodeAt(0),i=47===o;i?(r.root="/",n=1):n=0;for(var a=-1,c=0,s=-1,u=!0,l=e.length-1,d=0;l>=n;--l){if(47===(o=e.charCodeAt(l))){if(!u){c=l+1;break}continue}-1===s&&(u=!1,s=l+1),46===o?-1===a?a=l:1!==d&&(d=1):-1!==a&&(d=-1)}return -1===a||-1===s||0===d||1===d&&a===s-1&&a===c+1?-1!==s&&(0===c&&i?r.base=r.name=e.slice(1,s):r.base=r.name=e.slice(c,s)):(0===c&&i?(r.name=e.slice(1,a),r.base=e.slice(1,s)):(r.name=e.slice(c,a),r.base=e.slice(c,s)),r.ext=e.slice(a,s)),c>0?r.dir=e.slice(0,c-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(114);e.exports=o}()},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s=[],u=!1,l=-1;function d(){u&&r&&(u=!1,r.length?s=r.concat(s):l=-1,s.length&&h())}function h(){if(!u){var e=c(d);u=!0;for(var t=s.length;t;){for(r=s,s=[];++l<t;)r&&r[l].run();l=-1,t=s.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new f(e,t)),1!==s.length||u||c(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},9008:function(e,t,n){e.exports=n(7828)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);