"use strict";(self.webpackChunkvickyhella_github_io=self.webpackChunkvickyhella_github_io||[]).push([[9135],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=a.createContext({}),u=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(g.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,d=s["".concat(g,".").concat(m)]||s[m]||c[m]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return u}});var a=n(3117),o=(n(7294),n(3905));const r={title:"Google Tags",sidebar_position:6},i=void 0,l={unversionedId:"website-management/google-tags",id:"website-management/google-tags",title:"Google Tags",description:"You can use Google tags to track how users are using your website.",source:"@site/docs/website-management/google-tags.md",sourceDirName:"website-management",slug:"/website-management/google-tags",permalink:"/zh/docs/website-management/google-tags",draft:!1,editUrl:"https://github.com/vickyhella/vickyhella.github.io/edit/main/docs/website-management/google-tags.md",tags:[],version:"current",lastUpdatedBy:"vickyhella",lastUpdatedAt:1692612851,formattedLastUpdatedAt:"2023\u5e748\u670821\u65e5",sidebarPosition:6,frontMatter:{title:"Google Tags",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Dealing with Broken Links",permalink:"/zh/docs/website-management/broken-links"},next:{title:"Managing Packages",permalink:"/zh/docs/website-management/managing-packages"}},g={},u=[{value:"plugin-google-gtag",id:"plugin-google-gtag",level:2},{value:"plugin-google-tag-manager",id:"plugin-google-tag-manager",level:2}],p={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use Google tags to track how users are using your website."),(0,o.kt)("h2",{id:"plugin-google-gtag"},"plugin-google-gtag"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"plugin-google-gtag")," allows you to send event data to Google Analytics, Google Ads, and Google Marketing Platform. To begin with:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://tagassistant.google.com/"},"Google Tag Assistant"),", click ",(0,o.kt)("strong",{parentName:"p"},"Add domain"),", and input your website's URL. After this, you will obtain your ",(0,o.kt)("inlineCode",{parentName:"p"},"trackingID")," formatted as ",(0,o.kt)("inlineCode",{parentName:"p"},"G-xxxxxxxxxx"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to your project's root and run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @docusaurus/plugin-google-gtag")," to install the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag"},"plugin-google-gtag")," plugin.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the plugin in your ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file as follows (replace ",(0,o.kt)("inlineCode",{parentName:"p"},"G-999X9XX9XX")," with the value you obtained from Step 1):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-google-gtag',\n      {\n        trackingID: 'G-999X9XX9XX',\n        anonymizeIP: true,\n      },\n    ],\n  ],\n};\n")))),(0,o.kt)("h2",{id:"plugin-google-tag-manager"},"plugin-google-tag-manager"),(0,o.kt)("p",null,"You can use this plugin in conjunction with ",(0,o.kt)("a",{parentName:"p",href:"#plugin-google-gtag"},"gtag")," for in-depth analysis of how users are using your site."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://tagassistant.google.com/"},"Google Tag Assistant"),", click ",(0,o.kt)("strong",{parentName:"p"},"Add domain"),", and input your website's URL. After this, you will obtain your ",(0,o.kt)("inlineCode",{parentName:"p"},"containerId")," formatted as ",(0,o.kt)("inlineCode",{parentName:"p"},"GTM-xxxxx"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to your project's root and run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @docusaurus/plugin-google-tag-manager")," to install the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-tag-manager"},"plugin-google-tag-manager")," plugin.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the plugin in your ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file as follows (replace ",(0,o.kt)("inlineCode",{parentName:"p"},"GTM-12345")," with the value you obtained from Step 1):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-google-tag-manager',\n      {\n        containerId: 'GTM-12345',\n      },\n    ],\n  ],\n};\n")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"These two plugins are only active in production.")))}c.isMDXComponent=!0}}]);