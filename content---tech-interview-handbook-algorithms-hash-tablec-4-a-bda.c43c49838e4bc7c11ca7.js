(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{129:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"b",function(){return s});var r=t(0),a=t.n(r),i=a.a.createContext({}),o=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=o(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},p=function(e){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),c=o(n);return a.a.createElement(c[i+"."+t]||c[t]||u[t]||r,n?Object.assign({},l,{components:n}):l)};function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return o}),t.d(n,"rightToc",function(){return l}),t.d(n,"default",function(){return p});t(0);var r=t(129);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o={id:"hash-table",title:"Hash Table"},l=[{value:"More questions",id:"more-questions",children:[]}],c={rightToc:l},u="wrapper";function p(e){var n=e.components,t=i(e,["components"]);return Object(r.b)(u,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",null,Object(r.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"more-questions"})),Object(r.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#more-questions"}),"#"),"More questions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Describe an implementation of a least-used cache, and big-O notation of it."),Object(r.b)("li",{parentName:"ul"},"A question involving an API's integration with hash map where the buckets of hash map are made up of linked lists."),Object(r.b)("li",{parentName:"ul"},"Implement data structure ",Object(r.b)("inlineCode",{parentName:"li"},"Map")," storing pairs of integers (key, value) and define following member functions in O(1) runtime: ",Object(r.b)("inlineCode",{parentName:"li"},"void insert(key, value)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"void delete(key)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"int get(key)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"int getRandomKey()"),". ",Object(r.b)("a",a({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/08/14/uber-interview-question-map-implementation/"}),"(Solution)"))))}p.isMDXComponent=!0}}]);