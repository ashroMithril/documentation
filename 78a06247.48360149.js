(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(221)),o={title:"app.getTicket",sidebar_label:"app.getTicket"},c={unversionedId:"developer/app/components/get-ticket",id:"developer/app/components/get-ticket",isDocsHomePage:!1,title:"app.getTicket",description:"It is used to a fetch ticket details.",source:"@site/docs/developer/app/components/get-ticket.md",slug:"/developer/app/components/get-ticket",permalink:"/docs/developer/app/components/get-ticket",version:"current",sidebar_label:"app.getTicket",sidebar:"developer",previous:{title:"app.getSupportSettings",permalink:"/docs/developer/app/components/get-support-settings"},next:{title:"app.getVariable",permalink:"/docs/developer/app/components/get-variable"}},i=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],l={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"It is used to a fetch ticket details."),Object(p.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(p.b)("p",null,"ticketId\n\u200b"),Object(p.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(p.b)("p",null,"An Object, with success data/failure message\n\u200b"),Object(p.b)("h2",{id:"example-usage"},"Example Usage"),Object(p.b)("p",null,"\u200b"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'app.getTicket({ticketId: "123"}).then((result) => {\n    app.log(result, "getTicket result")\n}).catch(err => {\n    app.log(err, "getTicker error");\n});\n')))}u.isMDXComponent=!0},221:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||p;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<p;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);