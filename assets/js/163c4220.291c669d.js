"use strict";(self.webpackChunkvickyhella_github_io=self.webpackChunkvickyhella_github_io||[]).push([[9722],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5619:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var a=t(3117),r=(t(7294),t(3905));const o={title:"Managing Packages",sidebar_position:7},i=void 0,c={unversionedId:"website-management/managing-packages",id:"website-management/managing-packages",title:"Managing Packages",description:"Yarn and NPM are used to install and manage project dependencies.",source:"@site/docs/website-management/managing-packages.md",sourceDirName:"website-management",slug:"/website-management/managing-packages",permalink:"/docs/website-management/managing-packages",draft:!1,editUrl:"https://github.com/vickyhella/vickyhella.github.io/edit/main/docs/website-management/managing-packages.md",tags:[],version:"current",lastUpdatedBy:"vickyhella",sidebarPosition:7,frontMatter:{title:"Managing Packages",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Google Tags",permalink:"/docs/website-management/google-tags"},next:{title:"Introduction to DITA",permalink:"/docs/dita/"}},s={},l=[{value:"Adding Packages",id:"adding-packages",level:2},{value:"Upgrading Packages",id:"upgrading-packages",level:2}],u=(p="Highlight",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const g={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Yarn")," and ",(0,r.kt)(u,{color:"#1877F2",mdxType:"Highlight"},"NPM")," are used to install and manage project dependencies.",(0,r.kt)("p",null,"This document outlines some common ",(0,r.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Yarn")," commands."),(0,r.kt)("h2",{id:"adding-packages"},"Adding Packages"),(0,r.kt)("p",null,"To add a package, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add [package-name]@[version]\n# Exmaples\nyarn add @docusaurus/core@latest\n# Upgrade two packages\nyarn add react@latest react-dom@latest\n")),(0,r.kt)("p",null,"For details, see ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/cli/add/"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn add")),"."),(0,r.kt)("h2",{id:"upgrading-packages"},"Upgrading Packages"),(0,r.kt)("p",null,"To upgrade a package, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn upgrade [package-name]@[version]\n# Examples\nyarn upgrade @docusaurus/core@latest\nyarn upgrade @docusaurus/core@latest @docusaurus/plugin-client-redirects@latest @docusaurus/plugin-content-blog@latest @docusaurus/plugin-content-docs@latest @docusaurus/plugin-content-pages@latest @docusaurus/plugin-debug@latest @docusaurus/preset-classic@latest\n")),(0,r.kt)("p",null,"For details, see ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/cli/upgrade/"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn upgrade")),"."))}m.isMDXComponent=!0}}]);