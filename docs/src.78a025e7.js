parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yhe3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=xt,exports.removeChildren=Et,exports.MOUSEOVER=exports.MOUSEMOVE=exports.MOUSELEAVE=exports.MOUSEENTER=exports.MOUSEDOWN=exports.METER=exports.MARK=exports.MAP=exports.MAIN=exports.LOAD=exports.LINK=exports.LI=exports.LEGEND=exports.LABEL=exports.KEYUP=exports.KEYPRESS=exports.KEYDOWN=exports.KBD=exports.ITALIC=exports.INS=exports.INPUT=exports.INNER_TEXT=exports.INNER_HTML=exports.IMG=exports.IFRAME=exports.ID=exports.HREF=exports.HR=exports.HEIGHT=exports.HEADER=exports.H6=exports.H5=exports.H4=exports.H3=exports.H2=exports.H1=exports.GET_CONTEXT=exports.FOR_EACH=exports.FORM=exports.FOOTER=exports.FOCUS=exports.FILTER=exports.FILL_STYLE=exports.FILL_RECT=exports.FIGURE=exports.FIGCAPTION=exports.FIELDSET=exports.EMBED=exports.EM=exports.DT=exports.DROP=exports.DRAGSTART=exports.DRAGOVER=exports.DRAGLEAVE=exports.DRAGEXIT=exports.DRAGENTER=exports.DRAGEND=exports.DRAG=exports.DL=exports.DIV=exports.DISABLED=exports.DIALOG=exports.DFN=exports.DETAILS=exports.DEL=exports.DD=exports.DBLCLICK=exports.DATALIST=exports.DATA=exports.COLGROUP=exports.COL=exports.CODE=exports.CLIENT_WIDTH=exports.CLIENT_HEIGHT=exports.CLICK=exports.CLEAR_INTERVAL=exports.CLASS_NAME=exports.CITE=exports.CHECKED=exports.CHECKBOX=exports.CHANGE=exports.CAPTION=exports.CANVAS=exports.BUTTON=exports.BR=exports.BOLD=exports.BLUR=exports.BLOCKQUOTE=exports.BDO=exports.BDI=exports.AUDIO=exports.ASIDE=exports.ARTICLE=exports.AREA=exports.APPEND=exports.ANCHOR=exports.ALLOW=exports.ADD_EVENT_LISTENER=exports.ADDRESS=exports.ABBR=void 0,exports.WIDTH=exports.WHEEL=exports.VIDEO=exports.VAR=exports.VALUE=exports.UL=exports.TYPE=exports.TRANSITIONSTART=exports.TRANSITIONRUN=exports.TRANSITIONEND=exports.TRANSITIONCANCEL=exports.TRACK=exports.TR=exports.TOUCHSTART=exports.TOUCHMOVE=exports.TOUCHES=exports.TOUCHEND=exports.TOUCHCANCEL=exports.TITLE=exports.TIME=exports.THEAD=exports.TH=exports.TFOOT=exports.TEXT_CONTENT=exports.TEXTAREA=exports.TEXT=exports.TD=exports.TBODY=exports.TABLE=exports.SUB=exports.STRONG=exports.SPELLCHECK=exports.SPAN=exports.SOURCE=exports.SMALL=exports.SET_INTERVAL=exports.SET_ATTRIBUTE=exports.SELECT=exports.SECTION=exports.SCROLL=exports.SAMP=exports.RESIZE=exports.REMOVE_CHILD=exports.REL=exports.REDUCE=exports.RADIO=exports.QUOTE=exports.PROGRESS=exports.PRE=exports.PLAY=exports.PICTURE=exports.PAUSE=exports.PARENT_ELEMENT=exports.PARAM=exports.PARAGRAPH=exports.PAGE_Y=exports.PAGE_X=exports.OUTPUT=exports.OUTER_HTML=exports.OPTION=exports.OPTGROUP=exports.OL=exports.OFFSET_Y=exports.OFFSET_X=exports.OBJECT=exports.NOSCRIPT=exports.NAV=exports.MOUSEUP=void 0;var r="allow";exports.ALLOW=r;var e="blur";exports.BLUR=e;var t="change";exports.CHANGE=t;var o="click";exports.CLICK=o;var s="dblclick";exports.DBLCLICK=s;var p="drag";exports.DRAG=p;var x="dragend";exports.DRAGEND=x;var E="dragenter";exports.DRAGENTER=E;var a="dragexit";exports.DRAGEXIT=a;var T="dragleave";exports.DRAGLEAVE=T;var v="dragover";exports.DRAGOVER=v;var A="dragstart";exports.DRAGSTART=A;var R="drop";exports.DROP=R;var O="focus";exports.FOCUS=O;var L="input";exports.INPUT=L;var I="keydown";exports.KEYDOWN=I;var D="keypress";exports.KEYPRESS=D;var C="keyup";exports.KEYUP=C;var N="load";exports.LOAD=N;var S="mousedown";exports.MOUSEDOWN=S;var i="mouseenter";exports.MOUSEENTER=i;var l="mouseleave";exports.MOUSELEAVE=l;var U="mousemove";exports.MOUSEMOVE=U;var H="mouseover";exports.MOUSEOVER=H;var d="mouseup";exports.MOUSEUP=d;var n="pause";exports.PAUSE=n;var P="play";exports.PLAY=P;var M="resize";exports.RESIZE=M;var c="scroll";exports.SCROLL=c;var G="touchcancel";exports.TOUCHCANCEL=G;var _="touchend";exports.TOUCHEND=_;var u="touchmove";exports.TOUCHMOVE=u;var B="touchstart";exports.TOUCHSTART=B;var F="transitioncancel";exports.TRANSITIONCANCEL=F;var h="transitionend";exports.TRANSITIONEND=h;var V="transitionrun";exports.TRANSITIONRUN=V;var m="transitionstart";exports.TRANSITIONSTART=m;var K="wheel";exports.WHEEL=K;var f="id";exports.ID=f;var g="rel";exports.REL=g;var b="type";exports.TYPE=b;var X="className";exports.CLASS_NAME=X;var Y="value";exports.VALUE=Y;var k="checked";exports.CHECKED=k;var W="disabled";exports.DISABLED=W;var y="href";exports.HREF=y;var w="textContent";exports.TEXT_CONTENT=w;var Q="innerText";exports.INNER_TEXT=Q;var j="innerHTML";exports.INNER_HTML=j;var q="outerHTML";exports.OUTER_HTML=q;var J="width";exports.WIDTH=J;var Z="height";exports.HEIGHT=Z;var z="parentElement";exports.PARENT_ELEMENT=z;var $="clientWidth";exports.CLIENT_WIDTH=$;var rr="clientHeight";exports.CLIENT_HEIGHT=rr;var er="offsetX";exports.OFFSET_X=er;var tr="offsetY";exports.OFFSET_Y=tr;var or="touches";exports.TOUCHES=or;var sr="pageX";exports.PAGE_X=sr;var pr="pageY";exports.PAGE_Y=pr;var xr="fillStyle";exports.FILL_STYLE=xr;var Er="text";exports.TEXT=Er;var ar="radio";exports.RADIO=ar;var Tr="checkbox";exports.CHECKBOX=Tr;var vr="append";exports.APPEND=vr;var Ar="removeChild";exports.REMOVE_CHILD=Ar;var Rr="addEventListener";exports.ADD_EVENT_LISTENER=Rr;var Or="setInterval";exports.SET_INTERVAL=Or;var Lr="clearInterval";exports.CLEAR_INTERVAL=Lr;var Ir="getContext";exports.GET_CONTEXT=Ir;var Dr="fillRect";exports.FILL_RECT=Dr;var Cr="forEach";exports.FOR_EACH=Cr;var Nr="filter";exports.FILTER=Nr;var Sr="reduce";exports.REDUCE=Sr;var ir="setAttribute";exports.SET_ATTRIBUTE=ir;var lr="a";exports.ANCHOR=lr;var Ur="abbr";exports.ABBR=Ur;var Hr="address";exports.ADDRESS=Hr;var dr="area";exports.AREA=dr;var nr="article";exports.ARTICLE=nr;var Pr="aside";exports.ASIDE=Pr;var Mr="audio";exports.AUDIO=Mr;var cr="b";exports.BOLD=cr;var Gr="bdi";exports.BDI=Gr;var _r="bdo";exports.BDO=_r;var ur="blockquote";exports.BLOCKQUOTE=ur;var Br="br";exports.BR=Br;var Fr="button";exports.BUTTON=Fr;var hr="canvas";exports.CANVAS=hr;var Vr="caption";exports.CAPTION=Vr;var mr="cite";exports.CITE=mr;var Kr="code";exports.CODE=Kr;var fr="col";exports.COL=fr;var gr="colgroup";exports.COLGROUP=gr;var br="data";exports.DATA=br;var Xr="datalist";exports.DATALIST=Xr;var Yr="dd";exports.DD=Yr;var kr="del";exports.DEL=kr;var Wr="details";exports.DETAILS=Wr;var yr="dfn";exports.DFN=yr;var wr="dialog";exports.DIALOG=wr;var Qr="div";exports.DIV=Qr;var jr="dl";exports.DL=jr;var qr="dt";exports.DT=qr;var Jr="em";exports.EM=Jr;var Zr="embed";exports.EMBED=Zr;var zr="fieldset";exports.FIELDSET=zr;var $r="figcaption";exports.FIGCAPTION=$r;var re="figure";exports.FIGURE=re;var ee="footer";exports.FOOTER=ee;var te="form";exports.FORM=te;var oe="h1";exports.H1=oe;var se="h2";exports.H2=se;var pe="h3";exports.H3=pe;var xe="h4";exports.H4=xe;var Ee="h5";exports.H5=Ee;var ae="h6";exports.H6=ae;var Te="header";exports.HEADER=Te;var ve="hr";exports.HR=ve;var Ae="i";exports.ITALIC=Ae;var Re="iframe";exports.IFRAME=Re;var Oe="img";exports.IMG=Oe;var Le="ins";exports.INS=Le;var Ie="kbd";exports.KBD=Ie;var De="label";exports.LABEL=De;var Ce="legend";exports.LEGEND=Ce;var Ne="li";exports.LI=Ne;var Se="link";exports.LINK=Se;var ie="main";exports.MAIN=ie;var le="map";exports.MAP=le;var Ue="mark";exports.MARK=Ue;var He="meter";exports.METER=He;var de="nav";exports.NAV=de;var ne="noscript";exports.NOSCRIPT=ne;var Pe="object";exports.OBJECT=Pe;var Me="ol";exports.OL=Me;var ce="optgroup";exports.OPTGROUP=ce;var Ge="option";exports.OPTION=Ge;var _e="output";exports.OUTPUT=_e;var ue="p";exports.PARAGRAPH=ue;var Be="param";exports.PARAM=Be;var Fe="picture";exports.PICTURE=Fe;var he="pre";exports.PRE=he;var Ve="progress";exports.PROGRESS=Ve;var me="q";exports.QUOTE=me;var Ke="samp";exports.SAMP=Ke;var fe="section";exports.SECTION=fe;var ge="select";exports.SELECT=ge;var be="small";exports.SMALL=be;var Xe="source";exports.SOURCE=Xe;var Ye="span";exports.SPAN=Ye;var ke="strong";exports.STRONG=ke;var We="sub";exports.SUB=We;var ye="textarea";exports.TEXTAREA=ye;var we="table";exports.TABLE=we;var Qe="thead";exports.THEAD=Qe;var je="tbody";exports.TBODY=je;var qe="tfoot";exports.TFOOT=qe;var Je="th";exports.TH=Je;var Ze="tr";exports.TR=Ze;var ze="td";exports.TD=ze;var $e="time";exports.TIME=$e;var rt="track";exports.TRACK=rt;var et="ul";exports.UL=et;var tt="var";exports.VAR=tt;var ot="video";exports.VIDEO=ot;var st="spellcheck";exports.SPELLCHECK=st;var pt="title";function xt(r,e){var t=document.createElement(r);return e&&e(t),t}function Et(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var o=e.length;if(o)for(;o;)r.removeChild(e[--o]);else for(;r.lastChild;)r.removeChild(r.lastChild)}exports.TITLE=pt;
},{}],"Ebgf":[function(require,module,exports) {
"use strict";function e(t){for(var r,n=0,o="";n<t.length;)(r=t[n++])&&(r.pop&&!(r=e(r))||(o&&(o+=" "),o+=r));return o}function t(){return e(arguments)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"z2Kq":[function(require,module,exports) {
module.exports={timeText:"_timeText_149c8"};
},{}],"X038":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var i={};if(null!=r)for(var n in r)"default"!==n&&Object.prototype.hasOwnProperty.call(r,n)&&e(i,r,n);return t(i,r),i};Object.defineProperty(exports,"__esModule",{value:!0}),exports.setTimeText=void 0;var i=require("noliter"),n=r(require("./TimeText.scss")),o=i.createElement(i.SPAN,function(e){return e[i.ID]=n.timeText});function u(e){return("0"+Math.floor(e)).slice(-2)}function c(e){o[i.TEXT_CONTENT]=u(e/60)+":"+u(e%60)}exports.setTimeText=c,exports.default=o;
},{"noliter":"yhe3","./TimeText.scss":"z2Kq"}],"Ngyh":[function(require,module,exports) {
module.exports={canvas:"_canvas_8cfbb"};
},{}],"EKXa":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var r={};if(null!=n)for(var i in n)"default"!==i&&Object.prototype.hasOwnProperty.call(n,i)&&e(r,n,i);return t(r,n),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.draw=void 0;var r=require("noliter"),i=require("~/TimeData"),E=n(require("./RedCircle.scss")),a=r.createElement(r.LINK,function(e){e[r.REL]="shortcut icon"});function o(){i.setModified(!0)}function u(){i.setModified(!1)}function c(e){return Math.PI/180*e}function f(e,t){return 180*Math.atan(t/e)/Math.PI}function s(e,t){if(i.isModified()&&!i.isStarted()){var n=f(e,t);e<0&&0<=t||e<0&&t<0?i.setDegree(n+270):i.setDegree(n+90),i.syncView()}}document.head[r.APPEND](a);var T=r.createElement(r.CANVAS,function(e){e[r.ID]=E.canvas,e[r.ADD_EVENT_LISTENER](r.MOUSEMOVE,function(e){return s(e[r.OFFSET_X]-T[r.WIDTH]/2,e[r.OFFSET_Y]-T[r.HEIGHT]/2)},{passive:!0}),e[r.ADD_EVENT_LISTENER](r.TOUCHMOVE,function(e){var t=e[r.TOUCHES][0],n=T.getBoundingClientRect();s(t[r.PAGE_X]-n.x-T[r.WIDTH]/2,t[r.PAGE_Y]-n.y-T[r.HEIGHT]/2)},{passive:!0}),e[r.ADD_EVENT_LISTENER](r.MOUSEDOWN,o),e[r.ADD_EVENT_LISTENER](r.TOUCHSTART,o),e[r.ADD_EVENT_LISTENER](r.MOUSEUP,u),e[r.ADD_EVENT_LISTENER](r.MOUSELEAVE,u),e[r.ADD_EVENT_LISTENER](r.TOUCHEND,u)}),l=T.getContext("2d");function d(e){var t=T[r.WIDTH],n=T[r.HEIGHT],i=t/2,E=n/2;l.clearRect(0,0,t,n),l.fillStyle="#E31936",l.beginPath(),l.arc(i,E,i,c(270),c(e-90),!0),l.lineTo(i,E),l.closePath(),l.fill(),a.href=T.toDataURL()}exports.draw=d,exports.default=T;
},{"noliter":"yhe3","~/TimeData":"z4Ju","./RedCircle.scss":"Ngyh"}],"z4Ju":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.syncView=exports.setSeconds=exports.getSeconds=exports.setDegree=exports.getDegree=exports.setStarted=exports.isStarted=exports.setModified=exports.isModified=void 0;var e=require("./timer/TimeText"),t=require("./clock/RedCircle"),r=!1,o=!1,s=270,i=900;function n(){return r}function d(e){r=e}function x(){return o}function c(e){o=e}function p(){return s}function u(e){a(Math.round(10*(360-e)))}function f(){return i}function a(e){i=e,s=360-e/10}function g(){e.setTimeText(i),t.draw(s)}exports.isModified=n,exports.setModified=d,exports.isStarted=x,exports.setStarted=c,exports.getDegree=p,exports.setDegree=u,exports.getSeconds=f,exports.setSeconds=a,exports.syncView=g;
},{"./timer/TimeText":"X038","./clock/RedCircle":"EKXa"}],"xyIx":[function(require,module,exports) {
module.exports={clock:"_clock_a31ac",circle:"_circle_a31ac",min:"_min_a31ac",m0:"_m0_a31ac",m5:"_m5_a31ac",m10:"_m10_a31ac",m15:"_m15_a31ac",m20:"_m20_a31ac",m25:"_m25_a31ac",m30:"_m30_a31ac",m35:"_m35_a31ac",m40:"_m40_a31ac",m45:"_m45_a31ac",m50:"_m50_a31ac",m55:"_m55_a31ac"};
},{}],"lrfV":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var n={};if(null!=r)for(var i in r)"default"!==i&&Object.prototype.hasOwnProperty.call(r,i)&&e(n,r,i);return t(n,r),n},n=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var u=i(require("one-spaces")),c=require("noliter"),o=require("~/TimeData"),a=i(require("~/clock/RedCircle")),l=r(require("./Clock.scss"));exports.default=c.createElement(c.SECTION,function(e){e[c.ID]=l.clock,e[c.APPEND].apply(e,n([c.createElement(c.DIV,function(e){e[c.ID]=l.circle,e[c.APPEND](a.default)})],n([],Array(12)).map(function(e,t){return 5*t}).map(function(e){return c.createElement(c.BUTTON,function(t){t[c.TEXT_CONTENT]=e.toString(),t[c.CLASS_NAME]=u.default(l.min,l["m"+e]),t[c.ADD_EVENT_LISTENER](c.CLICK,function(){o.isStarted()||(o.setSeconds(60*e),o.syncView())})})})))});
},{"one-spaces":"Ebgf","noliter":"yhe3","~/TimeData":"z4Ju","~/clock/RedCircle":"EKXa","./Clock.scss":"xyIx"}],"Pqa1":[function(require,module,exports) {
module.exports={timer:"_timer_40ba1",btn:"_btn_40ba1",reset:"_reset_40ba1",start:"_start_40ba1",pause:"_pause_40ba1"};
},{"./images\\replay.svg":[["replay.f081d9cd.svg","B7rK"],"B7rK"],"./images\\start.svg":[["start.d7b2ab09.svg","UPno"],"UPno"],"./images\\pause.svg":[["pause.d96b7309.svg","whN6"],"whN6"]}],"mvQq":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var n={};if(null!=r)for(var i in r)"default"!==i&&Object.prototype.hasOwnProperty.call(r,i)&&e(n,r,i);return t(n,r),n},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=n(require("one-spaces")),u=require("noliter"),a=require("~/TimeData"),o=n(require("~/timer/TimeText")),s=r(require("./Timer.scss")),c=u.createElement(u.BUTTON,function(e){e[u.CLASS_NAME]=i.default(s.btn,s.reset),e[u.ADD_EVENT_LISTENER](u.CLICK,function(){a.setSeconds(900),a.syncView()})}),l=u.createElement(u.BUTTON,function(e){var t,r;e[u.CLASS_NAME]=i.default(s.btn,s.start),e[u.ADD_EVENT_LISTENER](u.CLICK,(t=null,r=function(){a.setStarted(!1),c[u.DISABLED]=!1,l[u.CLASS_NAME]=i.default(s.btn,s.start),clearInterval(t)},function(){a.isStarted()?r():(a.setStarted(!0),c[u.DISABLED]=!0,l[u.CLASS_NAME]=i.default(s.btn,s.pause),t=window.setInterval(function(){var e=a.getSeconds()-1;a.setSeconds(e),e<1&&r(),a.syncView()},1e3))}))});exports.default=u.createElement(u.SECTION,function(e){e[u.ID]=s.timer,e[u.APPEND](c,o.default,l)});
},{"one-spaces":"Ebgf","noliter":"yhe3","~/TimeData":"z4Ju","~/timer/TimeText":"X038","./Timer.scss":"Pqa1"}],"eHzx":[function(require,module,exports) {
module.exports={app:"_app_d496b",header:"_header_d496b"};
},{}],"QCba":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var i={};if(null!=r)for(var n in r)"default"!==n&&Object.prototype.hasOwnProperty.call(r,n)&&e(i,r,n);return t(i,r),i},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("noliter"),u=i(require("~/clock/Clock")),a=i(require("~/clock/RedCircle")),o=i(require("~/timer/Timer")),c=require("~/TimeData"),l=r(require("./index.scss"));function d(){a.default[n.WIDTH]=a.default[n.PARENT_ELEMENT][n.CLIENT_WIDTH],a.default[n.HEIGHT]=a.default[n.PARENT_ELEMENT][n.CLIENT_HEIGHT],c.syncView()}document.body[n.APPEND](n.createElement(n.ARTICLE,function(e){e[n.ID]=l.app,e[n.APPEND](n.createElement(n.HEADER,function(e){e[n.ID]=l.header,e[n.TEXT_CONTENT]="Time Timer"}),u.default,o.default)})),window.addEventListener(n.RESIZE,d),d();
},{"noliter":"yhe3","~/clock/Clock":"lrfV","~/clock/RedCircle":"EKXa","~/timer/Timer":"mvQq","~/TimeData":"z4Ju","./index.scss":"eHzx"}]},{},["QCba"], null)
//# sourceMappingURL=src.78a025e7.js.map