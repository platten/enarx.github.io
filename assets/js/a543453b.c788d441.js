"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1416],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,y=f["".concat(l,".").concat(m)]||f[m]||u[m]||c;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9314:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={},l=void 0,s={unversionedId:"Technical/Process-Flow",id:"Technical/Process-Flow",title:"Process-Flow",description:"This is a high-level view of the Enarx process flow.",source:"@site/docs/Technical/Process-Flow.md",sourceDirName:"Technical",slug:"/Technical/Process-Flow",permalink:"/docs/Technical/Process-Flow",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/Technical/Process-Flow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebAssembly",permalink:"/docs/Technical/WebAssembly"},next:{title:"Syscall Proxy",permalink:"/docs/Technical/Syscall-Proxy"}},p=[],u={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This is a high-level view of the Enarx process flow."),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/enarx/enarx.github.io/main/static/assets/images/simplified-enarx-flow.png",alt:"Simplified Enarx process flow"})),(0,c.kt)("p",null,"For more information about the components mentioned, please refer back to ",(0,c.kt)("a",{parentName:"p",href:"Components"},"Enarx components page"),"."))}f.isMDXComponent=!0}}]);