"use strict";(self.webpackChunkvickyhella_github_io=self.webpackChunkvickyhella_github_io||[]).push([[7411],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4519:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905));const o={title:"git remote"},i=void 0,c={unversionedId:"development-basics/git/git-remote",id:"development-basics/git/git-remote",title:"git remote",description:"git remote is used to manage the repositories that are tracked.",source:"@site/docs/development-basics/git/git-remote.md",sourceDirName:"development-basics/git",slug:"/development-basics/git/git-remote",permalink:"/zh/docs/development-basics/git/git-remote",draft:!1,editUrl:"https://github.com/vickyhella/vickyhella.github.io/edit/main/docs/development-basics/git/git-remote.md",tags:[],version:"current",lastUpdatedBy:"vickyhella",lastUpdatedAt:1689851455,formattedLastUpdatedAt:"2023\u5e747\u670820\u65e5",frontMatter:{title:"git remote"},sidebar:"tutorialSidebar",previous:{title:"gh pr checkout",permalink:"/zh/docs/development-basics/git/gh-pr-checkout"},next:{title:"git switch",permalink:"/zh/docs/development-basics/git/git-switch"}},l={},p=[{value:"git remote add",id:"git-remote-add",level:2},{value:"git remote add -t <code>&lt;branch&gt;</code>",id:"git-remote-add--t-branch",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git remote")," is used to manage the repositories that are tracked."),(0,a.kt)("h2",{id:"git-remote-add"},"git remote add"),(0,a.kt)("p",null,"Adds a remote repo named ",(0,a.kt)("inlineCode",{parentName:"p"},"<name>")," for the repository at ",(0,a.kt)("inlineCode",{parentName:"p"},"<URL>"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <URL>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add <other-user> https://github.com/other-user/repo-name.git\n")),(0,a.kt)("h2",{id:"git-remote-add--t-branch"},"git remote add -t ",(0,a.kt)("inlineCode",{parentName:"h2"},"<branch>")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote add")," tracks all branches in a repo. However, there are times when you only want to track a specific branch. In this case, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-t <branch>")," option to specify a branch to track:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git remote add <name> <url> -t <branch>\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can specify more than one ",(0,a.kt)("inlineCode",{parentName:"p"},"-t <branch>")," to track multiple desired branches.")),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-remote"},"git-remote"),"."))}d.isMDXComponent=!0}}]);