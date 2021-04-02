(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(226)),o={title:"app.updateTicketCustomFields",sidebar_label:"app.updateTicketCustomFields"},c={unversionedId:"developer/app/components/update-ticket-custom-fields",id:"developer/app/components/update-ticket-custom-fields",isDocsHomePage:!1,title:"app.updateTicketCustomFields",description:"app.updateTicketCustomFields is used to update the custom fields that are declared when creating a ticket.",source:"@site/docs/developer/app/components/update-ticket-custom-fields.md",slug:"/developer/app/components/update-ticket-custom-fields",permalink:"/docs/developer/app/components/update-ticket-custom-fields",version:"current",sidebar_label:"app.updateTicketCustomFields",sidebar:"developer",previous:{title:"app.updateTicketCsat",permalink:"/docs/developer/app/components/update-ticket-csat"},next:{title:"app.uploadWhatsappMedia",permalink:"/docs/developer/app/components/upload-whatsapp-media"}},i=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example",id:"example",children:[]}],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"app.updateTicketCustomFields is used to update the custom fields that are declared when creating a ticket."),Object(p.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(p.b)("p",null,"ticketId, customFields\n\u200b"),Object(p.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(p.b)("p",null,"Object, giving success/failure message.\n\u200b"),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("p",null,"\u200b"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'//lets assume the custom field we wish to update is the address of the user.\n app.updateTicketCustomFields({ticketId: "12345", address: "new address of the user."}).then((res) => {\n    app.log(res); //object, with sucess message\n}).catch(err => {\n    app.log(err); //object, with failure message\n});\n')))}u.isMDXComponent=!0},226:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(o,".").concat(m)]||l[m]||d[m]||p;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<p;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);