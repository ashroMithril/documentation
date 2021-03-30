(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(221)),c={title:"Compare Code across Enviroments",sidebar_label:"Compare Code"},i={unversionedId:"howtos/basics/compare-code",id:"howtos/basics/compare-code",isDocsHomePage:!1,title:"Compare Code across Enviroments",description:"How to compare code?",source:"@site/docs/howtos/basics/compare-code.md",slug:"/howtos/basics/compare-code",permalink:"/docs/howtos/basics/compare-code",version:"current",sidebar_label:"Compare Code",sidebar:"howtos",previous:{title:"FAQ Management",permalink:"/docs/howtos/basics/add-faqs"},next:{title:"Cloud Function",permalink:"/docs/howtos/create/cloud-function"}},p=[{value:"How to compare code?",id:"how-to-compare-code",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"how-to-compare-code"},"How to compare code?"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Keywords")," : compare"),Object(a.b)("p",null,"Note : "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"This activity can be done only when the bot has been pushed and staging/ production bots exist. "),Object(a.b)("li",{parentName:"ol"},"Compare changes will appear only if there are changes. "),Object(a.b)("li",{parentName:"ol"},"The following combinations can be compare. Sandbox > Staging and Staging >  Production. ")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Step 1")," : Go to the developer section."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Step 2")," : Under cloud functions, on the top left you will see the COMPARE button. "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Step 3")," : Click on the compare button to see new files created (C with green)/ deleted files (D with red) and modified files (M with blue) as compared to the next environment"),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/BI0cyiysTzuv1615523589576.png",alt:"how to compare code snippets"}))))}s.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);