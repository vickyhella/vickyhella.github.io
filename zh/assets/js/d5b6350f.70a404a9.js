"use strict";(self.webpackChunkvickyhella_github_io=self.webpackChunkvickyhella_github_io||[]).push([[7015],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=u(n),s=o,f=m["".concat(l,".").concat(s)]||m[s]||p[s]||i;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={title:"\u547d\u4ee4",sidebar_position:2},l=void 0,u={unversionedId:"tech/commands",id:"tech/commands",title:"\u547d\u4ee4",description:"Introduction",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tech/commands.md",sourceDirName:"tech",slug:"/tech/commands",permalink:"/zh/docs/tech/commands",editUrl:"https://github.com/vickyhella/vickyhella.github.io/edit/main/docs/tech/commands.md",tags:[],version:"current",lastUpdatedBy:"vickyhella",lastUpdatedAt:1664116874,formattedLastUpdatedAt:"2022/9/25",sidebarPosition:2,frontMatter:{title:"\u547d\u4ee4",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/zh/docs/tech/git"},next:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/zh/docs/tech/regex"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Commands",id:"commands",level:2},{value:"vi/vim",id:"vivim",level:3},{value:"ls",id:"ls",level:3},{value:"mv",id:"mv",level:3},{value:"rm",id:"rm",level:3},{value:"echo $PATH",id:"echo-path",level:3}],m={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This document includes some basic commands I learned."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"vivim"},"vi/vim"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vi .\nvi <filename-directory>\nsudo vi /etc/hosts # To modify host/add IP-domain mapping\n")),(0,i.kt)("h3",{id:"ls"},"ls"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ls -lt \nls -ltr s*\n")),(0,i.kt)("h3",{id:"mv"},"mv"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"")),(0,i.kt)("h3",{id:"rm"},"rm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rm -rf <filename>\nrm -rf <directory>\n")),(0,i.kt)("h3",{id:"echo-path"},"echo $PATH"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo $PATH\nexport PATH=$PATH:<other-path> # or\nexport PATH=<other-path>:$PATH\nwhich <command-line-tool> \n")))}s.isMDXComponent=!0}}]);