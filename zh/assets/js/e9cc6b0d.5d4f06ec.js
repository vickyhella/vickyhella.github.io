"use strict";(self.webpackChunkvickyhella_github_io=self.webpackChunkvickyhella_github_io||[]).push([[5865],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1289:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={title:"Docusaurus",sidebar_position:1},l=void 0,s={unversionedId:"website-building/docusaurus",id:"website-building/docusaurus",title:"Docusaurus",description:"Introduction",source:"@site/docs/website-building/docusaurus.md",sourceDirName:"website-building",slug:"/website-building/docusaurus",permalink:"/zh/docs/website-building/docusaurus",editUrl:"https://github.com/vickyhella/vickyhella.github.io/edit/main/docs/website-building/docusaurus.md",tags:[],version:"current",lastUpdatedBy:"vickyhella",lastUpdatedAt:1663513402,formattedLastUpdatedAt:"2022/9/18",sidebarPosition:1,frontMatter:{title:"Docusaurus",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/zh/docs/tech/basic"},next:{title:"Web Hosting",permalink:"/zh/docs/website-building/web-hosting"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Why Docusaurus",id:"why-docusaurus",level:3},{value:"Features to Implement",id:"features-to-implement",level:2},{value:"1. Versioning",id:"1-versioning",level:3},{value:"2. Bilingual",id:"2-bilingual",level:3},{value:"3. Generate PDF",id:"3-generate-pdf",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Docusaurus is a static website generator, which I used to build this website and help build our company's documentation websites. I learned I lot about the framework and want to record my learning process here."),(0,o.kt)("h3",{id:"why-docusaurus"},"Why Docusaurus"),(0,o.kt)("p",null,"When I first started building my own blog, I wrote it in HTML and CSS (yes, writing directly in HTML, kinda like what a newbee would do, LOL). But as I started to know Docusaurus, I realized it allows me to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write directly in markdown, making it easy to maintain the content"),(0,o.kt)("li",{parentName:"ul"},"Use its preset themes"),(0,o.kt)("li",{parentName:"ul"},"Look more like a pro (indeed)")),(0,o.kt)("p",null,"So I decided to migrate my blog to Docusaurus and I think it was a wise choice."),(0,o.kt)("h2",{id:"features-to-implement"},"Features to Implement"),(0,o.kt)("p",null,"In order to allow myself to add content incrementaly, I will break down this document by feature and explain how each of them was implmented."),(0,o.kt)("h3",{id:"1-versioning"},"1. Versioning"),(0,o.kt)("h3",{id:"2-bilingual"},"2. Bilingual"),(0,o.kt)("h3",{id:"3-generate-pdf"},"3. Generate PDF"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx docusaurus-pdf <HTTPS address of the index page> <filename.pdf> &\n")))}m.isMDXComponent=!0}}]);